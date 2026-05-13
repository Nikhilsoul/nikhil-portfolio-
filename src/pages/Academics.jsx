const Academics = () => {
  const portrait = new URL('../../dslr nk.jpg', import.meta.url).href;

  return (
    <main>
      <section className="about">
        <div className="main">
          <img src={portrait} alt="Nikhil Kumar" width="200" height="150" />
          <div className="about-text">
            <h2>Academics:</h2>
            <h5>Developer <span>& Designer</span></h5>
            <p>
              Hi, I am Nikhil Kumar going to share my Skills and Experience:-
              <br />
              <u><b>TECHNICAL SKILL-</b></u>
              <br /> C++, JAVA, Python, DSA, HTML, CSS, JavaScript, ReactJs, SQL, DATABASE, PHP, MongoDB etc..
              <br />
              <u>EXPERIENCES:</u>
              <br />
              1) 3 months internship training from SHINE PROJECT Company.
              <br />
              2) Done Summer Training in Web Development from Board Infinity.
              <br />
              <u><b>CERTIFICATION:</b></u>
              <br />
              (i) Data Analytic and Management by IBM.
              <br />
              (ii) 6 weeks WEB DEVELOPMENT Training by Board Infinity.
              <br />
              (iii) Advance Diploma in Computer Application, NGO Reg. no.-257/2015-16.
              <br />
              (iv) Data Structures & Algorithms by UpGrad.
              <br />
              (v) Full Stack Web Development Bootcamp by Udemy.
              <br />
              (vi) 30 hrs. Android App Development by LPU.
              <br />
              <u><b>SOFT SKILLS:</b></u>
              <br />
              1) Adaptability
              <br />
              2) Team Work
              <br />
              3) Communication
              <br />
              4) Work Ethic
              <br />
              5) Management
            </p>
            <p>
              For more information stay connected on <a href="https://www.linkedin.com/in/nikhilkumar11909850/">LinkedIn</a>
              and <a href="https://github.com/Nikhilsoul">GitHub</a>.
            </p>
            <button type="button">Thank you</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
