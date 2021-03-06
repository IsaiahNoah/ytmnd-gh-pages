var bonetrousle = new Howl({
	src: ["audio/bonetrousle.mp3"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.8064;

var rate = 1;
var rate_timer = percent_time;

function update() {

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 3;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.00015625;
		bonetrousle.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 12).toFixed(0) + "%";
	}

	document.getElementById("undyne").style.top = ((rate * 2) - Math.random() * rate * 4) + "px";
	document.getElementById("undyne").style.left = ((rate * 2) - Math.random() * rate * 4) + "px";
	requestAnimationFrame(update);
}

function run() {
	bonetrousle.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
