import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is ", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form
          className='flex flex-col justify-center items-center'
          onSubmit={(e) => {
            submitHandler(e);
          }}>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className='mt-7 outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 '
            type='email'
            placeholder='enter your email'
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='mt-7 outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 '
            type='password'
            placeholder='enter your password'
          />
          <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white cursor-pointer'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
