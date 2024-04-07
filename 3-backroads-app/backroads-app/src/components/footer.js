import { pageLinks, socialLinks } from "../data.js";
import { PageLinks, SocialLinks } from "./PageLinks.js";
const footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {" "}
        {pageLinks.map((link) => {
          // return <FooterLink {...link}></FooterLink>;
          return <PageLinks {...link} className="footer-link"></PageLinks>;
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            // <li id={link.id}>
            //   <a
            //     href={link.href}
            //     target="_blank"
            //     rel="noreferrer"
            //     className="footer-icon"
            //   >
            //     <i className={link.className}></i>
            //   </a>
            // </li>
            <SocialLinks {...link} className="footer-icon"></SocialLinks>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default footer;
// const FooterLink = ({ id, href, text }) => {
//   return (
//     <li key={id}>
//       <a href={href} className="footer-link">
//         {" "}
//         {text}{" "}
//       </a>
//     </li>
//   );
// };
