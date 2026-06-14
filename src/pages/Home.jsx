const Home = () => {
  const portrait = new URL('../../backgroundphoto.jpeg', import.meta.url).href;

  return (
    <main>
      <div className="hero">
        <div className="content">
          <h4>Hello, my name is</h4>
          <h1>
            Nikhil <span>Kumar</span>
          </h1>
          <h3>I'm a <span>Software</span> Developer💻</h3>
          <div className="newslatter">
            <form onSubmit={(event) => event.preventDefault()}>
              <input type="email" name="email" id="mail" placeholder="Enter Your Email" />
              <input type="submit" name="submit" value="Lets Start" />
            </form>
          </div>
        </div>
      </div>

      <section className="about">
        <div className="main">
          <img src={portrait} alt="Nikhil Kumar" />
          <div className="about-text">
            <h2>Introduction</h2>
            <h5>Designer <span>& Developer</span></h5>
            <p>
              Hii, I am Nikhil Kumar, Full Stack Web & Android Developer with experience of 1 year.
              I can provide clean code, pixel perfect design and interactive web animations as well as
              Android Development.
            </p>
            <button type="button">Let's Talk</button>
          </div>
        </div>
      </section>

      <div className="service">
        <div className="title">
          <h2>My Opinions</h2>
        </div>

        <div className="box">
          <div className="card">
            <i className="fas fa-bars" />
            <h5>Web Development</h5>
            <div className="pra">
              <p>
                Don’t read success stories, you will only get message. Read failure stories, you will
                get some ideas to get success<br />- Dr. APJ Abdul Kalam
              </p>
              <p style={{ textAlign: 'center' }}>
                <a className="button" href="#">Read More</a>
              </p>
            </div>
          </div>

          <div className="card">
            <i className="far fa-user" />
            <h5>Being Confident</h5>
            <div className="pra">
              <p>
                Aap jo hai, Jaise bhi hai, us par hi guman kigiye kyonki aap jaisa hona bhi kisi ke bas ki
                baat nhi..<br />😎✌
              </p>
              <p style={{ textAlign: 'center' }}>
                <a className="button" href="#">Read More</a>
              </p>
            </div>
          </div>

          <div className="card">
            <i className="far fa-bell" />
            <h5>Be Positive</h5>
            <div className="pra">
              <p>
                If you fail, never give up because F.A.I.L. means “First Attempt In Learning”. End is not
                the end, in fact E.N.D. means “Effort Never Dies.” So let’s be positive.
              </p>
              <p style={{ textAlign: 'center' }}>
                <a className="button" href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-me">
        <p>Let Me Get You A Beautiful Website.</p>
        <a className="button-two" href="#contact">Hire Me</a>
      </div>
    </main>
  );
};

export default Home;
