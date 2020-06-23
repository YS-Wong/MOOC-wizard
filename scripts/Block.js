//hide things

var blockIds = [
	"j-self-content", 
	"j-plan-panle", 
	"j-side-operation", 
	"j-sidebar", 
	"j-activityBanner", 
	"j-footer", 
	"j-activityRightBanner", 
	"j-learningState-container", 
	"j-courseshare", 
	"wxItemTab", 
	"appTab", 
	"j-share", 
	"j-comment-link", 
];

var blockClasses = [
	"privacy-info-container", 
	"sidebar-box f-fl", 
	"c-recImg-container", 
	"u-sidebar-container", 
	"e-hover-source u-navLogin-course", 
	"u-navLogin-school", 
	"j-kaoyan-link u-navLogin-kaoyan m-head-right-more e-hover-source", 
	"ux-modal bind-phone-modal ux-modal-fadeIn", 
	"ux-modal_dialog", 
	"channel-panel", 
	"f-fc6 padding-top-5", 
	"tag f-f0 f-fl ga-click", 
	"j-askt f-fr", 
	"u-cert u-cert2 f-fc6 f-fl one-pan-link-mark", 
	"top f-pr", 
	"_2w7iV", 
	"_1OE97", 
	"_2_XXS", 
	"_3a1bd", 
	"_3H5kv", 
	"_1gIRH", 
	"nlrFs", 
	"bdVCh", 
	"_2reKA", 
	"dW-cE", 
	"_3a1bd", 
	"_3x6Jj", 
	"nlrFs", 
	"_3N81_", 
	"_1n6gQ", 
	"_1U0Cy"
];

function hideById (args) {
	if(document.getElementById(blockIds[args])!=null)
		document.getElementById(blockIds[args]).hidden = true;
}

function hideByClass (args1) {
	var elements = document.getElementsByClassName(blockClasses[args1]);
	var index = 0;
	while (index < elements.length){
		elements[index].hidden = true;
		index++;
	}
}

function block () {
	var args = 0;
	while(args < blockIds.length){
		hideById(args);
		args++;
	}
	var args1 = 0;
	while(args1 < blockClasses.length){
		hideByClass(args1)
		args1++;
	}
}

function allBlocked () {
	var index = 0;
	while (index < blockIds.length){
		if (document.getElementById(blockIds[index])==null
			||document.getElementById(blockIds[index]).hidden==true)
			index++;
		else
			return false;
	}
	var index1 = 0;
		while (index1 < blockClasses.length){
			if (document.getElementsByClassName(blockClasses[index1]).length==0
				||document.getElementsByClassName(blockClasses[index1])[0].hidden==true)
				index1++;
			else
				return false;
		}
	return true;
}

//independent home blocker with customized timer
function blockHome (timer){
	block();
	window.scrollTo(0,document.body.scrollHeight);
	setTimeout(function(){
		if(!allBlocked())blockHome(timer);
		window.scrollTo(0,0);
	},timer);
}

//block
setTimeout(function(){
	
	//for log-in element
	if (document.getElementsByClassName('_2yDxF _3luH4').length > 0)
		document.getElementsByClassName('_2yDxF _3luH4')[0].style = 'width: 1200px';
	if (document.getElementsByClassName('_2yDxF WTuVf').length > 0)
		document.getElementsByClassName('_2yDxF WTuVf')[0].style = 'width: 1200px';
	
	block();
	
	if(document.URL.endsWith("www.icourse163.org/")){
		blockHome(1);
		blockHome(100);
		blockHome(1000);
		blockHome(2000);
	}
	
},5);
