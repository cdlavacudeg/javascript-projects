import { MediaPlayer } from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video=document.querySelector('video');
const playbutton=document.querySelector('#playButton');
const mutebutton=document.querySelector('#muteButton');
const player=new MediaPlayer({
    el:video, 
    plugins:[
    //new AutoPlay()
    ]
});

playbutton.onclick = ()=>player.togglePlay();
mutebutton.onclick = ()=>player.toggleMute();