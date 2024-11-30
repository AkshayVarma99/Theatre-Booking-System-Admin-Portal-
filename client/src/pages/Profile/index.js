

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Admin from '../Admin';
import { FaUserCircle } from 'react-icons/fa'; // Import the user circle icon from react-icons
import { useDispatch, useSelector } from 'react-redux';
import { FiUser } from 'react-icons/fi'; // Importing the user icon




function Profile() {
  const navigate = useNavigate();
      const { user } = useSelector((state) => state.users);
      const userEmail =user.email ;


  return (
    <div className="flex flex-col bg-gray-100 text-gray-800 min-h-screen">
      
      <div className="flex flex-grow pt-[header-height]">
        <aside className="sidebar w-64 bg-[#052736] text-white shadow z-20">
		  <ul className="flex flex-col w-full">
          <div className="sidebar-content px-4 py-4 text-xl">
  {/* User Icon */}
  <div className="flex flex-col items-center mb-2">
    <FiUser className="h-12 w-12 text-gray-300 mt-2 mb-1" />
    {/* Email */}
    <span className="text-sm text-gray-400">{userEmail}</span>
  </div>
</div>


                <li className="my-px">
                        <button onClick={() => navigate("/")}
                            className="ml-2 flex flex-row items-center justify-center h-10 px-4 py-4 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="h-6 w-6">
                                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="ml-2">Home</span>
                        </button>
                    </li>
                    <li className="my-px">
                        <button
                            className="ml-2 flex flex-row items-center justify-center h-10 px-4 py-4 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16M4 22h16M3 4a1 1 0 011-1h16a1 1 0 011 1v4H3V4zM6 6V4m4 2V4m4 2V4m4 2V4"/>
                            </svg>
                            <span className="ml-2">Activites</span>
                        </button>
                    </li>
                    <li className="my-px">
                        <button className="ml-2 flex flex-row items-center justify-center h-10 px-4 py-4 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="h-6 w-6">
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </span>
                            <span className="ml-2">Settings</span>
                        </button>
                    </li>
                    <li className="my-px">
                        <button onClick={() => { localStorage.removeItem("token"); navigate("/"); }}
                            className="ml-2 flex flex-row items-center justify-center h-10 px-4 py-4 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                            <span className="flex items-center justify-center text-lg text-red-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="h-6 w-6">
                                    <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                                </svg>
                            </span>
                            <span className="ml-2">Log out</span>
                        </button>
                    </li>
                </ul>
        </aside>
        <main className="flex flex-col flex-grow">
          <div className="main-content flex flex-col flex-grow px-4 py-6 overflow-auto">
            <Admin /> {/* Admin component rendered here */}
          </div>
          <footer className="footer bg-white shadow-inner p-2 py-1">
            <div className="footer-content">
              <p className="text-sm text-gray-600 text-center">© Group6. All rights reserved 2024.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Profile;
