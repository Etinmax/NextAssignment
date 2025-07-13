/*"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type BlogPost = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export default function BlogsPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            });
    }, []);
        if (loading) return <div style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</div>;


    return (
        <main className="max-w-2xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <ul className="space-y-6">
                {posts.map((blog) => (
                    <li key={blog.id} className="border-b pb-4">
                        <h2 className="text-xl font-semibold">{blog.title}</h2>
                        <p className="text-gray-600 text-sm mb-2">{}</p>
                        <p className="text-gray-800">{blog.body}</p>
                        <a href={`/blogs/${blog.id}`} className="text-blue-600 hover:underline">
                            Read more
                        </a>
                    </li>
                ))}
            </ul>
            <a href="/blogs/1" className="text-blue-600 hover:underline">Create New Blog</a>
        </main>
    );
}*/
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type BlogPost = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export default function BlogsPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="blog-loading">Loading...</div>;

    return (
        <main className="blog-list-container">
            <h1 className="blog-list-title">Blog</h1>
            <ul className="blog-posts-list">
                {posts.map((blog) => (
                    <li key={blog.id} className="blog-post-item">
                        <h2 className="blog-post-item-title">{blog.title}</h2>
                        <p className="blog-post-date-placeholder">{/* No date in API, so leave blank or remove */}</p>
                        <p className="blog-post-item-body">{blog.body}</p>
                        <Link href={`/blogs/${blog.id}`} className="blog-read-more">
                            Read more
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/blogs/create" className="blog-create-link">
                Create New Blog
            </Link>
        </main>
    );
}