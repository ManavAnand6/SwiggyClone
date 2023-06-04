import { SIGNUP_FORM_CONSTANTS } from "./constantsSignupForm";

export const styles = {
  loginFormContainerStyle: (state) => {
    return {
      border: "1px solid #d4d5d9",
      height: "70px",
      width: "100%",
      margin: "0",
      padding: "0 20px",
      paddingTop:
        state === SIGNUP_FORM_CONSTANTS.INITIAL_STATE ? "25px" : "14px",
      boxSizing: "border-box",
      borderRadius: "0",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontWeight: "500",
      display: "flex",
      flexDirection: "column",
    };
  },
  labelStyle: (state) => {
    if (state === SIGNUP_FORM_CONSTANTS.INITIAL_STATE) {
      return {
        color: "#93959f",
        fontWeight: "400",
        cursor: "text",
        transition: ".2s ease",
        fontSize: "16px",
      };
    } else {
      return {
        color: "#93959f",
        fontWeight: "500",
        cursor: "text",
        transition: ".2s ease",
        fontSize: "12px",
      };
    }
  },
  inputTagStyle: {
    border: "none",
    outline: "none",
    height: "100%",
    backgroundColor: "#fff",
    padding: "0",
    caretColor: "#ccc",
    fontSize: "17px",
  },
  formLoginButtonStyle: {
    marginTop: '20px',
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    border: "none",
    color: "#fff",
    backgroundColor: "#fc8019",
    right: "0",
    height: "50px",
    lineHeight: '50px',
    width: "100%",
    fontSize: "16px",
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 12%)',
    fontWeight: "600",
    letterSpacing: ".53px",
    padding: "0",
  },
};
