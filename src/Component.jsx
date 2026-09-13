import { useState, useEffect } from "react";

function Component() {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch('https://jsonplaceholder.typicode.com/photos?_limit=3', { signal })
            .then(res => res.json())
            .then(data => {
                // if component still mounted
                setPhotos(data)
            })
            .catch((err) => {
                //handlling abrot error
                if (err.name === "AbortError") {
                    return;
                }

                setError(err.message);
            });

        return () => controller.abort()
    }, [])

    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

    return (
        <div>
            <h1>Photos</h1>

            {photos.map((photo) => (
                <div key={photo.id}>
                    <img
                        src={photo.thumbnailUrl}
                        alt={photo.title}
                    />
                    <h3>{photo.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Component