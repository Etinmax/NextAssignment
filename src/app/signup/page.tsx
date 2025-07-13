/*
"use client";

import React, { useState } from "react";


const SignupLayout = () => {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto" }}>
            <h5 style={{ textAlign: "center", fontSize: "1.5rem" ,marginBottom: "1rem"}}>Create an Account</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", marginBottom: 8,border: "1px solid #ccc", padding: "8px" }}
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", marginBottom: 8,border: "1px solid #ccc", padding: "8px" }}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", marginBottom: 8,border: "1px solid #ccc", padding: "8px" }}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", marginBottom: 8,border: "1px solid #ccc", padding: "8px" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ccc",
                        backgroundColor: "#f0f0f0",
                        cursor: "pointer",
                        transition: "background 0.2s",
                    }}
                    onMouseOver={e => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupLayout;*/

"use client";

import React, { useState } from "react";

const SignupLayout = () => {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="signup-container">
            <h5 className="signup-title">Create an Account</h5>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <button
                    type="submit"
                    className="form-submit-btn"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupLayout;

