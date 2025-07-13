
/*const page =async ({params}:{params:{id:string}}) => {
    const{id}=await params;
    return <div>This is the blog post with first ID: </div>

}

export default page;*/




/*

import { notFound } from "next/navigation";

interface Blog {
    id: string;
    title: string;
    content: string;
}

// Dummy blog data for demonstration
const blogs: Blog[] = [
    { id: "1", title: "Understanding React Server Components", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
    { id: "2", title: "Next.js Routing Explained", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
    { id: "3", title: "TypeScript Tips for Next.js", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    // Add more blogs as needed
];

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function BlogPage({ params }: PageProps) {
    const { id } = await params;
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        notFound();
    }

    return (
        <main
            style={{
                maxWidth: "700px",
                margin: "40px auto",
                padding: "32px",
                background: "#fff",
                borderRadius: "12px",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            <h1
                style={{
                    fontSize: "2.5rem",
                    marginBottom: "1.2rem",
                    color: "#222",
                    fontWeight: 700,
                    letterSpacing: "-1px",
                }}
            >
                {blog.title}
            </h1>
            <article
                style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.7,
                    color: "#444",
                }}
            >
                {blog.content}
            </article>
        </main>
    );
}
*/
import { notFound } from "next/navigation";

interface Blog {
    id: string;
    title: string;
    content: string;
}

// Dummy blog data for demonstration
const blogs: Blog[] = [
    { id: "1", title: "Understanding React Server Components", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
    { id: "2", title: "Next.js Routing Explained", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
    { id: "3", title: "TypeScript Tips for Next.js", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function BlogPage({ params }: PageProps) {
    const { id } = await params;
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        notFound();
    }

    return (
        <main className="blog-post-container">
            <h1 className="blog-post-title">
                {blog.title}
            </h1>
            <article className="blog-post-content">
                {blog.content}
            </article>
        </main>
    );
}