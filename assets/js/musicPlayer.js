const music_div = document.createElement('div')
music_div.id = 'player'   // 设置元素id
document.body.appendChild(music_div)  // 插入到body元素最后

const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    audio: [{
        name: 'Time after time ～花舞う街で～',
        artist: '倉木 麻衣',
        url: '../music/TimeAfterTime.mp3',
        cover: 'images/other/11056086_074392.jpg',
    }]
});

