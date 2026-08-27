import { useState } from "react";

function Component() {
    const [photos,setPhotos] = useState([]);
    const [error,setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch('https://jsonplaceholder.typicode.com/photos?_limit=3', { signal })
            .then(res => res.json())
            .then(data => {
                // if component still mounted
                setPhotos(data)
            })
            .catch(err => {
                if (err.name !== 'AbortError') setError(err.message)
            })

        return () => controller.abort()
    }, [])

    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

    return(
        
    )
}