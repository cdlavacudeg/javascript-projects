class AutoPause{
    constructor(){
        this.threshold=0.25;
        this.handleIntersection=this.handleIntersection.bind(this);//Bindear this al objeto AutoPause
    }
    run(player){
        this.player=player;
        let handler=this.handleIntersection;
        let config={
            threshold:this.threshold,
        }
        const observer= new IntersectionObserver(handler,config);

        observer.observe(this.player.media);
    }
    handleIntersection(entries){
        const entry=entries[0];
        console.log(this);
        const isVisible=entry.intersectionRatio>=this.threshold;

        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
}

export default AutoPause;