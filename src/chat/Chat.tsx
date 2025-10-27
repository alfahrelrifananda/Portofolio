import React, { useState, useEffect, useRef } from "react";
import styles from "../assets/Chat.module.css";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  onValue,
  set,
  query,
  orderByChild,
  limitToLast,
} from "firebase/database";

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: number;
  color: string;
}

const COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E2",
];

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [username, setUsername] = useState("");
  const [userColor, setUserColor] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const randomUser = `User${Math.floor(Math.random() * 10000)}`;
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setUsername(randomUser);
    setUserColor(randomColor);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isJoined) {
      const cleanupOldMessages = async () => {
        const messagesRef = ref(database, "messages");
        await onValue(
          messagesRef,
          (snap) => {
            const data = snap.val();
            if (data) {
              const oneDayAgo = Date.now() - 1 * 24 * 60 * 60 * 1000;
              Object.keys(data).forEach((key) => {
                if (data[key].timestamp < oneDayAgo) {
                  const oldMsgRef = ref(database, `messages/${key}`);
                  set(oldMsgRef, null);
                }
              });
            }
          },
          { onlyOnce: true }
        );
      };

      const cleanupInactiveUsers = async () => {
        const usersRef = ref(database, "users");
        await onValue(
          usersRef,
          (snap) => {
            const data = snap.val();
            if (data) {
              const oneHourAgo = Date.now() - 60 * 60 * 1000;
              Object.keys(data).forEach((key) => {
                if (data[key].lastSeen < oneHourAgo) {
                  const inactiveUserRef = ref(database, `users/${key}`);
                  set(inactiveUserRef, null);
                }
              });
            }
          },
          { onlyOnce: true }
        );
      };

      cleanupOldMessages();
      cleanupInactiveUsers();

      const cleanupInterval = setInterval(cleanupInactiveUsers, 60000);

      const messagesRef = ref(database, "messages");
      const messagesQuery = query(
        messagesRef,
        orderByChild("timestamp"),
        limitToLast(100)
      );

      const unsubscribeMessages = onValue(messagesQuery, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const messagesList = Object.keys(data).map((key) => ({
            ...data[key],
            id: key,
          }));
          setMessages(messagesList);
        }
      });

      const usersRef = ref(database, "users");
      const unsubscribeUsers = onValue(usersRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const now = Date.now();
          const activeUsers = Object.values(data)
            .filter((user: any) => now - user.lastSeen < 60000)
            .map((user: any) => user.username);
          setOnlineUsers(activeUsers);
        }
      });

      const updatePresence = () => {
        const userRef = ref(database, `users/${username}`);
        set(userRef, {
          username,
          color: userColor,
          lastSeen: Date.now(),
        });
      };

      updatePresence();
      const presenceInterval = setInterval(updatePresence, 30000);

      return () => {
        unsubscribeMessages();
        unsubscribeUsers();
        clearInterval(presenceInterval);
        clearInterval(cleanupInterval);
      };
    }
  }, [isJoined, username, userColor]);

  const handleJoinChat = async () => {
    if (username.trim()) {
      setLoading(true);
      try {
        const messagesRef = ref(database, "messages");
        const joinMessage = {
          user: "System",
          text: `${username} joined the chat`,
          timestamp: Date.now(),
          color: "#888888",
        };

        await push(messagesRef, joinMessage);

        const userRef = ref(database, `users/${username}`);
        await set(userRef, {
          username,
          color: userColor,
          lastSeen: Date.now(),
        });

        setIsJoined(true);
      } catch (error) {
        console.error("Failed to join chat:", error);
        alert("Failed to join chat. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim() && isJoined) {
      setLoading(true);
      try {
        const messagesRef = ref(database, "messages");
        const newMessage = {
          user: username,
          text: inputText.trim(),
          timestamp: Date.now(),
          color: userColor,
        };

        await push(messagesRef, newMessage);

        const userRef = ref(database, `users/${username}`);
        await set(userRef, {
          username,
          color: userColor,
          lastSeen: Date.now(),
        });

        setInputText("");
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
        }
      } catch (error) {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCopyMessage = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 150) + "px";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!loading) {
        handleSendMessage();
      }
    }
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!isJoined) {
    return (
      <div className={styles.joinContainer}>
        <div className={styles.joinBox}>
          <div className={styles.joinHeader}>
            <h1 className={styles.title}>Anonymous Chat</h1>
            <p className={styles.subtitle}>
              Join the conversation with people around the world
            </p>
          </div>

          <div className={styles.joinForm}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleJoinChat()}
                className={styles.input}
                placeholder="Enter your username"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Color</label>
              <div className={styles.colorPicker}>
                {COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => setUserColor(color)}
                    className={`${styles.colorButton} ${
                      userColor === color ? styles.colorButtonActive : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleJoinChat}
              disabled={!username.trim() || loading}
              className={styles.joinButton}
            >
              {loading ? "Joining..." : "Join Chat"}
            </button>
          </div>

          <div className={styles.notice}>
            <strong>Note:</strong> Messages are shared with all users and
            visible to everyone. Be respectful!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <div>
              <h1 className={styles.headerTitle}>Anonymous Chat</h1>
              <p className={styles.headerSubtitle}>You are: {username}</p>
            </div>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.onlineText}>
              {onlineUsers.length} online
            </span>
          </div>
        </div>
      </div>

      <div className={styles.messagesArea}>
        <div className={styles.messagesList}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.messageWrapper} ${
                msg.user === username
                  ? styles.messageWrapperOwn
                  : styles.messageWrapperOther
              }`}
            >
              <div
                className={`${styles.messageBubble} ${
                  msg.user === "System"
                    ? styles.messageSystem
                    : msg.user === username
                    ? styles.messageOwn
                    : styles.messageOther
                }`}
              >
                {msg.user !== "System" && (
                  <div className={styles.messageHeader}>
                    <div
                      className={styles.userDot}
                      style={{ backgroundColor: msg.color }}
                    />
                    <span className={styles.username}>{msg.user}</span>
                  </div>
                )}
                <pre className={styles.messageText}>{msg.text}</pre>
                <div className={styles.messageFooter}>
                  <span className={styles.messageTime}>
                    {formatTime(msg.timestamp)}
                  </span>
                  {msg.user !== "System" && (
                    <button
                      onClick={() => handleCopyMessage(msg.text, msg.id)}
                      className={styles.copyButton}
                    >
                      {copiedId === msg.id ? "Copied" : "Copy"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className={styles.inputArea}>
        <div className={styles.inputContainer}>
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message... (Shift+Enter for new line)"
            className={styles.messageInput}
            disabled={loading}
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || loading}
            className={styles.sendButton}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
