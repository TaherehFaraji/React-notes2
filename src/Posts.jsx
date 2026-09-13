import { useState, useEffect } from "react";

function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then((res) => {
                if (!res.ok) { throw new Error("Failed to fetch") }
                return res.json()
            })
            .then(data => {
                setPosts(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])


    return (
        <>
            <div
                style={{
                    padding: "50px 20px",
                }}>
                <div
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                    }}>
                    {loading && (
                        <p
                            style={{
                                textAlign: "center",
                                color: "#dae6f7",
                                fontSize: "18px",
                            }}>
                            Loading...</p>)}

                    {error && (
                        <p
                            style={{
                                textAlign: "center",
                                color: "#dc2626",
                                background: "#fee2e2",
                                padding: "15px",
                                borderRadius: "10px",
                            }}>
                            {error}</p>)}

                    <div
                        style={{
                            display: "grid",
                            gap: "20px",
                        }}>
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                style={{
                                    background: "white",
                                    padding: "25px",
                                    borderRadius: "16px",
                                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                                }}>
                                <span
                                    style={{
                                        display: "inline-block",
                                        background: "#e0f2fe",
                                        color: "#0284c7",
                                        padding: "5px 10px",
                                        borderRadius: "20px",
                                        fontSize: "13px",
                                        marginBottom: "15px",
                                    }}>
                                    Post #{post.id}
                                </span>

                                <h2
                                    style={{
                                        color: "#1e293b",
                                        fontSize: "20px",
                                        marginBottom: "12px",
                                        textTransform: "capitalize",
                                    }}>
                                    {post.title}
                                </h2>

                                <p
                                    style={{
                                        color: "#64748b",
                                        lineHeight: "1.7",
                                        margin: 0,
                                    }}>
                                    {post.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Posts