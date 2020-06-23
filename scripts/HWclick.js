//to tell, if the user has click any thing in hw-page

console.log('HWclick started');

//"body" refers to the main panel that hw is in
var body = document.getElementsByClassName('g-wrap f-cb');

if(document.URL.includes('learn/hw')){
	body[0].removeEventListener("click", HWclick);
	body[0].addEventListener("click", HWclick);
	console.log('listener added');
}

function HWclick() {
	setTimeout(function (){
		if(document.URL.includes('learn/hw')){
			chrome.runtime.sendMessage({message: "HWclick"});
			console.log('HW-click');
		}
	},100)
}
