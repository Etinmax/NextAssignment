/*
'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <div style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</div>;

    return (
        <div style={{ maxWidth: 600, margin: "2rem auto", padding: "2rem", background: "#f9f9f9", borderRadius: 8, boxShadow: "0 2px 8px #eee" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Users</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {users.map((user) => (
                    <li
                        key={user.id}
                        style={{
                            background: "#fff",
                            marginBottom: "1rem",
                            padding: "1rem",
                            borderRadius: 6,
                            boxShadow: "0 1px 4px #ddd",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <span>
                            <strong>{user.name}</strong> ({user.username}) - {user.email}
                        </span>
                        <Link type="button" onClick={() => setLoading(true)}
                            href={`/users/${user.id}`}
                            style={{
                                background: "black",
                                color: "#fff",
                                padding: "0.5rem 1rem",
                                borderRadius: 4,
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                transition: "background 0.3s",
                            }}
                        >
                            Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;*/

'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="users-loading">Loading...</div>;

    return (
        <div className="users-container">
            <h1 className="users-title">Users</h1>
            <ul className="users-list">
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <div className="user-info">
                            <span className="user-name">{user.name}</span>
                            <span> (</span>
                            <span className="user-username">{user.username}</span>
                            <span>) - </span>
                            <span className="user-email">{user.email}</span>
                        </div>
                        <Link 
                            href={`/users/${user.id}`}
                            className="user-details-btn"
                            onClick={() => setLoading(true)}
                        >
                            Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;