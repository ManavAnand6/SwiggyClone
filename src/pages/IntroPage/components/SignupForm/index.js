import React, { useState, useRef, useEffect, useContext } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./style";
import { SIGNUP_FORM_CONSTANTS } from "./constantsSignupForm";
import { StringContext } from "../../../../common/StringProvider";
import { LoginForm } from "../LoginForm";
import { setItemFromLocalStorage } from "../../../../utilities/localStorageFunction";
import { setUserInfo } from "../../introPageSlice";

export function SignupForm() {
  const dispatch = useDispatch();
  const { openLoginForm } = useSelector((state) => state.introPage);
  const translations = useContext(StringContext);
  const [isField, setField] = useState({
    phoneNumberField: SIGNUP_FORM_CONSTANTS.INITIAL_STATE,
    emailField: SIGNUP_FORM_CONSTANTS.INITIAL_STATE,
    nameField: SIGNUP_FORM_CONSTANTS.INITIAL_STATE,
  });
  const activateFieldArray = [
    SIGNUP_FORM_CONSTANTS.PROGRESS_STATE,
    SIGNUP_FORM_CONSTANTS.FINISH_STATE,
  ];
  const phoneNumberRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const validate = (values) => {
    let errors = {};
    if (!values.phoneNumber) {
      errors.phoneNumber = translations.ENTER_MOBILE_NUMBER;
    }
    if (!values.name) {
      errors.name = translations.REQUIRED;
    }
    if (!values.email) {
      errors.email = translations.REQUIRED;
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      name: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setItemFromLocalStorage('phoneNumber', values.phoneNumber);
      setItemFromLocalStorage('email', values.email);
      dispatch(setUserInfo(values));
    },
  });

  useEffect(() => {
    if (
      activateFieldArray.includes(
        isField.phoneNumberField || isField.nameField || isField.emailField
      )
    ) {
      if (phoneNumberRef.current) {
        phoneNumberRef.current.focus();
      }
    }
  }, [isField.phoneNumberField]);

  const renderPhoneTag = (field) => {
    const { FINISH_STATE, PROGRESS_STATE } = SIGNUP_FORM_CONSTANTS;

    switch (field) {
      case FINISH_STATE:
      case PROGRESS_STATE:
        return (
          <input
            style={styles.inputTagStyle}
            id={translations.PHONE_NUMBER}
            name={translations.PHONE_NUMBER}
            type="text"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            maxLength={10}
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
              if (formik.values.phoneNumber.length > 0) {
                setField({
                  ...isField,
                  phoneNumberField: SIGNUP_FORM_CONSTANTS.FINISH_STATE,
                });
              } else {
                setField({
                  ...isField,
                  phoneNumberField: SIGNUP_FORM_CONSTANTS.INITIAL_STATE,
                });
              }
            }}
            value={formik.values.phoneNumber}
            ref={phoneNumberRef}
          />
        );
      default:
        return null;
    }
  };

  const renderNameTag = (field) => {
    const { FINISH_STATE, PROGRESS_STATE } = SIGNUP_FORM_CONSTANTS;

    switch (field) {
      case FINISH_STATE:
      case PROGRESS_STATE:
        return (
          <input
            style={styles.inputTagStyle}
            id={translations.NAME}
            name={translations.NAME}
            type="text"
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
              if (formik.values.name.length > 0) {
                setField({
                  ...isField,
                  nameField: SIGNUP_FORM_CONSTANTS.FINISH_STATE,
                });
              } else {
                setField({
                  ...isField,
                  nameField: SIGNUP_FORM_CONSTANTS.INITIAL_STATE,
                });
              }
            }}
            value={formik.values.name}
            ref={nameRef}
          />
        );
      default:
        return null;
    }
  };

  const renderEmailTag = (field) => {
    const { FINISH_STATE, PROGRESS_STATE } = SIGNUP_FORM_CONSTANTS;

    switch (field) {
      case FINISH_STATE:
      case PROGRESS_STATE:
        return (
          <input
            style={styles.inputTagStyle}
            id={translations.EMAIL}
            name={translations.EMAIL}
            type="email"
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
              if (formik.values.email.length > 0) {
                setField({
                  ...isField,
                  emailField: SIGNUP_FORM_CONSTANTS.FINISH_STATE,
                });
              } else {
                setField({
                  ...isField,
                  emailField: SIGNUP_FORM_CONSTANTS.INITIAL_STATE,
                });
              }
            }}
            value={formik.values.email}
            ref={emailRef}
          />
        );
      default:
        return null;
    }
  };

  return openLoginForm ? (
    <LoginForm />
  ) : (
    <form onSubmit={formik.handleSubmit}>
      <div
        style={styles.loginFormContainerStyle(isField.phoneNumberField)}
        onClick={() => {
          setField({
            ...isField,
            phoneNumberField: SIGNUP_FORM_CONSTANTS.PROGRESS_STATE,
          });
        }}
      >
        <label
          style={styles.labelStyle(isField.phoneNumberField)}
          htmlFor={translations.PHONE_NUMBER}
        >
          {formik.errors.phoneNumber || translations.LABEL_PHONE_NUMBER}
        </label>
        {renderPhoneTag(isField.phoneNumberField)}
      </div>
      <div
        style={styles.loginFormContainerStyle(isField.nameField)}
        onClick={() => {
          setField({
            ...isField,
            nameField: SIGNUP_FORM_CONSTANTS.PROGRESS_STATE,
          });
        }}
      >
        <label
          style={styles.labelStyle(isField.nameField)}
          htmlFor={translations.NAME}
        >
          {formik.errors.name || translations.LABEL_NAME}
        </label>
        {renderNameTag(isField.nameField)}
      </div>
      <div
        style={styles.loginFormContainerStyle(isField.emailField)}
        onClick={() => {
          setField({
            ...isField,
            emailField: SIGNUP_FORM_CONSTANTS.PROGRESS_STATE,
          });
        }}
      >
        <label
          style={styles.labelStyle(isField.emailField)}
          htmlFor={translations.EMAIL}
        >
          {formik.errors.email || translations.LABEL_EMAIL}
        </label>
        {renderEmailTag(isField.emailField)}
      </div>

      <button style={styles.formLoginButtonStyle} type="submit">
        {translations.CONTINUE}
      </button>
    </form>
  );
}
