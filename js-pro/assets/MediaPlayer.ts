class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play(); //Metodo HTMLMediaElement MDN
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        };
    }
    toggleMute() {
        this.media.muted = !this.media.muted;
    }
    mute() {
        this.media.muted = true;
    }
}

export {MediaPlayer};