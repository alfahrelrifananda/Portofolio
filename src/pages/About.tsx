import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Style from "../assets/About.module.css";

export default function About() {
  return (
    <>
      <Nav />
      <div className={Style.container}>
        <header>About Me</header>
        <br />
        <h4>Introduction</h4>
        <br />
        <p>
          Hi, my name is <b> Nabillio Alfahrel Rifananda.</b> You can call me{" "}
          <b>
            <i>Fahrel.</i>
          </b>{" "}
          I'm a fresh graduate from Vocational High School 5 Surakarta with a
          major in Software Engineering.
          <br />
          <br />
          I'm now <b>20 years old,</b> looking for a job while trying to get
          into college.
          <br />
          <br />
          So that's pretty much it.
        </p>
        <br />
        <h4>Life</h4>
        <br />
        <p>
          I was born on <b> March 3rd, 2005</b>
          <a href="https://www.google.com/search?client=firefox-b-d&q=solo+indonesia">
            {" "}
            in Solo, Indonesia.{" "}
          </a>{" "}
          I've lived my whole life in this city, and this city has a special
          place in my heart. Everything about it is just great. I currently live
          only with my grandma. My parents broke up when I was still a kid, and
          custody fell into my mom's hands, but we don't actually live under one
          roof because the house isn't big enough, so she had to move to a kost
          (small apartment) with my older brother. However, she constantly
          visits me and gives me money every week. I rarely see my father; the
          last time I saw him was a year ago. I don't know where he is or how
          his condition is.
          <br />
          <br />
          Now I'm focused on how I can make some money without any help from my
          parents or relatives. In short, I currently need a fucking job.
        </p>
        <br />
        <h4>Education</h4>
        <br />
        <p>
          Around 2013, I started my first year of elementary school at a state
          school called <b>SDN Bayan,</b> but I had trouble in 3rd grade when I
          rarely attended school for a reason I still don't understand (probably
          just laziness), which made me restart 3rd grade after a one-year
          break. However, I had to move to another school because I moved to
          another kampung called Banyuagung, and the school I attended was
          called <b> SDN Banyuagung 3.</b> This time I did great, met a lot of
          great friends, rarely missed school days, and got a decent final
          score.
          <br />
          <br />
          After finishing elementary school, I attended a middle school called{" "}
          <b>SMPN 3 Surakarta around 2019.</b> In my first year, I can say I was
          doing fine until COVID-19 came and I had to study at home because of
          the restrictions. I had to experience most of my middle school at
          home, which sucked because most people say it should have been the
          peak of life (they probably just exaggerate). So yeah, by the time
          COVID-19 restrictions were lowering when I was already in 3rd grade
          (last semester), I could come to school with low restrictions like
          having to wear masks. Not long after that, I finished middle school
          just fine. I just missed the middle school experience like most people
          had before COVID.
          <br />
          <br />
          Next, I attended a vocational high school called{" "}
          <b> SMKN 5 Surakarta.</b> I didn't pick regular high school because at
          the time I thought to myself I needed to get a job ASAP (because my
          parents and I had bad finances), so I needed a school that could drive
          me toward that goal. And I picked this school (just to realize I was
          wrong). In this school, I had an option to pick a major, so I picked
          Computer Science because at the time I had some interest in this
          field. So I just went in and graduated.
        </p>
        <br />
        <h4>Work</h4>
        <br />
        <p>
          I've had a little experience other than my internship at{" "}
          <b>Digimizu Digital Management</b> as a Web Developer, primarily
          focused on school websites. At this company, I had what I could say
          was a beneficial experience. In this short time (6 months), I got into
          WordPress – this was the first time I knew about it. Yeah, this is a
          great tool for building websites without code, and I got deep into
          this CMS tool because our project was built with these tools.
        </p>
        <br />
        <h4>Certificates</h4>
        <br />
        <p>
          The only certificates I've got are certificates I received from my
          internship at <b>Digimizu Digital Management.</b>
        </p>
        <br />
        <h4>Leisure</h4>
        <br />
        <p>
          I have some hobbies other than programming, like listening to{" "}
          <b>music, watching movies, and reading books</b> (mostly philosophical
          books).
        </p>
      </div>
      <Footer />
    </>
  );
}
