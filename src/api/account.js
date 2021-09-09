import { Get, Post } from "../utils/request";
import { getToken } from "../utils/session";

const BASE_URL = "/v2";





// 登陆
export function Login(value) {
  return new Promise((resolve, reject) => {
    Get({
      url: BASE_URL + "/user/login",
      data: {
        username: value.username,
        password: value.password
      },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

// token 登陆 
export function LoginToken(value) {
  return new Promise((resolve, reject) => {
    Get({
      url: BASE_URL + "/user/checkToken",
      data: {
        token: getToken
      },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

// 注册
export function Register(value) {
  return new Promise((resolve, reject) => {
    Post({
      url: BASE_URL,
      data: {
        username: value.username,
        password: value.password
      },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

//  验证码
export function verification(code) {
  return new Promise((resolve, reject) => {
    Post({
      url: BASE_URL,
      data: {
        code: code
      },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

// 修改



