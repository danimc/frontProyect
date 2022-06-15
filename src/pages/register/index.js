import React from "react";
import Register from "../../components/register";

export default function RegisterPage() {
  return (
    <>
      <h2>Registrar nuevo Usuario</h2>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <Register />
        </div>
      </div>
    </>
  );
}
