function vertical() {
    const cb = document.getElementById("checkbox");
    if (cb.checked) {
        document.documentElement.style
            .setProperty('--animation', 'translateX(20%)');
        document.getElementById("worm").style.flexDirection = "column";
        document.getElementById("n5").style.flexDirection = "column";
    } else {
        document.documentElement.style
            .setProperty('--animation', 'translateY(20%)');
        document.getElementById("worm").style.flexDirection = "row";
        document.getElementById("n5").style.flexDirection = "row";
    }
}

function setcolor() {
	document.documentElement.style
		.setProperty('--box-color', clr.value);
}

function setsize() {
    if (sz.value == '') {
        document.documentElement.style
		.setProperty('--worm-size', '50px');
    } else {
        document.documentElement.style
		.setProperty('--worm-size', sz.value + 'px');
    }
}

function megaworm() {
    window.location.assign = "/mega"
}

function normalworm() {
    window.location.assign = "/"
}


