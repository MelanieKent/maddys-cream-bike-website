import "./NamedInput.css";

export const NamedInput = ({
  id,
  title = "",
  type = "text",
  required = false,
  placeholder = ""
}) => {
  return (
    <div className="named-input-container">
      <p className="named-text">{title} {required ? "*" : ""}</p>
      <input
        id={id}
        className="named-input"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export const NamedTextArea = ({
  id,
  title = "",
  type = "text",
  required,
  placeholder = ""
}) => {
  return (
    <div className="named-input-container">
      <p className="named-text">{title}</p>
      <textarea
        id={id}
        className="named-textarea"
        type={type}
        placeholder={placeholder}
        required={required}
        rows={4}
      />
    </div>
  );
}