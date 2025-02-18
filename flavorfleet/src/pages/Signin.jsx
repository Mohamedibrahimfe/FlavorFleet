import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const responseMessage = (response) => {
    console.log(response);
    // Handle the response from Google Login here
    navigate("/");
  };

  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen *:hover:scale-110">
        <GoogleLogin
          onSuccess={responseMessage}
          onError={errorMessage}
          size="icon"
        />
      </div>
    </div>
  );
}
