const Introduction = () => {
  const portrait = new URL('../../backgroundphoto.jpeg', import.meta.url).href;

  return (
    <main>
      <section className="about">
        <div className="main">
          <img src={portrait} alt="Nikhil Kumar" width="400" height="150" />
          <div className="about-text">
            <h2>Introduction</h2>
            <h5>Developer <span>& Designer</span></h5>
            <p>
              Hello, I am Nikhil Kumar, Full Stack Web & Android Developer. Currently I am pursuing my
              B.Tech degree in Computer Science & Engineering from LPU. I can provide clean code, pixel perfect
              design and interactive animations for web and Android Development.
            </p>
            <p>
              I have the knowledge of some programming languages such as C++, JAVA, Python, HTML, CSS,
              JavaScript, ReactJS, React Native, SQL, Database, PHP, Node.js, MongoDB.
            </p>
            <p>
              For more information stay connected on <a href="https://www.linkedin.com/in/nikhilkumar11909850/"> LinkedIn</a>
              and <a href="https://github.com/Nikhilsoul"> GitHub</a>.
            </p>
            <button type="button">Thank You</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Introduction;
