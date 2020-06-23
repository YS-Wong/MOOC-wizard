
//'use strict';

var evaluated = false;

function load() {
  chrome.storage.sync.get({
    check1: false,
    check2: false,
    check4: false
  }, function(prefs) {
    check1.checked = prefs.check1;
    check2.checked = prefs.check2;
    check4.checked = prefs.check4;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "EVA-check"}, function(response) {
        if (response.value == 'not-in-EVA' || response.value == 'EVAed')
          evaluated = true;
        else
          evaluated = false;
        sync();
      });
    });
  });
}

function sync() {
//  alert('sync! evaluated = '+evaluated);
  if(evaluated){
    evaluate.disabled = evaluated;
    evaluate.style = 'opacity: 0.6; cursor: not-allowed; transition: 0s; disabled: true';
    span.style = 'opacity: 0.6; cursor: not-allowed; disabled: true';
  }
}

function savePrefs() {
  chrome.storage.sync.set({
    check1: check1.checked,
    check2: check2.checked,
    check4: check4.checked
  });
}

evaluate.onclick = function() {
  if(!evaluated){
    chrome.tabs.executeScript({file: 'scripts/Evaluate.js'});
    evaluated = true;
  }
  sync();
};

check1.onclick = function () {
  if(!evaluated && check1.checked){
    chrome.tabs.executeScript({file: 'scripts/Evaluate.js'});
    evaluated = true;
  }
  savePrefs();
  sync();
}

check2.onclick = function () {
  if(check2.checked){
    chrome.tabs.executeScript({file: 'scripts/Block.js'});
  }else{
    chrome.tabs.executeScript({file: 'scripts/Block_undo.js'});
  }
  savePrefs();
  sync();
}

check4.onclick = function () {
  if(check4.checked){
    chrome.tabs.executeScript({file: 'scripts/Reorg.js'});
  }
  savePrefs();
  sync();
}

document.addEventListener('DOMContentLoaded',load());
