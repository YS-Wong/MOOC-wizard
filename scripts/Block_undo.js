//unhide things

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

function unhideById(args) {
	if(document.getElementById(blockIds[args])!=null)
		document.getElementById(blockIds[args]).hidden = false;
}

function unhideByClass(args1) {
	var elements = document.getElementsByClassName(blockClasses[args1]);
		var index = 0;
		while (index < elements.length){
			elements[index].hidden = false;
			index++;
		}
}

setTimeout(function(){
	
	//for log-in element
	if (document.getElementsByClassName('_2yDxF _3luH4').length > 0)
		document.getElementsByClassName('_2yDxF _3luH4')[0].style = 'width: 200px';
	if (document.getElementsByClassName('_2yDxF WTuVf').length > 0)
		document.getElementsByClassName('_2yDxF WTuVf')[0].style = 'width: 200px';
	
	var args = 0;
	while(args < blockIds.length){
		unhideById(args);
		args++;
	}
	var args1 = 0;
	while(args1 < blockClasses.length){
		unhideByClass(args1)
		args1++;
	}
	
},50);
