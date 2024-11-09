$(function(){
	$("#header").load("../../assets/include/header.html"); // 相対パスで書いてるのって良くないと思う
});

const darklight = $("#darklight_btn");
darklight.on("click", () => {
	const target = $("body, body *:not(script)");
	if ($("body").hasClass("dark")) {
		target.removeClass("dark");
		$("#darklight").text("dark_mode");
	} else {
		target.addClass("dark");
		$("#darklight").text("light_mode");
	}
});