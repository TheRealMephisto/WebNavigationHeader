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
	var newWidth = $("#description").width()+30;
	if ($(window).width() < 800) {
		$(".headerUl").css("width", newWidth);
	} else {
		$(".headerUl").css("width", "85%");
	}
	$(".headerUl").children().css("width", newWidth);
}

function toggleMenu() {
	$(".headerUl").toggle();
}