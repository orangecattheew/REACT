import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data.js";
import { PageLinks, SocialLinks } from "./PageLinks.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            // return <NavbarLink {...link}></NavbarLink>;
            return <PageLinks {...link} className="nav-link"></PageLinks>;
          })}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              // <li id={link.id}>
              //   <a
              //     href={link.href}
              //     target="_blank"
              //     rel="noreferrer"
              //     className="nav-icon"
              //   >
              //     <i className={link.className}></i>
              //   </a>
              // </li>

              <SocialLinks {...link} className="nav-icon"></SocialLinks>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

// const NavbarLink = ({ id, href, text }) => {
//   return (
//     <li key={id}>
//       <a href={href} className="nav-link">
//         {" "}
//         {text}{" "}
//       </a>
//     </li>
//   );
// };

export default Navbar;
