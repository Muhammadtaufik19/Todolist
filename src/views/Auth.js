import React, { useState } from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import axios from "axios";
import { useHistory } from "react-router-dom";
const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1";

const Auth = () => {
  const history = useHistory();
  const [login, setLogin] = useState(true);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIserror] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const isLogin = () => setLogin(!login);

  const userLogin = async () => {
    setIsloading(true);
    const user = {
      email,
      password,
    };
    try {
      const res = await axios.post(`${baseUrl}/user/signin`, user);
      localStorage.setItem("token", res.data.token);
      console.log(res);
      setName("");
      setEmail("");
      setPassword("");
      setIsloading(false);
      history.push("/task");
    } catch (err) {
      setIserror(true);
      setError(err.response.data.errors);
      setIsloading(false);
      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        setIserror(false);
        setError("");
      }, 3000);
    }
  };

  const userRegister = () => console.log("resgis");

  return (
    <div style={box}>
      <h3 style={head}>{login ? "Login" : "Register"}</h3>
      <div>
        {!login && (
          <Input
            placeholder="Name"
            type="text"
            change={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type="email"
          placeholder="Email"
          change={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          change={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={btn}>
        {isError && (
          <div>
            {error &&
              error.map((item, index) => (
                <p key={index} style={{ color: "red", margin: "0.4rem 0" }}>
                  {item.msg}
                </p>
              ))}
          </div>
        )}
        <Button
          variant="primary"
          text={login ? "Login" : "Register"}
          action={login ? userLogin : userRegister}
          load={isloading}
        />
      </div>
      {login ? (
        <div style={paragraph}>
          <p>
            Belum punya akun? silahkan{" "}
            <span onClick={isLogin} style={textBtn}>
              Rgister
            </span>
          </p>
        </div>
      ) : (
        <div style={paragraph}>
          <p>
            Sudah punya akun? silahkan{" "}
            <span onClick={isLogin} style={textBtn}>
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;
const textBtn = {
  color: "#57eaf4",
  fontSize: "15px",
  cursor: "pointer",
};
const head = {
  textAlign: "center",
  marginBottom: "0.5rem",
};
const btn = {
  textAlign: "center",
  marginTop: "0.5rem",
};
const paragraph = {
  textAlign: "center",
  marginTop: "0.5rem",
  fontSize: "14px",
};
const box = {
  background: "#fff",
  width: "25%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0,7rem",
};
