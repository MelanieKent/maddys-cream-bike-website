import "./Button.css";

export const PrimaryButton = ({ text }) => {
  return (
    <button className="primary-button">
      {text}
    </button>
  );
}

export const SecondaryButton = ({ text }) => {
  return (
    <button className="secondary-button">
      {text}
    </button>
  );
}
