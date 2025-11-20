import { User } from "@/types/user/user";
import Project from "@/types/project/project";
import axios from "axios";
import { getCookie } from "cookies-next";

export interface ApiType {
  getUser(nickname: string): Promise<User>;
  getUsers(): Promise<User[]>;
  addUser(
    nickname: string,
    email: string,
    password: string,
    repassword: string,
    accessToken: string
  ): Promise<number>;
  isValidNickname(nickname: string): Promise<boolean>;
  loginByEmail(email: string, password: string): Promise<string>;
  loginByKakao(code: string): Promise<string>;
  me(accessToken?: string): Promise<User>;

  getProject(): Promise<Project[]>;
}

export default function Api(): ApiType {
  const api = axios.create({ baseURL: "http://localhost:8080" });

  api.interceptors.request.use(
    (config) => {
      const token = getCookie("Access-Token");
      if (token) {
        config.headers["Access-Token"] = token;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (res) => {
      const statusCode = res.data.statusCode;
      const payload = res.data.payload;

      if (statusCode === 20000 || statusCode === 200) {
        return payload;
      } else {
        return Promise.reject(res.data);
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return {
    async getUser(nickname: string) {
      return await api.get("/get-user", {
        params: { nickname: nickname },
      });
    },
    async getUsers(): Promise<User[]> {
      return await api.get("/get-users");
    },
    async addUser(
      nickname: string,
      email: string,
      password: string,
      repassword: string,
      accessToken: string
    ) {
      return await api.post(
        "/add-user",
        {
          nickname,
          email,
          password,
          repassword,
        },
        {
          headers: {
            "Access-Token": accessToken,
          },
        }
      );
    },
    async isValidNickname(nickname: string): Promise<boolean> {
      return await api.get("/public/is-valid-nickname", {
        params: { nickname },
      });
    },
    async loginByEmail(email: string, password: string): Promise<string> {
      return await api.post("/public/login-by-email", { email, password });
    },

    async getProject(): Promise<Project[]> {
      return await api.get("/public/get-projects");
    },

    async loginByKakao(code: string): Promise<string> {
      return await api.post("/public/login-by-kakao", { code });
    },

    async me(accessToken?: string): Promise<User> {
      const token = accessToken || ((getCookie("Access-Token") || "") as string);

      return await api.post(
        "/me",
        {},
        {
          headers: {
            "Access-Token": token,
          },
        }
      );
    },
  };
}
