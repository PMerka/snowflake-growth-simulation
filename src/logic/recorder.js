
export class CanvasRecorder{
    constructor(){
        this.videoStream = undefined
    }
    setCanvasRef = (canvas) => {
        if(this.videoStream !== undefined){
            return
        }
        try{
            
        
        console.log("canvas ref", canvas)
        this.videoStream = canvas.captureStream();
        this.mediaRecorder = new MediaRecorder(this.videoStream);
        this.videoElement = document.createElement('video');
        this.frames = []

        this.mediaRecorder.ondataavailable = (e) => {
            this.frames.push(e.data);
        };

        this.mediaRecorder.onstop = (e) => {
            this.blob = new Blob(this.frames, { 'type': "video/webm" });
            this.url = window.URL.createObjectURL(this.blob);
            this.frames = [];
            //this.videoURL = URL.createObjectURL(this.blob);
            console.log(this.blob)
            //this.videoElement.src = this.videoURL;
            //document.body.appendChild(this.videoElement);
        };
        }
        catch (e){
            console.log(e)
        }
    }

    stop = () => {
        this.mediaRecorder.stop()
    }

    start = () => {
        this.mediaRecorder.start();
    }

    download = () => {
        const link = document.createElement('a');
        link.download = `snowflake.webm`;
        link.href = this.url
        link.click();
    }
}
const canvasRecorder = new CanvasRecorder()
export default canvasRecorder