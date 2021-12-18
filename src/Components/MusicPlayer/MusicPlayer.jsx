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

    // playSound=(sound)=>{
    // let audio = new Audio(this.sound);
    // audio.play();
    // }
  componentDidUpdate(prevProps, prevState, snapshot) {
        // if(this.props.isGameStart){
        //     this.playMusic()
        // }
      console.log(this.props.isGameStart)
}
   musicPlayer2 =document.querySelector('.music-player')
    playMusic =()=> {
        // let music = new Audio(this.soundTest);

        this.musicPlayer2.play();
    }

    render() {
        return (
            <>
                {/*<button onClick={this.playSound}>Play</button>*/}
                <div  className="MusicPlayer-audio-div" >
                    <audio className="music-player" controls loop onClick={()=>console.log('clo')}>
                        {/*<source className="track1" src={this.musicFilesList[1]} type="audio/ogg" data-track-number="1" />*/}
                        <source className="track1" src={this.musicFilesList[3]} type="audio/ogg" data-track-number="1" />
                        {/*<source className="track2" src={this.musicFilesList[1]} type="audio/ogg" data-track-number="1" />*/}

                        {/*</source>*/}
                    </audio>
                </div>
            </>
        );
    }
};

export default MusicPlayer;