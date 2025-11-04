import "./Button.css";

export const PrimaryButton = ({
  boxShadow = false,
  onClick = () => {},
  children
}) => {
  return (
    <button
      className="primary-button"
      onClick={onClick}
      style={ boxShadow ? { boxShadow: "0.1rem 0.1rem 0.25rem #40404070" }: {}}
    >
      {children}
    </button>
  );
}

export const SecondaryButton = ({
  boxShadow = false,
  onClick = () => {},
  children
}) => {
  return (
    <button
      className="secondary-button"
      onClick={onClick}
      style={ boxShadow ? { boxShadow: "0.1rem 0.1rem 0.25rem #5a5a5a" }: {}}
    >
      {children}
    </button>
  );
}
