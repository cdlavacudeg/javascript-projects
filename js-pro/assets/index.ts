import { MediaPlayer } from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import AdsPlugin from "./plugins/Ads";
const video=document.querySelector('video');
const playbutton:HTMLElement=document.querySelector('#playButton');
const mutebutton:HTMLElement=document.querySelector('#muteButton');
const player=new MediaPlayer({
    el:video, 
    plugins:[
    new AutoPlay(),
    new AutoPause(),
    new AdsPlugin(),
    ]
});

playbutton.onclick = ()=>player.togglePlay();
mutebutton.onclick = ()=>player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error);
    });
}