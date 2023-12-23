import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function LoginForm() {
  return (
    <div className="ml-40">
      <div>
        <h2 className="text-[#45A69B] text-3xl mb-8">Login your Account</h2>
      </div>
      <form action="submit" method="post" className="mb-2 gap-20">
        <span className="mb-5">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "70ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="Email"
                name="email"
                type="email"
              />
            </div>
          </Box>
        </span>
        <span>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "70ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
              />
            </div>
          </Box>
        </span>
        <div className="flex gap-60 mt-5 mb-7">
          <p className="text-white "> dhd</p>
          <p className="text-white "> dhd</p>
          <p className="text-[#613E98] ">Forget Password ?</p>
        </div>
        <div>
          <button className="bg-[#613E98] text-white  font-bold py-2 px-8 flex justify-center rounded-lg text-lg mb-4">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;