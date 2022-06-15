import { useState } from "react";



export default function Login() {


    const [user, setUser] = useState(null);
    const [pass, setPass] = useState(null);

    const handleSubmit = (e) => {

        e.preventDefault()

        console.log(pass, user);
    }



  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h2>Inicio de sesion</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="login"
              className="form-control form-control-lg formInput"
              name="login"
              placeholder="email"
              onChange={e => setUser(e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="form-control form-control-lg formInput"
              name="login"
              placeholder="password"
              onChange={e => setPass(e.target.value)}
            />
            <input type="submit" className="btn btn-info btn-lg mt-3 mb-3" value="Log In" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Registrarse
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
