import { useRef, useState } from "react";

function Video() {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
            }}>
                <video ref={videoRef}
                    src="https://www.w3schools.com/html/mov_bbb.mp4"></video>

                <button onClick={handlePlayPause}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
            </div>
        </>
    )
}

export default Video