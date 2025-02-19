import ReactPlayer from "react-player"

export default function VideoPlayer() {
  return (
    <div className="h-full flex items-center justify-center">
      <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="100%" height="100%" controls />
    </div>
  )
}

