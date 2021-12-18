import React  from 'react'
import './MusicPlayer.css'

class MusicPlayer extends React.Component {
    soundList = {

    }
   musicFilesList = {
        1:'/assets/sounds/331_full_mindfulness_0154_preview.mp3',
       2:'/assets/sounds/302_full_mindful-rest_0147_preview.mp3',
       3:'/assets/sounds/222_full_magnetic-fields_0152_preview.mp3'
   }




    render() {
        return (
            <>
                <div  className="MusicPlayer-audio-div" >
                    <audio className="music-player" controls loop onClick={()=>console.log('clo')}>
                        <source className="track1" src={this.musicFilesList[3]} type="audio/ogg" data-track-number="1" />

                    </audio>
                </div>
            </>
        );
    }
};

export default MusicPlayer;