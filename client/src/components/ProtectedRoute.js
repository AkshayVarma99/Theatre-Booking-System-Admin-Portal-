import { FaUserCircle } from 'react-icons/fa'; // Import the user circle icon from react-icons
import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { GetCurrentUser } from '../apicalls/users';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/usersSlice';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import logo from '../pages/images/logo.png'; 

function ProtectedRoute({ children }) {
    const { user } = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getCurrentUser = async () => {
        try {
            dispatch(ShowLoading());
            const response = await GetCurrentUser();
            dispatch(HideLoading());
            if(response.success) {
                dispatch(setUser(response.data));
            } else {
                dispatch(ShowLoading());
                dispatch(setUser(null));
                message.error(response.message);
            }
        } catch (error) {
            dispatch(setUser(null));
            message.error(error.message);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getCurrentUser();
        } else {
            navigate('/login');
        }
    }, []);

    return user ? (
        <div className="layout p-1 ">
            <div className="header flex flex-row items-center justify-between p-1 bg-[#052736]">
                <div className="flex items-center flex-shrink-0 ml-2 cursor-pointer" onClick={() => navigate("/")} >
                    <img src={logo} alt="brand logo" className="h-10" />
                </div>
                <div className="flex-grow text-center">
                    <h1 className="text-2xl text-white cursor-pointer" onClick={() => navigate("/profile")}>
                        ADMIN PANEL
                    </h1>
                </div>
                <div className="flex items-center space-x-3 ">
                    <FaUserCircle className="text-white text-2xl " /> 
                    <h1 className='text-md underline text-white' title="Profile">
                        {user.name}
                    </h1>
                    <i className="ri-logout-box-r-line text-white text-2xl cursor-pointer" title="Logout"
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/");
                        }}>
                    </i>
                </div>
            </div>
            <div className="content mt-1 p-1">
                {children}
            </div>
        </div>
    ) : null;
}

export default ProtectedRoute;
