import Style from "../assets/About.module.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Me - Alfahrel Rifananda";
  }, []);
  return (
    <>
      <div className={Style.container}>
        <header>About Me</header>
        <br />
        <h4>Introduction</h4>
        <br />
        <p>
          Hi, my name is
          <b>Nabillio Alfahrel Rifananda.</b> You can call me
          <i> Fahrel.</i>
          I'm a fresh graduate from <b> Vocational High School 5 Surakarta</b> with a
          major in Software Engineering. I'm currently 20 years old and actively
          looking for a job while preparing to pursue higher education.
        </p>
        <br />
        <h4>Life</h4>
        <br />
        <p>
          I was born on <b>March 3rd, 2005 in Solo, Indonesia.</b> I've lived my
          entire life in this city, and it holds a special place in my heart.
          Everything about Solo is just wonderful. I currently live with my
          grandmother. My parents separated when I was young, and custody was
          given to my mother. However, we don't live under the same roof because
          the house isn't large enough, so she had to move to a kost (small
          apartment) with my older brother. Despite this, she visits me
          regularly and provides financial support every week. I rarely see my
          father—the last time was about a year ago. I'm uncertain about his
          current whereabouts or situation.
          <br />
          <br />
          Right now, I'm focused on becoming financially independent and
          securing employment without relying on help from my parents or
          relatives. Simply put, I really need a job.
        </p>
        <br />
        <h4>Education</h4>
        <br />
        <p>
          I began elementary school around 2013 at
          <b> SDN Bayan,</b>a state school. However, I encountered difficulties
          in 3rd grade when I frequently missed classes for reasons I still
          don't fully understand (probably due to laziness). This led me to
          repeat 3rd grade after taking a one-year break. During this time, I
          had to transfer to
          <b> SDN Banyuagung 3</b> because we moved to a different neighborhood
          called Banyuagung. At this new school, I performed much better—I made
          great friends, maintained good attendance, and achieved decent final
          grades.
          <br />
          <br />
          After completing elementary school, I enrolled at
          <b> SMPN 3 Surakarta</b> in 2019 for middle school. My first year went
          well until COVID-19 arrived, forcing us to study from home due to
          lockdown restrictions. I spent most of my middle school years learning
          remotely, which was disappointing since many people consider this
          period the peak of their school experience (though they might be
          exaggerating). By my final semester in 3rd grade, COVID-19
          restrictions had eased enough for us to return to school with safety
          measures like mandatory masks. I graduated middle school successfully,
          though I missed out on the traditional middle school experience that
          previous generations enjoyed.
          <br />
          <br />
          Next, I attended <b>SMKN 5 Surakarta,</b> a vocational high school. I
          chose this path over regular high school because I believed I needed
          to enter the workforce quickly due to my family's financial
          constraints. I thought vocational school would better prepare me for
          immediate employment (though I later realized this assumption was
          somewhat misguided). At this school, I selected Computer Science as my
          major because I had developed an interest in the field. I successfully
          completed my studies and graduated.
        </p>
        <br />
        <h4>Work</h4>
        <br />
        <p>
          My professional experience is limited to my internship at
          <b> Digimizu Digital Management,</b> where I worked as a Web Developer
          focusing primarily on school websites. During this six-month
          internship, I gained valuable experience and was introduced to
          WordPress for the first time. This powerful content management system
          allows for website creation without extensive coding, and I developed
          considerable expertise with this tool since our projects were built
          using WordPress.
        </p>
        <br />
        <h4>Certificates</h4>
        <br />
        <p>
          The only certificates I've got are certificates I received from my
          internship at <b>Digimizu Digital Management.</b>
        </p>
        <br />
        <h4>Personal Interests</h4>
        <br />
        <p>
          Beyond programming, I enjoy several hobbies including listening to
          music, watching movies, and reading books (particularly philosophical
          works).
        </p>
        <br />
        <h4>Website</h4>
        <br />
        <p>
          You can find the source code of this website in my{" "}
          <a href="https://github.com/alfahrelrifananda/portofolio">
            Github repository.
          </a>
        </p>
      </div>
    </>
  );
}
