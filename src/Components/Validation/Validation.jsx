import * as Yup from "yup";
import {
  PasswordRegex,
  EmailRegex,
  accountNumberRegex,
  ifscCodeRegex,
  mobilenoRegex,
  personalidRegex,
} from "./Regex/RegexPattern";

export const Schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid Email Format")
    .matches(EmailRegex, "Invalid Email Format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
    .matches(
      PasswordRegex,
      "Password must contain at least one uppercase, one lowercase, one special (@#$%^&*), and one numeric character/letter."
    ),
});

export const editEmployeeBankValidation = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  bankName: Yup.string().required("Bank Name is required"),
  ifscCode: Yup.string()
    .required("IFSC Code is required")
    .matches(ifscCodeRegex, "Invalid IFSC Code"),
  accountNumber: Yup.string()
    .required("Account Number is required")
    .matches(accountNumberRegex, "Invalid Account Number"),
});

export const editEmployeeValidation = Yup.object({
  mobileno: Yup.string()
    .required("Mobile Number is required")
    .matches(mobilenoRegex, "Invalid Mobile Number"),
  personalid: Yup.string()
    .required("Email is required")
    .matches(personalidRegex, "Invalid Email"),
});
