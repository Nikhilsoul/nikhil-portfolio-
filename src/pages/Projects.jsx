const Projects = () => (
  <main>
    <div className="service">
      <div className="title">
        <h2>My Some Projects</h2>
      </div>
      <div className="box" style={{ flexDirection: 'column', minHeight: 'auto', paddingBottom: '60px' }}>
        <div className="card" style={{ width: '100%', maxWidth: '700px' }}>
          <h5>Desi Fitness Gym</h5>
          <p className="pra">
            A responsive gym website showcasing workouts and fitness training.
          </p>
          <p style={{ textAlign: 'center' }}>
            <a className="button" href="" target="_blank" rel="noreferrer">Visit Project</a>
          </p>
        </div>
        <div className="card" style={{ width: '100%', maxWidth: '700px' }}>
          <h5>Blogging Website</h5>
          <p className="pra">
            A modern blog layout demonstrating content publishing and responsive design.
          </p>
          <p style={{ textAlign: 'center' }}>
            <a className="button" href="" target="_blank" rel="noreferrer">Visit Project</a>
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default Projects;
