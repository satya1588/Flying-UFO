function socialScoreShare() {
  let left = (screen.width / 2) - (250 / 2);
  let top = (screen.height / 2) - (450 / 2);

  caption = 'Flappy Ufo';
  title = Ufo.score + ' points!!!';
  description = 'I just scored ' + Ufo.score + ' points on Flappy Ufo. Can you beat it?';

  FB.ui({
    method: 'share',
    href: 'https://jerilseb.github.io/flappy-Ufo/',
    quote: description,
    hashtag: '#flappyUfo'
  }, function (response) { });

  //window = window.open('https://www.facebook.com/dialog/share?app_id=1075842552518705&href=https://jerilseb.github.io/flappy-Ufo/&picture=https://jerilseb.github.io/flappy-Ufo/src/sprites/thumbnail.png&title=' + title + '&caption=' + caption + '&description=' + description + '&hashtag=#flappyUfo', '_blank', 'width=250, height=250, top=' + top + ', left=' + left);
}
