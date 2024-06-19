import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index";
import { registerUser } from "../../services/register.service";
import { useState } from "react";

const FormRegister = () => {
  const [registerFailed, setRegisterFailed] = useState("");
  const [inputs, setInputs] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const data = {
      email: inputs.email,
      username: inputs.username,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      password: inputs.password,
      confirmPassword: inputs.confirmPassword,
    };

    registerUser(data, (status, res) => {
      if (status) {
        alert("Successfully registered");
        window.location.href = "/";
      } else {
        setRegisterFailed(res.response.data);
      }
    });
  };

  return (
    <>
      <form action="" method="POST">
        <InputForm
          htmlFor="email"
          name="email"
          id="email"
          type="email"
          value={inputs.email}
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          placeholder="example@gmail.com"
          onChange={handleChange}
        >
          Email
        </InputForm>
        <InputForm
          htmlFor="username"
          name="username"
          id="username"
          type="text"
          value={inputs.username}
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          placeholder="michaelj"
          onChange={handleChange}
        >
          Username
        </InputForm>
        <InputForm
          htmlFor="firstName"
          name="firstName"
          id="firstName"
          type="text"
          value={inputs.firstName}
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          placeholder="john"
          onChange={handleChange}
        >
          First Name
        </InputForm>
        <InputForm
          htmlFor="lastName"
          name="lastName"
          id="lastName"
          type="text"
          value={inputs.lastName}
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          placeholder="Dhoe"
          onChange={handleChange}
        >
          Last Name
        </InputForm>
        <InputForm
          htmlFor="password"
          name="password"
          id="password"
          type="password"
          value={inputs.password}
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          placeholder="**********"
          onChange={handleChange}
        >
          Password
        </InputForm>
        <InputForm
          htmlFor="confirmPassword"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          value={inputs.confirmPassword}
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          placeholder="**********"
          onChange={handleChange}
        >
          Confirm Password
        </InputForm>
        <p className="text-red-500 mb-2">{registerFailed}</p>
        <Button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          name="Sign Up"
          onClick={handleRegister}
        />
      </form>
    </>
  );
};

export default FormRegister;
