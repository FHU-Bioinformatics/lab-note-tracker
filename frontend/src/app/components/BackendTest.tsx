"use client";
import { hooks } from "@/app/hooks";

interface ExpectedResponse {
  message: string;
}

const BackendTest = () => {
  const { data } = hooks.useFetchQuery<ExpectedResponse>("/");

  return <p className="text-white">Message from backend: {data?.message}</p>;
};

export default BackendTest;
