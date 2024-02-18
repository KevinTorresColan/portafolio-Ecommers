import { HTMLInputTypeAttribute } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";

interface InputProp {
  label?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  InputProps?: any;
  disabled?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: any;
}

const StyledTextField = styled(TextField)`
  && {
    .MuiInputBase-root {
      height: 45px;
    }
    .MuiInputLabel-root {
      top: -3px;
    }
    .MuiInputLabel-root[data-shrink="true"] {
      top: 0;
    }
    .MuiOutlinedInput-input {
      padding: 13.5px 14px !important;
    }
  }
`;

const InputComponent = ({
  label,
  name,
  type = "text",
  InputProps,
  disabled = false,
  onChange,
  value
}: InputProp): JSX.Element => {
  return (
    <StyledTextField
      name={name}
      size='medium'
      value={value}
      onChange={onChange}
      label={label}
      type={type}
      InputProps={InputProps}
      inputProps={{"aria-label": name, "data-testid": name}}
      FormHelperTextProps={{ "aria-label": `helper-${name}` }} 
      fullWidth
      disabled={disabled}
      sx={{
        input: {
          background: disabled ? "#ededed" : "",
          borderRadius: disabled ? "5px" : "",
        },
      }}
    />
  );
};

export default InputComponent;
