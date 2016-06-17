//general data structure for storage of information
var Character = function(name, height, length, full, imgid, mult) {
	this.name = name;
	this.height = height;
	this.length = length;
	this.full = full;
	this.img = imgid;
	this.mult = mult;
}

/*------------------------------------------------------------------------------------*/

//create all characters
//accessible by hashing for easy access
//NOTE TO PROGRAMMER: these hash keys must match values for checkboxes in index.html!
var c = new Object();
c["mikazuki"] = new Character("Mikazuki Munechika", 180, 80, 98.6, "mikazuki", 1);
c["kogitsunemaru"] = new Character("Kogitsunemaru", 188, 53.6, 67.27, "kogitsunemaru", 1);
c["ishikirimaru"] = new Character("Ishikirimaru", 189, 76.1, 96.9, "ishikirimaru", 1);
c["iwatoshi"] = new Character("Iwatoshi", 203, 106, 255.5, "iwatoshi", 1.1139);
c["imanotsurugi"] = new Character("Imanotsurugi", 123, 19.7, 29.5, "imanotsurugi", 1);
c["juzumaru"] = new Character("Juzumaru Tsunetsugu", 0, 83.9, 108, "juzumaru", 1);
c["nikkari"] = new Character("Nikkari Aoe", 167, 60.3, 76.6, "nikkari", 1);
c["nakigitsune"] = new Character("Nakigitsune", 164, 54, 68.4, "nakigitsune", 1);
c["ichigo"] = new Character("Ichigo", 177, 68.8, 85.5, "ichigo", 1);
c["namazuo"] = new Character("Namazuo Toshiro", 158, 38.5, 48.2, "namazuo", 1);
c["honebami"] = new Character("Honebami Toshiro", 159, 58.8, 74.3, "honebami", 1);
c["hirano"] =  new Character("Hirano Toshiro", 132, 30.15, 41.9, "hirano", 1);
c["atsushi"] = new Character("Atsushi Toshiro", 154, 21.8, 32.4, "atsushi", 1);
c["goto"] = new Character("Goto Toshiro", 0, 27.6, 39.2, "goto", 1);
c["shinano"] = new Character("Shinano Toshiro", 0, 25, 36.2, "shinano", 1);
c["maeda"] = new Character("Maeda Toshiro", 130, 24.54, 34.3, "maeda", 1);
c["akita"] = new Character("Akita Toshiro", 123, 22.4, 32.1, "akita", 1);
c["hakata"] = new Character("Hakata Toshiro", 0, 24.6, 35.8, "hakata", 1);
c["midare"] = new Character("Midare Toshiro", 145, 23.9, 33.9, "midare", 1);
c["gokotai"] = new Character("Gokotai", 135, 27.6, 39.7, "gokotai", 1);
c["yagen"] = new Character("Yagen Toshiro", 153, 25.8, 37.5, "yagen", 1);
c["uguisumaru"] = new Character("Uguisumaru", 176, 81.8, 100.9, "uguisumaru", 1);
c["akashi"] = new Character("Akashi Kuniyuki", 178, 76.5, 96.6, "akashi", 1);
c["hotarumaru"] = new Character("Hotarumaru", 120, 100.35, 136.4, "hotarumaru", 1.0268);
c["aizen"] = new Character("Aizen Kunitoshi", 131, 28.79, 40.3, "aizen", 1);
c["tonbokiri"] = new Character("Tonbokiri", 198, 43.7, 99.3, "tonbokiri", 1.0832);
c["monoyoshi"] = new Character("Monoyoshi Sadamune", 0, 33, 41.8, "monoyoshi", 1);
c["shokudaikiri"] = new Character("Shokudaikiri Mitsutada", 186, 66.7, 81.8, "shokudaikiri", 1);
c["kosetsu"] = new Character("Kosetsu Samonji", 178, 78.2, 98.4, "kosetsu", 1);
c["soza"] = new Character("Soza Samonji", 179, 68.1, 84.8, "soza", 1);
c["sayo"] = new Character("Sayo Samonji", 118, 24.5, 34.6, "sayo", 1);
c["kashu"] = new Character("Kashu Kiyomitsu", 165, 72.7, 91.8, "kashu", 1);
c["yamatonokami"] = new Character("Yamatonokami Yasusada", 165, 75, 97.7, "yamatonokami", 1);
c["kasen"] = new Character("Kasen Kanesada", 175, 60.5, 78.1, "kasen", 1);
c["izuminokami"] = new Character("Izuminokami Kanesada", 186, 87.5, 115.2, "izuminokami", 1);
c["mutsunokami"] = new Character("Mutsunokami Yoshiyuki", 174, 66.7, 87.2, "mutsunokami", 1);
c["yamanbagiri"] = new Character("Yamanbagiri Kunihiro", 172, 70.6, 86.94, "yamanbagiri", 1);
c["yamabushi"] = new Character("Yamabushi Kunihiro", 188, 77.2, 99, "yamabushi", 1);
c["horikawa"] = new Character("Horikawa Kunihiro", 160, 59.1, 76.1, "horikawa", 1);
c["hachisuka"] = new Character("Hachisuka Kotetsu", 176, 76.3, 97.7, "hachisuka", 1);
c["urashima"] = new Character("Urashima Kotetsu", 157, 45.8, 61.1, "urashima", 1);
c["nagasone"] = new Character("Nagasone Kotetsu", 187, 71.2, 91.95, "nagasone", 1.0103);
c["higekiri"] = new Character("Higekiri", 0, 84.4, 108.4, "higekiri", 1);
c["hizamaru"] = new Character("Hizamaru", 0, 87.6, 109.4, "hizamaru", 1);
c["okurikara"] = new Character("Okurikara", 175, 68.1, 84.2, "okurikara", 1);
c["heshikiri"] = new Character("Heshikiri Hasebe", 178, 64.9, 80.9, "heshikiri", 1);
c["fudo"] = new Character("Fudo Yukimitsu", 0, 25.5, 35.3, "fudo", 1);
c["shishio"] = new Character("Shishio", 166, 77.3, 92.6, "shishio", 1);
c["dodanuki"] = new Character("Dodanuki Masakuni", 169, 66.7, 84.4, "dodanuki", 1);
c["tsurumaru"] = new Character("Tsurumaru Kuninaga", 177, 78.6, 96.8, "tsurumaru", 1);
c["tarotachi"] = new Character("Tarotachi", 196, 221.1, 278.4, "tarotachi", 1.0340);
c["jirotachi"] = new Character("Jirotachi", 190, 166.7, 229.8, "jirotachi", 1);
c["nihongo"] = new Character("Nihongo", 195, 79.2, 141.7, "nihongo", 1.2452);
c["otegine"] = new Character("Otegine", 192, 138, 215, "otegine", 1);
//END insertion of hash table

