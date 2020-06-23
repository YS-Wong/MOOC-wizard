//purely evaluate, without checking anything

//"elements" are for giving points
//"elements1" are for writting commemts
////"elements2" are for making effects (nope)

if(document.getElementsByClassName('j-evaluate').length > 0){
	
	var elements = document.getElementsByClassName('j-select');
	var elements1 = document.getElementsByClassName('j-textarea inputtxt');
	
	var args = 0;
	while(args < elements.length - 1){
		if(elements[args].value > elements[args+1].value){
			elements[args].checked = true;
		}
		args++;
	}
	elements[args].checked = true;
	
	var args1 = 1;
	var comments = ["good. ","very nice. ","exelent! ","well done. ","super! ","nice one. ","good job! ","all correct. ","ohne Fehler. ","perfect. "];
	while(args1 < elements1.length){
		elements1[args1].value = comments[Math.floor(Math.random() * comments.length)];
		elements1[args1].style.fontWeight = 'bold';
		elements1[args1].style.color = '#4CAF50';
		args1++;
	}
}
