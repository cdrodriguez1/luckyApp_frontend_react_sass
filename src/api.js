import axios from "axios";

export const APIHeaders = {
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

export const API = axios.create({
  timeout: 6000,
  headers: APIHeaders,
});
