//answers questions about content on current tab
//including if it's eva-page, if it has been eva-ed

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		var comments = document.getElementsByClassName('j-textarea inputtxt');
		if(request.message == "EVA-check"){
			if (comments.length = 0){
				sendResponse({value: 'not-in-EVA'});
			}else{
				var EVAed = 'EVAed';
				var args = 1;
				//if there is a comments-area empty it's unEVAed
				while(args < comments.length){
					if(comments[args].value == ''){
						EVAed = 'unEVAed';
						break;
					}
					args++;
				}
				sendResponse({value: EVAed});
			}
		}
});

