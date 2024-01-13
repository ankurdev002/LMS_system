export const EmailRegex = /^[\w.+-]+@+[a-zA-Z]+\.com$/;
export const PasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]+$/;

export const ifscCodeRegex = /^[\w]{4}\d{7}$/;
export const accountNumberRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
export const mobilenoRegex = /^(\+91|0)?[6789]\d{9}$/;
export const personalidRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
