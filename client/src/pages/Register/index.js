import React, { useEffect } from 'react';
import { Form, message } from 'antd';
import Button from "../../components/Button";
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../apicalls/users';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';
import logo from '../../pages/images/logo.png';
import bgImage from '../../pages/images/theatre.jpg';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await RegisterUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/register");
    }
  }, []);

  return (
    <div className="register-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay"></div>
      <div className="card p-3 w-400">
        <img src={logo} alt="Logo" className="mx-auto mb-4" width="250" />
        <h1 className="text-xl text-center mb-1">Theatre Admin-Register</h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <input type="text" className="input-field" />
          </Form.Item>
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
          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth title="REGISTER" type='submit' />
            <Link to="/login" className="login-extra-writing">
              Already have an account? LOGIN
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
