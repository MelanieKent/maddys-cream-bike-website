import "./Button.css";

export const PrimaryButton = ({
  type = "button",
  size = "medium",
  boxShadow = false,
  onClick = () => {},
  children
}) => {
  return (
    <button
      className={size !== "small" ? "primary-button" : "primary-button-small"}
      type={type}
      onClick={onClick}
      style={ boxShadow ? { boxShadow: "0.1rem 0.1rem 0.25rem #40404070" }: {}}
    >
      {children}
    </button>
  );
}

export const SecondaryButton = ({
  type = "button",
  size = "medium",
  boxShadow = false,
  onClick = () => {},
  children
}) => {
  return (
    <button
      className="secondary-button"
      type={type}
      onClick={onClick}
      style={ boxShadow ? { boxShadow: "0.1rem 0.1rem 0.25rem #5a5a5a" }: {}}
    >
      {children}
    </button>
  );
}
