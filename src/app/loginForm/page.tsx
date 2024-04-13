"use client"
import { useState } from "react";

export default function Form() {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");

  const Handleuser = (e: any) => {
    setuser(e.target.value);
    console.log(Handleuser)
  };

  const Handlelogin = () => {
    if (user.length < 3 || pass.length < 3) {
    alert("login failed");
    } else {
        alert("login successfull");
    }

    console.log(user.length)
  };

  const Handlepass = (e: any) => {
    setpass(e.target.value);
  };

  return (
    <div className="text-center m-2">
      <h1>Login form</h1>
      <input
        type="name"
        placeholder="enter name"
        className="border-2 border-black m-2"
        onChange={Handleuser}
      />
      <input
        type="password"
        placeholder="enter password"
        className="border-2 border-black m-2"
        onChange={Handlepass}
      />
      <button className="border-2 border-black m-2" onClick={Handlelogin}>
        Login
      </button>
    </div>
  ); // Added the missing closing tag here
}