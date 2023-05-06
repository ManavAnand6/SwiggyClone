import React, { useState, useRef, useEffect } from "react";
import { setNestedObjectValues, useFormik } from "formik";
import { styles } from "./style";
import { LOGIN_FORM_CONSTANTS } from "./constantsLoginForm";
import { Button } from "../../../../components";

export function LoginForm() {
  const [isActiveField, setActiveField] = useState({
    phoneNumberField: LOGIN_FORM_CONSTANTS.INITIAL_STATE,
  });
  const phoneNumberRef = useRef(null);
  const validate = (values) => {
    const errors = {};

    console.log('values', setNestedObjectValues)

    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    } else if (values.phoneNumber.length !== 10) {
      errors.phoneNumber = "Must be 10 Number";
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
        console.log('values', values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    if (
      isActiveField.phoneNumberField === LOGIN_FORM_CONSTANTS.PROGRESS_STATE ||
      isActiveField.phoneNumberField === LOGIN_FORM_CONSTANTS.FINISH_STATE
    ) {
      if (phoneNumberRef.current) {
        phoneNumberRef.current.focus();
      }
    }
  }, [isActiveField.phoneNumberField]);

  const renderInputTag = () => {
    const { phoneNumberField } = isActiveField;
    const { FINISH_STATE, PROGRESS_STATE } = LOGIN_FORM_CONSTANTS;

    switch (phoneNumberField) {
      case FINISH_STATE:
      case PROGRESS_STATE:
        return (
          <input
            style={styles.phNumberInputTagStyle}
            id="phoneNumber"
            name="phoneNumber"
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
                setActiveField({
                  ...isActiveField,
                  phoneNumberField: LOGIN_FORM_CONSTANTS.FINISH_STATE,
                });
              } else {
                setActiveField({
                  ...isActiveField,
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        style={styles.loginFormPhNumberContainerStyle(
          isActiveField.phoneNumberField
        )}
        onClick={() => {
          setActiveField({
            ...isActiveField,
            phoneNumberField: LOGIN_FORM_CONSTANTS.PROGRESS_STATE,
          });
        }}
      >
        <label
          style={styles.phoneNumberLabelStyle(isActiveField.phoneNumberField)}
          htmlFor="phoneNumber"
        >
          Phone Number
        </label>
        {renderInputTag()}
      </div>
      <button type="submit">LOGIN</button>
    </form>
  );
}
