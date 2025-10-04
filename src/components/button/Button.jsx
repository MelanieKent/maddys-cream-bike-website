import "./Button.css";

export const PrimaryButton = ({
  boxShadow = false,
  children
}) => {
  return (
    <button
      className="primary-button"
      style={ boxShadow ? { boxShadow: "0.1rem 0.1rem 0.25rem #5a5a5a" }: {}}
    >
      {children}
    </button>
  );
}

export const SecondaryButton = ({
  boxShadow = false,
  children
}) => {
  return (
    <button
      className="secondary-button"
      style={ boxShadow ? { boxShadow: "0.1rem 0.1rem 0.25rem #5a5a5a" }: {}}
    >
      {children}
    </button>
  );
}
