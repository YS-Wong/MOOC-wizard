//undo reorganization

//returns due time
function dueTime (element) {
	var inHL = element.innerHTML; 
	var dueTM; 
	if (!inHL.endsWith('</font>')){ //google web translation not involved
		dueTM = inHL.substr(7,2)+inHL.substr(10,2)
			+inHL.substr(13,2)+inHL.substr(16,2)+inHL.substr(19,2);
		return dueTM;
	}else if (inHL.endsWith('</font>')){ //opposite
		dueTM = inHL.substr(7+78,2)+inHL.substr(10+78,2)
			+inHL.substr(13+78,2)+inHL.substr(16+78,2)+inHL.substr(19+78,2);
		return dueTM;
	}
}

setTimeout(function(){

var dueTMtag  = document.getElementsByClassName('j-submitTime score f-fl');
var Assign  = document.getElementsByClassName('m-chapterQuizHwItem');

if(Assign.length > 0){

//store dueTime for each Assign
var dTMtable = []; 
var args = 0;
var args1 = 0;

//make a dTMtable
while (args < Assign.length){
	dTMtable[args] = dueTime(dueTMtag[args1]);
	args1++;
	if (args1 < dueTMtag.length 
		&& Assign[args].contains(dueTMtag[args1])){
			if(dTMtable[args] > dueTime(dueTMtag[args1]))
				dTMtable[args] = dueTime(dueTMtag[args1]);
			args1++;
	}
	args++;
}

//pT 6
//dT 3 8 2 5 7 1
//rT -3 2 -4 -1 1 -5
//o-dT 7 8 5 3 2 1
//o-rT 1 2 -1 -3 -4 -5

var args2 = 0;
var args3 = 0;
while (args2 < Assign.length - 1){
	while (args3 < Assign.length - args2 -1){
		if (dTMtable[args3]>dTMtable[args3+1]){
			var temp = dTMtable[args3];
			dTMtable[args3] = dTMtable[args3+1];
			dTMtable[args3+1] = temp; 
			Assign[args3+1].parentNode.insertBefore(Assign[args3+1], Assign[args3]);
		}
		args3++;
	}
	args3 = 0; 
	args2++;
}

}//end of: if assign[]'s length is >0

},500);