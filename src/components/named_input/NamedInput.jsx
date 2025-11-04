import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
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
      {type == "date" ? 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label={placeholder}
            sx={{
              width: "100%",
              '& .MuiSvgIcon-root': {
                color: "#F1E7D2",
              },
              '& .MuiFormLabel-root': {
                color: "#F1E7D2",
              },
              '& .MuiPickersInputBase-root': {
                color: "#F1E7D2",
              },
              '&.MuiPickersTextField-root': {
                '& fieldset': {
                  borderColor: '#F1E7D2',
                },
              },
              '&.MuiPickersTextField-root.Mui-focused': {
                '&.Mui-focused fieldset': {
                  borderColor: '#E9CF9C',
                },
              },
            }}
          />
        </LocalizationProvider> :
        <input
          id={id}
          className="named-input"
          type={type}
          placeholder={placeholder}
          required={required}
        />
        }
    </div>
  );
}

export const NamedTextArea = ({
  id,
  title = "",
  type = "text",
  required = false,
  placeholder = ""
}) => {
  return (
    <div className="named-input-container">
      <p className="named-text">{title} {required ? "*" : ""}</p>
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