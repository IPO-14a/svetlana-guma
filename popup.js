//обработка нажатия ссылок с тегом <a>
document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                //создание новой вкладки при нажании на ссылку
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});

/*Twitter.verify_credentials({install: true});           
Twitter.update("test");*/

 var datTweet = " ";
 
 $(document).ready(function () {
     $('#btnTweet').click(function (e) {
         datTweet =  $('#tweetText').val();
         /*if (datTweet.length > 140) {
             alert('Tweet should be less than 140 Chars');
         }
         else {*/
             var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(datTweet);
             window.open(twtLink,'_blank');
         //}
     });
 });