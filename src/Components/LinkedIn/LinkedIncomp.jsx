import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LinkedIncomp = () => {
  const [cradentials, setCradentials] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Successfully Connected!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(cradentials);
    navigate("/queue");

    console.log("Submitting...");
  };
  return (
    <div className="w-[400px] h-[450px] bg-white shadow-lg rounded-md p-10 flex flex-col items-center">
      <span className="text-2xl text-center font-semibold text-black">
        Connect your LinkedIn Account
      </span>
      <form
        className="mt-10 h-full w-full flex flex-col"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Email or Phone"
          variant="outlined"
          sx={{
            width: "100%",
            marginTop: "1rem",
            borderRadius: "16px",
            borderColor: "blue",
          }}
          required
          type={"email"}
          className="w-full"
          onChange={(e) =>
            setCradentials({ ...cradentials, email: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{
            width: "100%",
            marginTop: "1rem",
            borderRadius: "16px",
            borderColor: "blue",
          }}
          required
          type={"password"}
          className="w-full"
          onChange={(e) =>
            setCradentials({ ...cradentials, email: e.target.value })
          }
        />
        <p className="mt-6 text-sm text-slate-500 ">
          <span className="text-red-600"> Note:</span> Your Login information
          isn't stored. Feel free to connect your account
        </p>
        <button className="btn  px-4 py-3 rounded-md no-animation w-full text-white font-semibold mt-auto ">
          Continue
        </button>
      </form>
    </div>
  );
};

export default LinkedIncomp;
