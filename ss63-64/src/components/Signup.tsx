import React, { useEffect, useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { Link, useNavigate } from "react-router-dom";

interface User {
  id: number;
  fullname: string;
  address: string;
  email: string;
  password: string;
  dayOfBirth: string;
}

export default function Signup() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [confirmpassword, setConfirmpassword] = useState<string>("");
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);

  const [addUser, setAddUser] = useState<User>({
    id: 0,
    fullname: "",
    email: "",
    address: "",
    password: "",
    dayOfBirth: "",
  });
  const navigate = useNavigate();
  const loadData = () => {
    axios
      .get("http://localhost:8080/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddUser({
      ...addUser,
      [name]: value,
    });
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !addUser.fullname ||
      !addUser.address ||
      !addUser.email ||
      !addUser.password ||
      !addUser.dayOfBirth ||
      !confirmpassword
    ) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin!");
      setError(true);
      return;
    }
    if (!addUser.fullname) {
      setErrorMessage("Họ và Tên không được để trống!");
      setError(true);
      return;
    }
    if (!addUser.address) {
      setErrorMessage("Địa chỉ không được để trống!");
      setError(true);
      return;
    }
    if (!addUser.email) {
      setErrorMessage("Email không được để trống!");
      setError(true);
      return;
    }
    if (!addUser.password) {
      setErrorMessage("Mật khẩu không được để trống!");
      setError(true);
      return;
    }
    if (!addUser.dayOfBirth) {
      setErrorMessage("Ngày sinh không được để trống!");
      setError(true);
      return;
    }
    if (addUser.password !== confirmpassword) {
      setErrorMessage("Mật khẩu không trùng!");
      setError(true);
      return;
    }
    if (addUser.password.length < 5) {
      setErrorMessage("Mật khẩu phải lớn hơn 5!");
      setError(true);
      return;
    }
    if (users.find((user) => user.email === addUser.email)) {
      setErrorMessage("Email đã tồn tại trong hệ thống!");
      setError(true);
      return;
    }
    try {
      // Mã hóa mật khẩu trước khi gửi lên server
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(addUser.password, salt);
      await axios.post("http://localhost:5174/users", {
        ...addUser,
        password: hashedPassword,
      });
      setAddUser({
        id: 0,
        fullname: "",
        email: "",
        address: "",
        password: "",
        dayOfBirth: "",
      });
      setConfirmpassword("");
      setError(false);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="signup">
      <form action="" className="form" onSubmit={handleSignup} method="post">
        <h3>ĐĂNG KÝ</h3>
        {error && <div className="error-message">{errorMessage}</div>}
        <input
          type="text"
          name="fullname"
          value={addUser.fullname || ""}
          onChange={handleOnchange}
          placeholder="Họ và Tên"
        />
        <div className="input-box">
          <input
            type="text"
            name="address"
            value={addUser.address || ""}
            onChange={handleOnchange}
            placeholder="Địa chỉ"
          />
          <div className="input-DateOfBirth">
            <label htmlFor="">Ngày sinh</label>
            <input
              type="date"
              name="dayOfBirth"
              value={addUser.dayOfBirth}
              onChange={handleOnchange}
            />
          </div>
        </div>
        <input
          type="text"
          name="email"
          value={addUser.email || ""}
          onChange={handleOnchange}
          placeholder="Email"
        />
        <div className="input-box-password">
          <input
            type={showPassword1 ? "text" : "password"}
            name="password"
            value={addUser.password || ""}
            onChange={handleOnchange}
            placeholder="Mật khẩu"
          />
          <span id="eye" onClick={() => setShowPassword1(!showPassword1)}>
            {showPassword1 ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash" />
            )}
          </span>
        </div>
        <div className="input-box-password">
          <input
            type={showPassword2 ? "text" : "password"}
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            placeholder="Nhập lại mật khẩu"
          />
          <span id="eye" onClick={() => setShowPassword2(!showPassword2)}>
            {showPassword2 ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash" />
            )}
          </span>
        </div>
        <button type="submit" className="btn-signup">
          ĐĂNG KÝ
        </button>
        <div className="auth-actions">
          <span className="me-1">Bạn đã có tài khoản ?</span>
          <Link to="/signin">Đăng nhập</Link>
        </div>
      </form>
    </section>
  );
}
