function calculator(distance, time) {

	let rawPace = time/distance;
	let roundPace = Math.floor(rawPace);
	let seconds = Math.floor((rawPace - roundPace) * 60);

	document.getElementById("output").innerHTML = 
	" " + roundPace + ":" + seconds + " minutes per kilometer.";

	let splits = "Splits: <br/><br/>";

	for (let i = 1; i <= distance; i++) {
		let rawSplit = (rawPace * i);
		let roundSplit = Math.floor(rawSplit);
		let splitSeconds = Math.floor((rawSplit - roundSplit) * 60);
		splits += i + " km: " + roundSplit + ":" + splitSeconds + " <br/><br/>";
	}

	document.getElementById("kmSplit").innerHTML = splits; 
}


