/**
 *  Строковый список, называющий элементы страницы,
 *  которыми можно поделиться в Twitter
 *  @var string array $contextList
**/
var contextsList = ["selected text","link", "image"];

/**
 *   Добавление пунктов контекстного меню в Chrome.
 *   chrome.contextMenus.create() создаёт пункты
 *   контекстного меню, которые отображаются с текстом titlex
*/
for (i = 0; i  < contextsList.length; i++) {
    var context = contextsList[i];
    var titlex = "Share " + context + " on Twitter";
    chrome.contextMenus.create( {title: titlex, contexts:[context], onclick: clickHandler, id: context});
}

/**
* Обработка пунктов контекстного меню при нажатии.
* По data.menuItemId определяется элемент, переданный
* при нажатии.
* chrome.windows.create() создаёт новое окно, в котором
* производится добавление необходимых ссылок на элементы
*
* @param string $data Название элемента
*/
function clickHandler(data) {
    //поделиться элементами
    switch(data.menuItemId) {
    case 'image' :
    chrome.windows.create({url : "https://twitter.com/intent/tweet?url=" + encodeURIComponent(data.srcUrl), type : "panel"});
    break;
    case 'selected text' :
    chrome.windows.create({ url : "https://twitter.com/intent/tweet?text=" + encodeURIComponent(data.selectionText), type : "panel"} );
    break;
    case 'link' :
    chrome.windows.create({url : "https://twitter.com/intent/tweet?url=" + encodeURIComponent(data.linkUrl), type : "panel"} );
    break;
  }
}