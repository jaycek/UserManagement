import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from "react-router";
const SignUpForm = () => {
    // Initialize the useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    const onSubmit = (data) => {
        console.log("Form Data:", data);
        axios.post('http://localhost:3000/users',data)
        .then(response=>{
            console.log(response.data)
            navigate('/login')
        })
        .catch(error=>console.log(error))
    };

    return (
        <div style={{ width: '300px', margin: '50px auto', textAlign: 'center' }}>
            <h2>SignUp Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Username */}
                <div style={{ marginBottom: '15px' }}>
                    <input
                        {...register("username", {
                            required: "Username is required"
                        })}
                        type="text"
                        placeholder="Enter your username"
                        style={{ width: '100%', padding: '8px' }}
                    />
                    {/* Display username errors */}
                    {errors.username && <p style={{ color: 'red', fontSize: '12px' }}>{errors.username.message}</p>}
                </div>
                {/* Name field */}
                <div style={{ marginBottom: '15px' }}>
                    <input
                        {...register("name", {
                            required: "Name is required"
                            
                        })}
                        type="text"
                        placeholder="Enter your name"
                        style={{ width: '100%', padding: '8px' }}
                    />
                    {/* Display email errors */}
                    {errors.name && <p style={{ color: 'red', fontSize: '12px' }}>{errors.name.message}</p>}
                </div>
                {/* Email Field */}
                <div style={{ marginBottom: '15px' }}>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email format"
                            }
                        })}
                        type="email"
                        placeholder="Enter your email"
                        style={{ width: '100%', padding: '8px' }}
                    />
                    {/* Display email errors */}
                    {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div style={{ marginBottom: '15px' }}>
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 4,
                                message: "Password must be at least 4 characters"
                            }
                        })}
                        type="password"
                        placeholder="Enter your password"
                        style={{ width: '100%', padding: '8px' }}
                    />
                    {/* Display password errors */}
                    {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
