const Divider = ({ label }) => (
  <div className="divider divider-start mb-0 mt-16 h-auto before:bg-base-content/25 after:bg-base-content/25">
    {label ? (
      <h2 className="m-0 text-sm font-medium uppercase tracking-wide text-base-content/60">
        {label}
      </h2>
    ) : null}
  </div>
);

export default Divider;
