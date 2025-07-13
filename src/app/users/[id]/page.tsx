import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

async function getUser(id: string): Promise<User | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) return null;
    const user = await res.json();
    // JSONPlaceholder returns {} for not found, so check for id
    if (!user.id) return null;
    return user;
}

interface PageProps {
    params: { id: string };
}

export default async function UserPage({ params }: PageProps) {
    const user = await getUser(params.id);

    if (!user) {
        notFound();
    }

    return (
        <div className="user-page-container">
            {/* Header with Avatar */}
            <div className="user-avatar">
                {user.name.charAt(0)}
            </div>
            <h1 className="user-page-heading">{user.name}</h1>
            
            {/* Grid Layout for Sections */}
            <div className="user-info-grid">
                {/* Personal Information */}
                <div className="user-info-section">
                    <h2 className="section-title">Personal Information</h2>
                    <p className="info-paragraph">
                        <span className="info-label">ID:</span> {user.id}
                    </p>
                    <p className="info-paragraph">
                        <span className="info-label">Name:</span> {user.name}
                    </p>
                    <p className="info-paragraph">
                        <span className="info-label">Username:</span> {user.username}
                    </p>
                    <p className="info-paragraph">
                        <span className="info-label">Email:</span> 
                        <a href={`mailto:${user.email}`} className="info-link"> {user.email}</a>
                    </p>
                    <p className="info-paragraph">
                        <span className="info-label">Phone:</span> 
                        <a href={`tel:${user.phone}`} className="info-link"> {user.phone}</a>
                    </p>
                    <p className="info-paragraph">
                        <span className="info-label">Website:</span> 
                        <a 
                            href={`https://${user.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="info-link"
                        > {user.website}</a>
                    </p>
                </div>

                {/* Address Information */}
                <div className="user-info-section">
                    <h2 className="section-title">Address</h2>
                    <p className="info-paragraph">
                        <span className="info-label">Street:</span> {user.address.street}
                    </p>
                    <p className="info-paragraph">
                        <span className="info-label">Suite:</span> {user.address.suite}
                    </p>
                    <p className="info-paragraph">
                        <span className="info-label">City:</span> {user.address.city}
                    </p>
                    <p className="info-paragraph">
                        <span className="info-label">Zipcode:</span> {user.address.zipcode}
                    </p>
                    <p className="info-paragraph">
                        <span className="info-label">Coordinates:</span> 
                        <a 
                            href={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-link"
                        >
                            {user.address.geo.lat}, {user.address.geo.lng}
                        </a>
                    </p>
                </div>
            </div>

            {/* Company Information - Full Width */}
            <div className="user-info-section">
                <h2 className="section-title">Company Information</h2>
                <p className="info-paragraph">
                    <span className="info-label">Company:</span> {user.company.name}
                </p>
                <p className="info-paragraph">
                    <span className="info-label">Catch Phrase:</span> <em>"{user.company.catchPhrase}"</em>
                </p>
                <p className="info-paragraph">
                    <span className="info-label">Business:</span> {user.company.bs}
                </p>
            </div>

            {/* Navigation */}
            <div className="user-page-navigation">
                <Link href="/users" className="back-button">
                    ← Back to Users
                </Link>
            </div>
        </div>
    );
}