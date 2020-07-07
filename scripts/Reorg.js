//for reorganize the assignment

//get current time
var d = new Date();
var month = d.getMonth()+1;
if (month<10)month='0'+month;
var date = d.getDate();
if (date<10)date='0'+date;
var hours = d.getHours();
if (hours<10)hours='0'+hours;
var minutes = d.getMinutes();
if (minutes<10)minutes='0'+minutes;
//"202006200137" for example
var prsTM = d.getFullYear().toString().substr(2,2)+''+month+''+date+''+hours+''+minutes;

//returns remaining time
function remngTime (element) {
	var inHL = element.innerHTML; 
	var dueTM; 
	if (!inHL.endsWith('</font>')){ //google web translation not involved
		dueTM = inHL.substr(7,2)+inHL.substr(10,2)
			+inHL.substr(13,2)+inHL.substr(16,2)+inHL.substr(19,2);
		return dueTM - prsTM;
	}else if (inHL.endsWith('</font>')){ //opposite
		dueTM = inHL.substr(7+78,2)+inHL.substr(10+78,2)
			+inHL.substr(13+78,2)+inHL.substr(16+78,2)+inHL.substr(19+78,2);
		return dueTM - prsTM;
	}
}

setTimeout(function(){

var dueTMtag  = document.getElementsByClassName('j-submitTime score f-fl');
var evadueTMtag = document.getElementsByClassName('gray j-evalEnd');
var assign  = document.getElementsByClassName('m-chapterQuizHwItem');

if(assign.length > 0){

//store remngTime for each Assign
var rTMtable = []; 
var args = 0;
var args1 = 0;
var args11 = 0;

//make a rTMtable
while (args < assign.length){
	rTMtable[args] = remngTime(dueTMtag[args1]);
	args1++;
	
	if (args1 < dueTMtag.length 
		&& assign[args].contains(dueTMtag[args1])){
			if (rTMtable[args] > remngTime(dueTMtag[args1])
				&& remngTime(dueTMtag[args1]) >0)
					rTMtable[args] = remngTime(dueTMtag[args1]);
			args1++;
	}
	
	if (args11 < evadueTMtag.length
		&& assign[args].contains(evadueTMtag[args11])){
		if (rTMtable[args] > remngTime(evadueTMtag[args11])
			&& remngTime(dueTMtag[args1]) >0)
				rTMtable[args] = remngTime(evadueTMtag[args11]);
		args11++;
	}
	
	args++;
}

//below is an example
//current time 6
//due time 3 8 2 5 7 1
//remaining time -3 2 -4 -1 1 -5
//due time in order 7 8 5 3 2 1
//remaining time in order 1 2 -1 -3 -4 -5

var args2 = 0;
var args3 = 0;
while (args2 < assign.length - 1){
	while (args3 < assign.length - args2 -1){
		if (
			(rTMtable[args3]>0 && rTMtable[args3+1]>0 && rTMtable[args3]>rTMtable[args3+1])||
			(rTMtable[args3]<0 && rTMtable[args3+1]<0 && rTMtable[args3]<rTMtable[args3+1])||
			(rTMtable[args3]<0 && rTMtable[args3+1]>0)
		){
			var temp = rTMtable[args3];
			rTMtable[args3] = rTMtable[args3+1];
			rTMtable[args3+1] = temp; 
			assign[args3+1].parentNode.insertBefore(assign[args3+1], assign[args3]);
		}
		args3++;
	}
	args3 = 0; 
	args2++;
}

}//end of: if assign[]'s length is >0

},500);