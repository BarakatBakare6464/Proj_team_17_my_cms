import React, { useState } from 'react';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import signup from '../assets/img/pana.svg';
import { Link } from "react-router-dom";


const SignUp = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };


  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
      setName(value);
    }
    if(id === "userName"){
      setUserName(value);
    }
    if(id === "email"){
      setEmail(value);
    }
    if(id === "password"){
      setPassword(value);
    }
  }

  const handleSubmit  = (e) => {
    e.preventDefault();

    if (name || userName || email || password === true) {
      console.log('Form submitted: ' + name,userName,email,password);
      setName(''); setUserName(''); setEmail(''); setPassword('');
      return alert("You've signed up successfully. Proceed to login");
    }
    else {
      return alert("Please fill out all fields")
    }
  }

  return (
    <div className="h-screen session-bg">
      <div className=" mt-10  flex">
      <div className="w-1/2">
        <div className="flex items-center justify-center flex-col">
        
          <form action="" method="POST">
            <h1 className=" mb-12  font-semibold overflow-hidden text-4xl color1">Sign Up</h1>
            <div className="w-[481px] mb-6 ">
              <label htmlFor="name" className=" font-medium block mb-2 text-sm  text-black dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange = {(e) => handleInputChange(e)}
                placeholder="John Doe"
                className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-12" 
                required
              />
            </div>
            <div className="w-[481px] mb-6">
              <label htmlFor="userName" className="block mb-2 text-sm font-medium  text-black dark:text-gray-300">Username</label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange = {(e) => handleInputChange(e)}
                placeholder="johndoe"
                className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-12" 
                required
              />
            </div>
            <div className=" w-[481px] mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium  text-black dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange = {(e) => handleInputChange(e)}
                placeholder="johndoe@example.com"
                className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-12" 
                required
              />
              <p className="hidden peer-invalid:visible text-red-700 font-light">
                  Please enter a valid email address
              </p>
            </div>
            <div className="w-[481px] mb--6 mx-auto relative">
              <div className="w-full">
                <label htmlFor="password" className="block mb-2 text-sm font-medium  text-black dark:text-gray-300">Password</label>
                <input
                  type={open === false ? "password" : "text"}
                  id="password"
                  value={password}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  onChange = {(e) => handleInputChange(e)}
                  placeholder="*********"
                  className="h-12 rounded-md mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-gray-500 block w-full p-2.5 pr-12" 
                  required
                />
              </div>

              <div className="absolute top-10 right-5">
                {open === false ? (
                  <FontAwesomeIcon icon={faEye} onClick={toggle} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
                )}
              </div>
            </div>

            <button type="submit" onClick ={(e)=>handleSubmit(e)} className="colorbtn-bg rounded-md font-semibold w-[481px] h-12 bg-gray-400 mt-6 flex items-center justify-center">Sign Up</button>
          </form>
        
          <div className="flex items-center justify-center flex-col">
            <div className="pt-3">
              <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>

           <p className="mt-8 mb-8">OR</p>
        
            <div className="mb-12">
              <p className="mb-3">continue with:</p>
              <div className="flex items-center gap-9">
                <div className="w-8 h-8 btn-bg rounded-full"></div>
                <div className="w-8 h-8 btn-bg rounded-full"></div>
                <div className="w-8 h-8 btn-bg rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <img src={signup} alt="sign up img" />
      </div>
      </div>
    </div>
    
  );
};

export default SignUp;
