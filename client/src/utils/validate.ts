export const BASE_URL = "http://localhost:8080";

// 영어 소문자, 대문자, 특수기호만 @ 영어 소문자, 대문자, 숫자만 . 영어 소문자, 대문자, 숫자만
export const EMAIL_RULE = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// 특수기호가 포함되어야함 8자리 이상
export const PASSWORD_RULE = /[a-zA-Z0-9$@$!%*?&]{8,}/;
