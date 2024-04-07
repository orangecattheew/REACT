import { SectionTitle } from "./title.js";
import { tour_data } from "../data.js";
const tours = () => {
  return (
    <section className="section" id="tours">
      <SectionTitle a="featured" b="tours"></SectionTitle>
      <div className="section-center featured-center">
        {tour_data.map((tour) => {
          return <ToursCards {...tour}></ToursCards>;
        })}
      </div>
    </section>
  );
};
export default tours;

export const ToursCards = ({ id, img, date, title, location, days, price }) => {
  // const { id, img, date, title, location, days, price } = props;
  return (
    <article className="tour-card" id={id}>
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {location}
          </p>
          <p>{days} days</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
};
