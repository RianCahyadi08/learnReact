import { useState, useEffect } from "react";
import { getUsername } from "../services/auth.service";
import { getUserId } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
    setUsername(getUsername(token));
  }, []);

  return username;
};

export const getId = () => {
  const [id, setId] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
    setId(getUserId(token));
  });

  return id;
}
