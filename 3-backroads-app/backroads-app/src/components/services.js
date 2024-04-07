import { SectionTitle } from "./title.js";
import { services_data } from "../data.js";
const services = () => {
  return (
    <section className="section services" id="services">
      <SectionTitle a="our" b="services"></SectionTitle>
      <div className="section-center services-center">
        {services_data.map((service) => {
          return <Service {...service}></Service>;
        })}
      </div>
    </section>
  );
};
export default services;

const Service = ({ service_icon, service_title, service_text, id }) => {
  // const { service_icon, service_title, service_text, id } = props;
  return (
    <article className="service" id={id}>
      <span className="service-icon">
        <i className={service_icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{service_title}</h4>
        <p className="service-text">{service_text}</p>
      </div>
    </article>
  );
};
