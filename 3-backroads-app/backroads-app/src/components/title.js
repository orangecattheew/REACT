export const SectionTitle = (props) => {
  const { a, b } = props;
  return (
    <div className="section-title">
      <h2>
        {a} <span>{b}</span>
      </h2>
    </div>
  );
};
export default SectionTitle;
