export const PageLinks = ({ id, href, text, className }) => {
  return (
    <li key={id}>
      <a href={href} className={className}>
        {" "}
        {text}{" "}
      </a>
    </li>
  );
};

export const SocialLinks = ({ id, href, text, icon_className, className }) => {
  return (
    <li id={id}>
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        <i className={icon_className}></i>
      </a>
    </li>
  );
};
