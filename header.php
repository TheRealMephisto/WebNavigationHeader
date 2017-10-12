<?php
	$configs = new RecursiveIteratorIterator(new RecursiveDirectoryIterator("./"), RecursiveIteratorIterator::SELF_FIRST);
	$configPath = iterator_to_array(new RegexIterator($configs, '/^.+header.conf$/i', RecursiveRegexIterator::GET_MATCH));
	$configPath = array_shift($configPath)[0];
	$headerDirPath = explode("header.conf", $configPath)[0];

	$Lines = explode("\n", file_get_contents($configPath));
	$Elements = array();
	$Description = "Beschreibung";
	for ($i = 0; $i < count($Lines); $i++) {
		switch($Lines[$i]) {
			case "[Elements]":
							getElements($i);
							break;
			case "[Description]":
							$Description = $Lines[$i+1];
							break;
			default: break;
		}
	}
	echo '<div class="headerDiv"><div id="menuButtonDiv"><button id="menuButton" onclick="toggleMenu()"><h3>Menu</h3></button></div>';
	echo '<ul class="headerUl">';
	foreach ($Elements as $Element) {
		$Parts = explode(":", $Element);
		echo '<li><a href="'.$Parts[1].'">'.$Parts[0].'</a></li>';
	}
	echo '<li id="description"><p>'.$Description.'</p></li></ul>';
	echo '<img src="'.$headerDirPath.'/Images/banner.png" alt="Banner konnte nicht geladen werden!" draggable="false"/></div>';
	
	function getElements($startIndex) {
		global $Lines, $Elements;
		// EOS = End Of Section
		$EOS = FALSE;
		$index = $startIndex;
		while(!$EOS) {
			$index++;
			if ($Lines[$index] == "[/Elements]") {
				$EOS = TRUE;
			} else {
				$Elements[] = $Lines[$index];
			}
		}
	}
?>