import { MediaPlayer } from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video=document.querySelector('video');
const playbutton=document.querySelector('#playButton');
const mutebutton=document.querySelector('#muteButton');
const player=new MediaPlayer({
    el:video, 
    plugins:[
    new AutoPlay(),
    new AutoPause(),
    ]
});

playbutton.onclick = ()=>player.togglePlay();
mutebutton.onclick = ()=>player.toggleMute();