"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const BackendTest = () => {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    try {
      axios
        .get(process.env.NEXT_PUBLIC_API_URL ?? "")
        .then(async (response) => {
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
