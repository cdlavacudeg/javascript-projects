function MediaPlayer(config){
    this.media=config.el
}

MediaPlayer.prototype.play=function(){
    this.media.play();//Metodo HTMLMediaElement MDN
}

MediaPlayer.prototype.pause=function(){
    this.media.pause();
}
MediaPlayer.prototype.togglePlay=function(){
    if(this.media.paused) {
        this.play()
    }else {
        this.pause()
    };
}

export {MediaPlayer};