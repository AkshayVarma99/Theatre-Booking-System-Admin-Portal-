import React, { useEffect } from 'react';
import { Form, message } from 'antd';
import Button from "../../components/Button";
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../apicalls/users';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';
import logo from '../../pages/images/logo.png';
import bgImage from '../../pages/images/theatre.jpg';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await LoginUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        navigate("/profile");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  }, []);

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay"></div>
      <div className="card p-6 w-96 bg-white rounded-md shadow-lg">
        <img src={logo} alt="Logo" className="mx-auto mb-4" width="150" />
        <h1 className="text-xl text-center mb-4">Theatre Admin - LOGIN</h1>
        <hr className="mb-4" />
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <input type="email" className="input-field" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <input type="password" className="input-field" />
          </Form.Item>
          <div className="button-container">
            <Button fullWidth title="LOGIN" type='submit' />
            <Link to="/register" className="register-link">
              Don't have an account? Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
