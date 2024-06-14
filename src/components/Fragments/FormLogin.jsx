import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index";
import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [inputs, setInputs, password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: inputs.username,
      password: inputs.password,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
    
    // console.log(inputs);

    //   if (
    //     inputs.email == "rian.cahyadi@gmail.com" &&
    //     inputs.password == "123456"
    //   ) {
    //     localStorage.setItem("email", inputs.email);
    //     localStorage.setItem("password", inputs.password);
    //     window.location.href = "/products";
    //   } else {
    // 	alert('Wrong credentials')
    // }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          htmlFor="username"
          name="username"
          id="username"
          type="text"
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          placeholder="johndoe"
          value={inputs.username}
          // onChange={(event) => setEmail(event.target.value)}
          onChange={handleChange}
        >
          Username
        </InputForm>
        <InputForm
          htmlFor="password"
          name="password"
          id="password"
          type={showPassword ? "text" : "password"}
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          placeholder="**********"
          value={inputs.password}
          // onChange={(event) => setEmail(event.target.value)}
          onChange={handleChange}
        >
          Password
        </InputForm>
        <p className="text-red-500 mb-2">{loginFailed}</p>
        <label htmlFor="" onClick={handleShowPassword}>
          <span>Show Password</span>
        </label>
        <div className="flex items-center justify-between mb-2 mt-2">
          <Label htmlFor="remember" className="flex items-center">
            <Input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2"
            />
            <span className="text-gray-600">Remember me</span>
          </Label>
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          name="Login"
          onClick={handleLogin}
        />
      </form>
    </>
  );
};

export default FormLogin;
