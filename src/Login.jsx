/*import React,{useState} from "react";
import "./Login.css";

function Login() {
    const[formData , setFormData] = useState({
    username:"",
    email:"",
    phone:"",
    password:""    
    });

    const [error , setError]   = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const{username,email,phone,password} = formData;
          
        if(!username||!email || !phone ||!password){
            setError("All fields are required!");
            return;
        }
        if(password.length<6){
            setError("Password must be at least 6 characters!");
            return;
        }
        setError("");
        alert("Login Sucessful");
        console.log(formData);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="text-center mb-3">Login</h2>

                {error && <p className="error">{error}</p>}

                <input 
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
                />
                <input 
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                />
                 <input 
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
                />
                <input 
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                />


                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
        
    );
}
export default Login;*/
