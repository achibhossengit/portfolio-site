const Divider = ({ label }) => (
  <div className="divider divider-start mb-1 mt-20 h-auto md:mt-24 before:bg-base-content/20 after:bg-base-content/20">
    {label ? (
      <h2 className="m-0 text-xl font-semibold uppercase tracking-wide text-base-content/90 md:text-2xl">
        {label}
      </h2>
    ) : null}
  </div>
);

export default Divider;
