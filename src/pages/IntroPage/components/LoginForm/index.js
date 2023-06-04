import React, { useState, useRef, useEffect, useContext } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./style";
import { LOGIN_FORM_CONSTANTS } from "./constantsLoginForm";
import { StringContext } from "../../../../common/StringProvider";
import { setModalState } from "../../actionIntroPage";

export function LoginForm() {
  const dispatch = useDispatch();
  const translations = useContext(StringContext);
  const { openLoginForm, userInfo } = useSelector(
    (state) => state.reducerIntroPage
  );
  const [isField, setField] = useState({
    phoneNumberField: LOGIN_FORM_CONSTANTS.INITIAL_STATE,
    otpNumberField: LOGIN_FORM_CONSTANTS.INITIAL_STATE,
  });
  const [showOtpField, setShowOtpField] = useState(false);
  const activateFieldArray = [
    LOGIN_FORM_CONSTANTS.PROGRESS_STATE,
    LOGIN_FORM_CONSTANTS.FINISH_STATE,
  ];
  const phoneNumberRef = useRef(null);
  const otpNumberRef = useRef(null);

  const validatePhoneNumber = (values, errors) => {
    if (!values.phoneNumber) {
      errors.phoneNumber = translations.ENTER_MOBILE_NUMBER;
    }
    return errors;
  };

  const validateOtpNumber = (values, errors) => {
    if (!values.otpNumber) {
      errors.otpNumber = translations.REQUIRED;
    } else if (values.otpNumber.length !== 6) {
      errors.otpNumber = translations.ENTER_VALID_OTP;
    }
    return errors;
  };

  const validate = (values) => {
    let errors = {};
    if (showOtpField) {
      errors = validateOtpNumber(values, errors);
    } else {
      errors = validatePhoneNumber(values, errors);
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      otpNumber: "",
    },
    validate,
    onSubmit: (values) => {
      if (showOtpField) {
        dispatch(
          setModalState({
            loginModal: false,
            signupModal: false,
          })
        );
      } else {
        setShowOtpField(true);
      }
    },
  });

  useEffect(() => {
    if (openLoginForm) {
      console.log("userInfo?.userPhoneNumber", userInfo?.userPhoneNumber);
      formik.setFieldValue("phoneNumber", userInfo?.userPhoneNumber, true);
      setField({
        ...isField,
        phoneNumberField: LOGIN_FORM_CONSTANTS.FINISH_STATE,
      });
      setShowOtpField(true);
    }
  }, [openLoginForm]);

  useEffect(() => {
    if (
      activateFieldArray.includes(
        isField.phoneNumberField || isField.otpNumberField
      )
    ) {
      if (phoneNumberRef.current) {
        phoneNumberRef.current.focus();
      }
    }
  }, [isField.phoneNumberField]);

  const renderPhoneTag = (field) => {
    const { FINISH_STATE, PROGRESS_STATE } = LOGIN_FORM_CONSTANTS;

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
                  phoneNumberField: LOGIN_FORM_CONSTANTS.FINISH_STATE,
                });
              } else {
                setField({
                  ...isField,
                  phoneNumberField: LOGIN_FORM_CONSTANTS.INITIAL_STATE,
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

  const renderOtpTag = (field) => {
    const { FINISH_STATE, PROGRESS_STATE } = LOGIN_FORM_CONSTANTS;

    switch (field) {
      case FINISH_STATE:
      case PROGRESS_STATE:
        return (
          <input
            style={styles.inputTagStyle}
            id={translations.OTP_NUMBER}
            name={translations.OTP_NUMBER}
            type="text"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            maxLength={6}
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
              if (formik.values.otpNumber.length > 0) {
                setField({
                  ...isField,
                  otpNumberField: LOGIN_FORM_CONSTANTS.FINISH_STATE,
                });
              } else {
                setField({
                  ...isField,
                  otpNumberField: LOGIN_FORM_CONSTANTS.INITIAL_STATE,
                });
              }
            }}
            value={formik.values.otpNumber}
            ref={otpNumberRef}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        style={styles.loginFormContainerStyle(isField.phoneNumberField)}
        onClick={() => {
          setField({
            ...isField,
            phoneNumberField: LOGIN_FORM_CONSTANTS.PROGRESS_STATE,
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
      {showOtpField && (
        <div
          style={styles.loginFormContainerStyle(isField.otpNumberField)}
          onClick={() => {
            setField({
              ...isField,
              otpNumberField: LOGIN_FORM_CONSTANTS.PROGRESS_STATE,
            });
          }}
        >
          <label
            style={styles.labelStyle(isField.otpNumberField)}
            htmlFor={translations.OTP_NUMBER}
          >
            {translations.LABEL_OTP_NUMBER}
          </label>
          {renderOtpTag(isField.otpNumberField)}
        </div>
      )}
      <button style={styles.formLoginButtonStyle} type="submit">
        {showOtpField ? translations.VERIFY_OTP : translations.UPPERCASE_LOGIN}
      </button>
    </form>
  );
}
