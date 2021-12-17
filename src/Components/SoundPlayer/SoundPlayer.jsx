import React  from 'react'

class MusicPlayer extends React.Component {

    soundList = {

    }
   musicFile = '/assets/sounds/short_whoosh.wav'

    playSound=(sound)=>{
    let audio = new Audio(this.sound);
    audio.play();
    }
    // componentDidMount() {
    //    this.playSound()
    // }

    playMusic =()=> {
        let music = new Audio(this.soundTest);
        music.play();
    }

    render() {
        return (
            <>
                <button onClick={this.playSound}>Play</button>
                <div  id="audio-div">
                    <audio id="music-player" controls>
                        <source className="track1" src={this.musicFile} type="audio/ogg" data-track-number="1">
                        </source>
                    </audio>
                </div>
            </>
        );
    }
};

export default MusicPlayer;