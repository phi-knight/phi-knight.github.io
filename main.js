function paintBackground() {
	color = document.getElementById("backgroundColor").value;
	document.body.style.backgroundColor = color;
	console.log("painted background " + color);
}

function paintFont() {
	color = document.getElementById("fontColor").value;
	document.body.style.color = color;
	console.log("painted text " + color);
}

var changeFontStyle = function (font) {
       document.body.style.fontFamily = font.value;
}


function hs(id) {
	var x = document.getElementById(id)
	console.log(x.style.display)
	if (x.style.display==="none")
		x.style.display = "inline"
	else
		x.style.display = "none"
}
