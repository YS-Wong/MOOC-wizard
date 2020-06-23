//start up the extension

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostContains: 'icourse163.org'}
          })],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

//change webpage things
function optiPage (){
  chrome.tabs.query(
    {lastFocusedWindow: true, active: true},
    function (tabs){
      
      if (tabs[0].url.includes('icourse163.org')){
        chrome.storage.sync.get({check2: false, check4: false}, 
          function(prefs) {
            
            setTimeout(function(){
              //block things
              if (prefs.check2){
                chrome.tabs.executeScript({file: 'scripts/Block.js'});
              }else if (!prefs.check2){
                chrome.tabs.executeScript({file: 'scripts/Block_undo.js'});
              }
            },100);
            
            setTimeout(function(){
              //reorganize things
              if (tabs[0].url.includes('testlist')){
                if (prefs.check4){
                  chrome.tabs.executeScript({file: 'scripts/Reorg.js'});
                }
              }
            },1000);
            
        });
      }
    
    });
}

//change webpage things when page is loaded
chrome.webNavigation.onCompleted.addListener(function() {
    chrome.tabs.executeScript({file: 'scripts/HWclick.js'});
    optiPage();
  },{url:[{hostContains: "icourse163.org"}]}
);

//change webpage things things when switch tab
chrome.tabs.onActivated.addListener(optiPage);

//listen to click from HWclick
//and then ask the situation of the current page
//and then start Evaluate.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
      if (request.message == "HWclick"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {message: "EVA-check"}, function(response) {
            if (response.value == 'unEVAed'){
              chrome.storage.sync.get({check1: false}, 
                function(prefs) {
                  if(prefs.check1){
                    chrome.tabs.executeScript({file: 'scripts/Evaluate.js'});
                  }
                });
            }
          });
        });
      }
    
});
