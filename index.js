$(document).ready(function () {



	centerIntroThree();
	intro1($(".intro"));
});

function positionIntro(elem, bool) {
	var h = window.innerHeight;
	var ch = (h - parseFloat(elem.css("height"))) / 2;

	if (bool) {
		// todo stub for doing something on window resize
	} else {
		//center div vertically
		elem.css("margin-top", ch + "px");
		$(".skip").click(function(evt) {
			// evt.stopPropogation();
			console.log("clicked");
			content();
		});
	}
}

function centerIntroThree() {
	var three = $(".intro3");
	var w = window.innerWidth;
	var h = parseInt(three.css("height"));

	var position = (w - h) / 2 + "px";
	// console.log(position);
	three.children("square").css("backgroundSize", three.css("height"));
	three.children(".square").css("left", position);
	three.children(".square").css("width", three.css("height"));

}

function intro1(elem) {
	var div = elem.children('.intro1');
	var title = div.children("h2");
	var w = window.innerWidth;

	positionIntro($("div.intro"));

	elem.velocity(
		{
			opacity: 1
		},
		{
			duration: 2500,
			queue: false
		}
	);
	div.velocity(
		{
			backgroundPositionX: "100%",
			// backgroundPositionY: "50%",
		},
		{
			duration: 3000,
			easing: "ease-out",
			complete: function(){
				transition(div, $(".intro2"));
			}
		}
	);
	title.velocity(
		{
			translateX: (w * 0.1),
			colorAlpha: 1,
		},
		{
			duration: 2500,
			easing: "ease-out",
		}
	);
}

function transition(one, two) {
	two.css("opacity", 0);
	intro2(two);
	two.velocity(
		{
			opacity: 1
		},
		{
			duration: 2000,
			queue: false
		}
	);
	one.velocity(
		{opacity: 0},
		{duration: 2000}
	);
}

function intro2(elem) {
	var div = elem;
	var title = elem.children("h2");
	var w = window.innerWidth;
	var h = parseInt($(".intro").css("height"));

	title.velocity(
		{
			left: w - 100 + "px",
			top: "20px",
			colorAlpha: 1
		},
		{
			duration: 0
		}
	);
	elem.velocity(
		{
			backgroundPositionX: "100%",
			backgroundPositionY: "50%",
			backgroundSize: "100%"
		},
		{
			duration: 3000,
			easing: "ease-out",
			queue: false
		}
	);
	title.velocity(
		{
			left: w - 250 + "px",
			// opacity: 0,
		},
		{
			duration: 3000,
			easing: "ease-out",
			complete: function() {
				intro3(elem, $(".intro3"));
			}
		}
	);
}

function intro3(one, two) {
	two.children(".square").css("opacity", 1);
	var square1 = two.children(".square.one");
	var square2 = two.children(".square.two");
	var square3 = two.children(".square.three");
	var square4 = two.children(".square.four");
	var w = window.innerWidth;

	one.velocity(
		{opacity: 0},
		{
			duration: 1000,
			easing: "linear",
			complete: function() {
				step2();
			}
		}
	);
	function step2() {
		two.velocity(
			{opacity: 1},
			{
				duration: 1000,
				easing: "linear",
			}
		);
		two.children("h2.first").velocity(
			{left: (w/2)+ "px"},
			{
				duration: 3000,
				easing: "ease-out",
				complete: function() {
					step3();
				}
			}
		);
		two.children("h2.last").velocity(
			{left: (w/2)+ "px"},
			{
				duration: 3000,
				easing: "ease-out"
			}
		);
	}
	function step3() {
		// transition to most detailed svg
		square1.velocity(
			{opacity: 0},
			{
				duration: 1000,
				easing: "linear",
				complete: function() {
					step4();
				}
			}
		);
	}
	function step4() {
		// transition to least detailed svg
		square2.velocity(
			{opacity: 0},
			{
				duration: 1000,
				easing: "linear",
				complete: function() {
					step5();
				}
			}
		);
	}
	function step5() {
		// fade out the baground to the headshot
		square3.velocity(
			{opacity: 0},
			{
				duration: 1000,
				easing: "linear",
				complete: function() {
					step6();
				}
			}
		);
		$(".intro3").children("h2").velocity(
			{opacity: 0},
			{duration: 1000}
		);
	}
	function step6() {
		$(".intro4").children("h2").css("lineHeight", $(".intro").css("height"));
		square4.velocity(
			{
				borderRadius: "25px",
				height: "50px",
				left: "20px",
				top: "20px"
			},
			{
				duration: 1000,
				easing: "linear",
				// complete:
			}
		);
		$(".intro4").velocity(
			{opacity: 1},
			{
				duration: 2000,
				complete: function() {
					step7();
				}
			}
		);
	}
	function step7() {
		$(".intro4").children("h2").velocity(
			{
				colorAlpha: 1,
				translateZ: "20px"
			},
			{
				duration: 2000,
				complete: function() {
					step8();
				}
			}
		);
	}
	function step8() {
		$(".intro").velocity(
			{
				height: "100px",
				marginTop: 0
			},
			{
				duration: 1500,
				complete: function() {
					content();
				}
			}
		);
	}
}

function content() {
	// $(".content").fadeIn();
	$(".content").css("display", "block");
	$(".content").velocity(
		{opacity: 1},
		{
			duration: 800,
			complete: function() {
				$(".intro").remove();
			}
		}
	)
}
