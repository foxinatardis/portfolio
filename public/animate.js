/*jshint esversion:6*/

function createSpinner() {
	var circle = $(".circle");
	for(var i = 0; i < 90; i++) {
		console.log(i);
		if (i === 0) {circle.append("<h1 class='spinner'>A</h1>");}
		else if (i===1) {circle.append("<h1 class='spinner'>d</h1>");}
		else if (i===2 || i===12) {circle.append("<h1 class='spinner'>a</h1>");}
		else if (i===3) {circle.append("<h1 class='spinner'>m</h1>");}
		else if (i===5) {circle.append("<h1 class='spinner'>B</h1>");}
		else if (i===6 || i===11 || i===46 || i===50 || i===52 || i===56) {circle.append("<h1 class='spinner'>e</h1>");}
		else if (i===7 || i===8 || i===53) {circle.append("<h1 class='spinner'>l</h1>");}
		else if (i===9) {circle.append("<h1 class='spinner'>i</h1>");}
		else if (i===10 || i===51) {circle.append("<h1 class='spinner'>v</h1>");}
		else if (i===13) {circle.append("<h1 class='spinner'>u</h1>");}
		else if (i===45) {circle.append("<h1 class='spinner'>W</h1>");}
		else if (i===47) {circle.append("<h1 class='spinner'>b</h1>");}
		else if (i===49) {circle.append("<h1 class='spinner'>D</h1>");}
		else if (i===54) {circle.append("<h1 class='spinner'>o</h1>");}
		else if (i===55) {circle.append("<h1 class='spinner'>p</h1>");}
		else if (i===57) {circle.append("<h1 class='spinner'>r</h1>");}
		else {circle.append("<h1 class='spinner'> </h1>");}
	}
	var tz = Math.round( ( 20 / 2 ) /
		Math.tan( ( ( Math.PI * 2 ) / 90 ) / 2 ) );
		console.log(tz);
	var rotY = 0;

	for (var each of $(".circle").children("h1.spinner")) {
		$(each).css("transform", "rotateY(" + rotY + "deg) translateZ(" + tz + "px)");
		rotY+=4;
	}
	$(".circle").velocity(
		{scale: 1.5},
		{duration: 0}
	).velocity(
		{
			rotateY: "360deg",
		},
		{
			duration: 10000,
			easing: "linear",
			loop: true
		}
	);
	$(".initials").velocity(
		{
			rotateZ: "-360deg",
			rotateX: "-360deg"
		},
		{
			duration: 10000,
			easing: "linear",
			loop: true
		}
	);
}

function cardRot() {
	var h = window.innerHeight;
	var w = window.innerWidth;

	$(".cardRot").css({
		height: "90vh",
		width: (w * 0.8) + "px",
		marginLeft: (w * 0.1) + "px",
		marginTop: "15vh",
	});

	var tz = Math.round( ( h / 2 ) /
		Math.tan( ( ( Math.PI * 2 ) / $(".cardRot").children().length ) / 2 ) );
	var rotX = 0;
	for (var each of $(".cardRot").children()) {
		$(each).css({
			paddingTop: "5vh",
			paddingBottom: "5vh",
			display: "block",
			position: "absolute",
			transform: "rotateX("+ rotX + "deg) translateZ(" + tz + "px)"
		});
		rotX += (360/ $(".cardRot").children().length);
	}
}
