var contextsList = ["selected text","link", "image", "page"];

//добавление пунктов контекстного меню в Chrome
for(i = 0; i  < contextsList.length; i++) {
	var context = contextsList[i];
	var titlex = "Share " + context + " on Twitter";
	chrome.contextMenus.create( {title: titlex,contexts:[context],onclick: clickHandler,id: context});
}

function clickHandler(data, tab) {
	//поделиться элементами
	switch(data.menuItemId) {
    case 'selected text' :
    chrome.windows.create({url : "https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText), type : "panel"} );
    break;
    case 'link' :
    chrome.windows.create({url : "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl), type : "panel"} );
    break;
    case 'image' :
    chrome.windows.create({url : "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl), type : "panel"});
    break;
    case 'page' :
    chrome.windows.create({url : "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+(data.pageUrl), type : "panel"});
    break;

  }
}