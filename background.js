/**
* Выполнение функции getTweet в фоновом режиме.
* Интервал обновления - 2000 мс
**/
$(function() {
    var currentId;
    var i = 0;
    setInterval(getTweet,2000);
    
/**
* Вывод твита в уведомлении браузера.
* Переменные name, handle, ids, img, msg, image
* присваиваются путём поиска тегов в новых твитах response.
* Массив options содержит полученные из переменных данные.
* chrome.notifications.create() создаёт уведомление
*/
function getTweet() {
    $.get("https://twitter.com", function(response) {
    var xx = $(response).find('li.js-stream-item.stream-item')[0];
    //поиск необходимых атрибутов в разметке twitter
    var name = $(xx).find('div').attr('data-name');
    var handle = $(xx).find('div').attr('data-screen-name');
    var ids = $(xx).find('div').attr('data-tweet-id');
    var img = $(xx).find('img').attr('src');
    var msg = $(xx).find('p').text();
    var image = $(xx).find('.AdaptiveMedia-photoContainer img').attr('src');
    console.log(name,image);
    //назначение опций для вывода
    if (!!image) {
        var options = {
            type: "image",
            title: name+" @"+handle,
            message: msg,
            iconUrl: img,
            imageUrl: image
            }
    } else if (!image) {
            var options = {
            type: "basic",
            title: name+" @"+handle,
            message: msg,
            iconUrl: img
        }
    }

    //вывод уведомления
    if (!currentId) {
        currentId = ids;
        chrome.notifications.create("'"+i+"'", options, function(){});
    } else if (currentId === ids) {

    } else {
        currentId = ids;
        chrome.notifications.create("'"+i+"'", options ,function(){});
        i = i+1;
        }
})
} // end of getTweet

})

