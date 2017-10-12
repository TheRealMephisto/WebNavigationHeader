$(window).on("load", function () {
	setHeaderIds();
	setActiveClass();
	setElementsSize();
	toggleMenuDependingOnWindowSize();
});

// Watch for window resizing event
$(window).resize(function() {
	toggleMenuDependingOnWindowSize();
	setElementsSize();
});

function toggleMenuDependingOnWindowSize() {
	if ($(window).width() < 800) {
		$(".headerUl").hide();
	} else {
		$(".headerUl").show();
	}
}

function setHeaderIds() {
	$(".headerUl").
		find("[href]").
		each(function() {
			$(this).attr("id", $(this).attr("href").split(".")[0]);
		});
}

function setActiveClass() {
	var pageId = "#";
	try {
		pageId += document.location.href.match(/[^\/]+$/)[0].split(".")[0];
	} catch (err) {
		pageId = $(".headerUl").firstChild().attr("id");
	}
	$(pageId).attr("class", "aktiv");
}

function setElementsSize() {
	var descriptionWidth = $("#description").width();
	if ($(window).width() < 800) {
		$(".headerUl").css("width", descriptionWidth);
		$(".headerUl").children().css("width", descriptionWidth);
		//$(".headerUl:last-child").css("width", descriptionWidth);
	} else {
		$(".headerUl").css("width", "85%");
		$(".headerUl").children().css("width", descriptionWidth);
	}
}

function toggleMenu() {
	$(".headerUl").toggle();
}