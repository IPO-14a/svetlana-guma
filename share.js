var context = "image";
var titlex = "Share on Twitter..."
//добавление пунктов контекстного меню в Chrome
chrome.contextMenus.create( {title: titlex,contexts:[context],onclick: clickHandler,id: context});

function clickHandler(data, tab) {
	//поделиться изображением
	chrome.windows.create({url : "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl), type : "panel"});
}