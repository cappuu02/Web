import Video from '../Video/HomeVideo.mp4';

function VideoC(){
    return(
        <div className="video-container">
             <h1 id='Titolo_Home_Page'>Benvenuto nel nostro sito</h1>
            <video id='MyVideo'  autoPlay loop  muted>
                 <h1 id='Titolo_Home_Page'>Benvenuto nel nostro sito</h1>
                    <source src={Video} type="video/mp4"></source>
            </video>
        </div>
    )
}


export default VideoC;