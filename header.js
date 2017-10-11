$(window).on("load", function () {
	toggleMenuDependingOnWindowSize();
	setHeaderIds();
	setActiveClass();
});

// Watch for window resizing event
$(window).resize(function() {
	toggleMenuDependingOnWindowSize();
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
	pageId += document.location.href.match(/[^\/]+$/)[0].split(".")[0];
	if (pageId == null) {
		pageId = "#Hauptseite";
	}
	$(pageId).attr("class", "aktiv");
}

function toggleMenu() {
	$(".headerUl").toggle();
}