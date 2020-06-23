//to tell, if the user clicks any thing in learn-page

console.log('HWclick started');

//"body" refers to the main panel that hw is in
var body = document.getElementsByClassName('g-wrap f-cb');

if(document.URL.includes('learn')){
	body[0].removeEventListener("click", HWclick);
	body[0].addEventListener("click", HWclick);
	console.log('listener added');
}

function HWclick() {
	setTimeout(function (){
		if (document.URL.includes('learn/hw')){
			chrome.runtime.sendMessage({message: "HWclick"});
			console.log('HW-click');
		}else if (document.URL.includes('learn/testlist')){
			chrome.runtime.sendMessage({message: "TLclick"});
			console.log('TL-click');
		}
	},100)
}
