/**
  *  Обработка нажатия ссылок с тегом <a>,
  *  создание новой вкладки при нажании на ссылку.
  *  document.addEventListener добавляет слушателя
  *  к ссылке с тегом <a>, массив которых
  *  определяется по document.getElementsByTagName.
  *  chrome.tabs.create() создаёт новую вкладку,
  *  получая адрес из массива links
*/
document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                $('#tweetText').val();
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});

/**
  *   Обработка нажатия на кнопку Tweet, связанной с id btnTweet,
  *   открытие введенного текста в новой вкладке,
  *   передача управления API Twitter
*/
 $(document).ready(function () {
     $('#btnTweet').click(function () {
         var datTweet = $('#tweetText').val();
         if (datTweet.length > 140) {
             alert('Tweet should be less than 140 Chars');
         }
         else {
             var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(datTweet);
             window.open(twtLink,'_blank');
         }
     });
 });