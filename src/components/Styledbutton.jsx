import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButtonComponent = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: "none",
  borderRadius: "8px",
  padding: "8px 16px",
  color: theme.palette.primary.contrastText,
  fontWeight: "bold",
  fontSize: "14px",
  textTransform: "uppercase",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const StyledButton = ({ children, component = "button", href, download, ...props }) => {
  return (
    <StyledButtonComponent component={component} href={href} download={download} {...props}>
      {children}
    </StyledButtonComponent>
  );
};

export default StyledButton;