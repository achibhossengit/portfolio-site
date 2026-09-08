const Divider = ({ label }) => (
  <div className="section-divider" role="separator" aria-label={label}>
    {label ? <h2 className="section-divider-label">{label}</h2> : null}
    <span className="section-divider-line" />
  </div>
);

export default Divider;