/*------------------------------------------------------------------------------------*/

function toggle(source) {
	chbx = document.getElementsByName('chara');
	for(var i = 0; i < chbx.length; i++) {
		chbx[i].checked = source.checked;
	}
}

function getChecked(name) {
	checkboxes = document.getElementsByName(name);
	var checkedboxes = [];
	for(var i = 0; i < checkboxes.length; i++) {
		if(checkboxes[i].checked)
			checkedboxes.push(checkboxes[i]);
	}
	if (checkedboxes.length <= 0)
		return null;
	return checkedboxes;
}

function getNames(name) {
	var filled = getChecked(name);
	if (filled == null)
		return null;
	var charaval = [];
	for(var i = 0; i < filled.length; i++) {
		charaval.push(filled[i].value);
		//alert(filled[i].value);
	}
	return charaval;
}

function findinaa(arr, name) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].key == name)
			return true;
	}
	return false;
}

function clearCanvas() {
	var pictures = document.getElementsByClassName('charaimage');
	while (pictures.length > 0) {
		pictures[0].parentNode.removeChild(pictures[0]);
	}
}

function getRadioValue(name) {
	var radios = document.getElementsByName(name);
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked)
			return radios[i].value;
	}
}

//return -1 for error, 0 for normal, 1 for blade, 2 for full
function getopt() {
	var pickedopt = getRadioValue('opt');

	if (pickedopt == "normal")
		return 0;
	if (pickedopt == "blade")
		return 1;
	if (pickedopt == "full")
		return 2;
	else {
		return -1;
	}
}

function drawCanvas() {
	
	clearCanvas();
	
	//first check if a height set is chosen
	var checkopt = getopt();
	if (checkopt == -1) {
		alert("You must pick a height set.");
		return;
	}
	
	var charanames = getNames('chara');
	var todraw = [];

	if (charanames == null) {
		alert("You must pick at least one character.");
		return;
	}
	
	for(var i = 0; i < charanames.length; i++) {
		if (charanames[i] in c) {
			var name = charanames[i];
			todraw.push(c[name]);
		}
		else {
			//error out: this should not happen
			alert("Error: Characater of id " + charanames[i] + " not found in database. Please alert this bug to the webmaster.");
		}
	}
	for (var i = 0; i < todraw.length; i++) {
		drawCharacter(todraw[i]);
		//alert(todraw[i].name);
		//alert(todraw[i].height);
	}
	
}

var drawCharacter = function(character) {
	
	//get which height set to use
	var opt = getopt();
	
	//there was an error, so don't try anything
	if (opt == -1)
		return;
	//extract variables
	
	var name = character.name;
	var height;
	if (opt == 0)
		height = character.height;
	else if (opt == 1)
		height = 2*(character.length); //make it bigger since it's small
	else if (opt == 2)
		height = 2*(character.full); //bigger
	else {
		alert("Unexpected error") //hopefully we never get here...
		return;
	}
	var h = character.height;
	var l = character.length;
	var f = character.full;
	var imgid = character.img;
	var mult = character.mult;
	
	//set up individual images
	var chara = document.createElement('div');
	chara.className = "charaimage";
	
	var charaImage = document.createElement("img");
	charaImage.src = "images/" + imgid + ".png";
	//not happy about this, 2.5 truncates pixels with rounding, so less accurate
	charaImage.height = height*mult*3;
	chara.appendChild(charaImage);
	charaImage.addEventListener('mouseover', showdata);
	
	document.getElementById('fullimage').appendChild(chara);
}

function clearAll() {
	clearCanvas();
	
	chbx = document.getElementsByName('chara');
	for(var i = 0; i < chbx.length; i++) {
		chbx[i].checked = false;
	}
	
	//since by diff name, clear this box if checked
	selectall = document.getElementsByName('selectall');
	for(var i = 0; i < selectall.length; i++) {
		selectall[i].checked = false;
	}
}

var showdata = function(event) {
	
}