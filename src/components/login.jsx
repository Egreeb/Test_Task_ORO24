import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setformData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e)=>{
    const {name, value} = e.target
    setformData({...formData, [name]:value})
  }

  const handleSubmit = async(e)=>{
  e.preventDefault()
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(
        "https://oro24world.com/api/customertoken/withoutOTP",
        {
          email: formData.email,
          password: formData.password,
          IPAddress: "",
          Version: "",
          Platform: ""
        },
        {
          headers: {
            "X-App-Id": "KYCTY",
            "Content-Type": "application/json"
          }
        }
      );
      console.log("API Response:", response.data);
      const {token, data } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data));
      setSuccess("Login Successful!");
            setTimeout(() => {
        navigate("/dashboard");
      }, 800);

    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
    <div className="w-96 md:p-6 p-4 rounded-lg bg-white/60 backdrop-blur-md shadow-lg md:m-0 m-5">
        <h2 className='mb-10 text-2xl font-medium text-center mt-3'>Sign In</h2>
        <form action="" onSubmit={handleSubmit}>
        <div>
           <label htmlFor="" className='font-normal mb-3 block'>Email Id</label>
          <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder="Email Id" className="py-2 px-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        </div>
        <div>
           <label htmlFor="" className='font-normal my-3 block'>Password</label>
          <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder="Password" className="py-2 px-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-600 mt-2">{success}</p>}
        <button className="bg-black mt-5 hover:bg-gray-800 w-full text-white py-2 rounded-md hover:bg-blue-700 transition">
          {loading ? "Logging in..." : "Login"}
        </button>
        {/* <Link to={'/dashboard'} className='text-center block text-blue-600 mt-2'>Go to Dashboard</Link> */}
        </form>
    </div>
    </>
  )
}

export default Login