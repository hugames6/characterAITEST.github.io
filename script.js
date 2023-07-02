let tg = window.Telegram.WebApp;
let mario = document.getElementById('mario');
let einstein = document.getElementById('einstein');
let info = ' ';
tg.expand();

mario.addEventListener('click', function(){
    info = 'mario';
});
einstein.addEventListener('click', function(){
    info = 'einstein';
});
tg.sendData(info);
tg.close();