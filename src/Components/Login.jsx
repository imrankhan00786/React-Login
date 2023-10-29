import React, { useState } from "react";
import styled from "styled-components";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const LoginContainer = styled.div`
  background: #C8E4B2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LoginForm = styled.form`
  background: #f3fde8;
  padding: 40px 100px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 600px;
  margin: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  flex: 2;
  width: 100%;
  padding: 20px;
  position: relative;
`;

const InputLabel = styled.label`
  display: block;
  margin: 10px 0;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background: #1575a7;
  color: #fff;
  padding: 10px 27%;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 30px;
  display: block;
  transition: background-color 0.3s;

  &:hover {
    background: #125e9c;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: #737b86;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  color: #737b86;
`;

const ChangePasswordText = styled.span`
  color: #f78719;
  cursor: pointer;
  margin-left: auto;
  transition: color 0.3s;

  &:hover {
    color: #d9560b;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const LoginImage = styled.img`
  max-width: 100%;
  height: auto;
  width: 300px;
`;

const RedUnderlineText = styled.span`
  color: #f78719;
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: #d9560b;
  }
`;

const DontHaveAccountText = styled.p`
  margin-top: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const RegisterLink = styled.span`
  color: #f78719;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #d9560b;
  }
`;

const PasswordToggle = styled.div`
  position: absolute;
  right: 10px;
  top: 55%; 
  transform: translateY(-50%);
  cursor: pointer;
  color: #737b86;
`;

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <LoginImage src={require("./loginuser.png")} alt="Login" />
      </ImageContainer>
      <LoginForm>
        <FormContainer>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "40px",
              marginBottom: "50px",
            }}
          >
            Login
          </h2>
          <InputLabel>Login ID</InputLabel>
          <InputField type="text" placeholder="Enter Login ID" />
          <InputLabel>Password</InputLabel>
          <InputField
            type={showPassword ? "text" : "password"} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <PasswordToggle onClick={togglePasswordVisibility}>
            {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
          </PasswordToggle>
          <CheckboxLabel>
            <Checkbox type="checkbox" />
            Remember Me
            <ChangePasswordText>Change Password</ChangePasswordText>
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox type="checkbox" />
            Agree to {<RedUnderlineText>Terms & Conditions</RedUnderlineText>}
          </CheckboxLabel>
          <SubmitButton type="submit">Login</SubmitButton>
          <DontHaveAccountText>
            Don't have an account? <RegisterLink>Register here.</RegisterLink>
          </DontHaveAccountText>
        </FormContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
