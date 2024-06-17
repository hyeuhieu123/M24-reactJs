import React, { useEffect, useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { Link } from "react-router-dom";

interface User {
  id: number;
  fullname: string;
  address: string;
  email: string;
  password: string;
  dayOfBirth: string;
}

export default function Signin() {
  const [users, setUsers] = useState<User[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loadData = () => {
    axios
      .get("http://localhost:5174/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);
    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        console.log("Đăng nhập thành công", user);
      } else {
        setError(true);
        setErrorMessage("Đăng nhập KHÔNG thành công. ");
      }
    } else {
      setError(true);
      setErrorMessage("Đăng nhập KHÔNG thành công. ");
    }
  };

  return (
    <>
      <section className="login">
        <form className="form" onSubmit={handleLogin}>
          <h3>ĐĂNG NHẬP</h3>
          {error && (
            <div className="error-message">
              <span className="icon-error">
                <i className="fa-regular fa-circle-xmark" />
              </span>
              <span>{errorMessage}</span>
            </div>
          )}
          <div className="input-box">
            <i className="fa-solid fa-user" />
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <i className="fa-solid fa-key" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="eye" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <i className="fa-solid fa-eye"></i>
              ) : (
                <i className="fa-solid fa-eye-slash" />
              )}
            </div>
          </div>
          <button type="submit" className="btn-login">
            ĐĂNG NHẬP
          </button>
          <div className="auth-actions">
            <Link to="/signup">Đăng ký tài khoản mới</Link>
          </div>
        </form>
      </section>
    </>
  );
}
