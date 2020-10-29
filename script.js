const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");
const video = document.querySelector("video");


function handleMove(e) {
    const height = e.pageY - this.offsetTop;
    const min = 0.4;
    const max = 4;
    const percentage = height / this.offsetHeight;
    speedBar.style.height = `${percentage * 100}%`;
    const playBackRate = percentage * (max - min) + min;
    speedBar.textContent = playBackRate.toFixed(2);
    video.playbackRate = playBackRate;
}

speed.addEventListener("mousemove", handleMove);