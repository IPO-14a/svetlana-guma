var contextsList = ["selected text","link", "image", "page"];

//добавление пунктов контекстного меню в Chrome
for (i = 0; i  < contextsList.length; i++) {
    var context = contextsList[i];
    var titlex = "Share " + context + " on Twitter";
    chrome.contextMenus.create( {title: titlex, contexts:[context], onclick: clickHandler, id: context});
}

//обработка пунктов контекстного меню
function clickHandler(data, tab) {
    //поделиться элементами
    switch(data.menuItemId) {
    case 'image' :
    chrome.windows.create({url : "https://twitter.com/intent/tweet?url=" + encodeURIComponent(data.srcUrl), type : "panel"});
    break;
  }
}