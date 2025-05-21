"use client";
import { useState, useEffect } from "react";
import apiClient from "@/api/apiClient";

const BackendTest = () => {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    try {
      apiClient.get("/").then(async (response) => {
        setMessage(response.data.message);
      });
    } catch (err) {
      console.log(err);
      setMessage("An error has occured");
    }
  }, [setMessage]);

  return <p className="text-white">Message from backend: {message}</p>;
};

export default BackendTest;
