const weather = (props) => {
    const videos = [
        {
            name:"Clouds",
            background: video1

        },
        {
            name:"Thunderstorm",
            background: video2
        }
    ]
    const videoURL = videos.find(el => el.name === props.weatherDescription)?.background
    return(
        <div>
            <video id="background" key={videoURL} autoPlay loop muted>
                <source src = {videoURL} type="video/mp4"/> 
            </video>
        </div>
    )
}

export default weather