import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h2 className="logo">
      Portfo<span>lio</span>
    </h2>
    <ul>
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/introduction">Introduction</NavLink>
      </li>
      <li>
        <NavLink to="/academics">Academics</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Me</NavLink>
      </li>
    </ul>
    <a href="https://web.whatsapp.com/" className="btn" target="_blank" rel="noreferrer">
      Whatsapp
    </a>
  </nav>
);

export default Navbar;
