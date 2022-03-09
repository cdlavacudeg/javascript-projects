import { MediaPlayer } from "../MediaPlayer";

class AutoPause{
    private threshold:number;
    player: MediaPlayer;
    constructor(){
        this.threshold=0.25;
        this.handleIntersection=this.handleIntersection.bind(this);//Bindear this al objeto AutoPause
        this.handleVisibilityChange=this.handleVisibilityChange.bind(this);
    }
    run(player){
        this.player=player;
        let handler=this.handleIntersection;
        let config={
            threshold:this.threshold,
        }
        const observer= new IntersectionObserver(handler,config);

        observer.observe(this.player.media);

        document.addEventListener("visibilitychange",this.handleVisibilityChange);
    }
    private handleIntersection(entries: IntersectionObserverEntry[]){
        const entry=entries[0];
        const isVisible=entry.intersectionRatio>=this.threshold;

        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }

    private handleVisibilityChange(){
        const isVisible=document.visibilityState==='visible';
        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
}

export default AutoPause;