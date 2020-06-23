//for reorganize the assignment

var dueTMtag  = document.getElementsByClassName('j-submitTime score f-fl');
var Assign  = document.getElementsByClassName('m-chapterQuizHwItem');

if(Assign.length > 0){

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

//aabb[4].parentNode.insertBefore(aabb[4], aabb[3]);

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

//store remngTime for each Assign
var rTMtable = []; 
var args = 0;
var args1 = 0;

//make a rTMtable
while (args < Assign.length){
	rTMtable[args] = remngTime(dueTMtag[args1]);
	args1++;
	if (args1 < dueTMtag.length 
		&& Assign[args].contains(dueTMtag[args1])){
			if(rTMtable[args] > remngTime(dueTMtag[args1]))
				rTMtable[args] = remngTime(dueTMtag[args1]);
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
		if (
			(rTMtable[args3]>0 && rTMtable[args3+1]>0 && rTMtable[args3]>rTMtable[args3+1])||
			(rTMtable[args3]<0 && rTMtable[args3+1]<0 && rTMtable[args3]<rTMtable[args3+1])||
			(rTMtable[args3]<0 && rTMtable[args3+1]>0)
		){
			var temp = rTMtable[args3];
			rTMtable[args3] = rTMtable[args3+1];
			rTMtable[args3+1] = temp; 
			Assign[args3+1].parentNode.insertBefore(Assign[args3+1], Assign[args3]);
		}
		args3++;
	}
	args3 = 0; 
	args2++;
}

}//if assign[]'s length is >0