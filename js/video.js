var video = document.querySelector("#player1")

video.load();

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime < (video.duration - 15)) {
		console.log("Original Time " + video.currentTime);
		video.currentTime += 15;
		console.log("New Time " + video.curentTime);
	}

	else {
		video.currentTime = 0;
		video.play();
		console.log("New Time " + video.currentTime);
	}
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Unmute");
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}

	else {
		console.log("Mute");
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

document.getElementById("slider").addEventListener("change",function(){
    video.volume = this.value / 100;
	console.log("Changed volume!")
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.getElementById("vintage").addEventListener("click", function() {
	console.log("I'm Old School now.")
	video.style.borderRadius = "20px";
	video.style.filter = "sepia(93%)";
	video.style.border = "brown dashed 2px";
})

document.getElementById("orig").addEventListener("click", function() {
	if (video.style.borderRadius == "20px") {
		video.style = "none";
		console.log("I'm back to normal now.")
	}
})
