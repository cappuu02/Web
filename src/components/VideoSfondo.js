import Video from '../Video/HomeVideo.mp4';

function VideoC(){
    return(
        <div className="video-container">
            <video id='MyVideo'  autoPlay loop  muted>
                    <source src={Video} type="video/mp4"></source>
            </video>
        </div>
    )
}


export default VideoC;