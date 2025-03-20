const do_txt = document.getElementById('do_txt');
const _22_txt = document.getElementById('22_txt');
const _23_txt = document.getElementById('23_txt');
const posle_txt = document.getElementById('posle-txt');

x = 14;
off = false;
const body = document.getElementById('body');
const butt = document.getElementById('butt');
const notify = document.getElementById('notify')
const glow = document.getElementById('glow');

const do_ = document.getElementById('do');
const _21 = document.getElementById('21');
const _22 = document.getElementById('22');
const _23 = document.getElementById('23');
const posle_ = document.getElementById('posle');

butt.addEventListener('click', function() {
    if (x < 28) {
        x = x + 2;
    } else {
        x = 14;
    }
    document.body.style.cssText = `font-size: ${x}px;`;

    notify.innerText = 'Размер шрифта ' + x;

    notify.style.animation = 'none'; // Удаляем анимацию
    setTimeout(() => {
        notify.style.animation = 'notif 1.5s ease-in-out'; // Применяем анимацию снова
    }, 10); // Небольшая задержка для перезапуска анимации
});

glow.addEventListener('click', function() {
    off = !off;
    notify.innerText = off;
    if (off == true) {
    document.getElementById('helper').style.cssText = `
    transform: right: -100%;;
    `;
    };
    if (off == false) {
    document.getElementById('helper').style.cssText = `

    `;
    }
    glow.style.animation = 'none';
    setTimeout(() => {
        glow.style.animation = 'bob 1s'; // Применяем анимацию снова
    }, 10);
});

function resetButtons() {
    const buttons = [do_, _21, _22, _23, posle_];
    buttons.forEach(button => {
        button.style.cssText = `
            background: none;
            padding: 5px;
            border: none;
            border-radius: 15px;
            color: white;
            box-shadow: 0 0 10px #fff, -2px -2px 3px #f0f, 2px 2px 3px #0ff;
            border-radius: 2vmin;
            margin: 10px;
            transition: all 1s ease;
        `;
    });
    const txt = document.querySelectorAll('.gg'); // Получаем все элементы с классом '55'

    txt.forEach(element => {
        element.style.cssText = `
        position: fixed;
        margin-top: 10%;
        padding: 1%;
        left: 0%;
        width: 80%;
        margin-bottom: 40%;
        box-shadow:
        0 0 15px #fff,
        -5px -5px 10px #f0f,
        5px 5px 10px #0ff;
        opacity: 0%;
        border-radius: 10px;
        transition: all 0.3s ease;
        `;
    });
}

do_.addEventListener('click', function() {
    // Меняем несколько стилей
    resetButtons();
    do_.style.cssText = `
        box-shadow: 0 0 10px #fff, 0px 0px 10px rgb(4, 255, 0);
        padding: 10px;
        transition: all 0.2s ease`;
    do_txt.style.cssText = `
        opacity: 100%;
        top: 10%;
        left: 9%;
        border-radius: 40px 40px 40px 40px;
        transition: all 0.3s ease;
    `;
});

_21.addEventListener('click', function() {
    resetButtons();
    _21.style.cssText = `
        box-shadow: 0 0 10px #fff, 0px 0px 10px rgb(4, 255, 0);
        padding: 10px;
        transition: all 0.2s ease`;
    _21_txt.style.cssText = `
        opacity: 100%;
        top: 10%;
        left: 9%;
        border-radius: 40px 40px 40px 40px;
        transition: all 0.3s ease;
    `;
});

_22.addEventListener('click', function() {
    resetButtons();
    _22.style.cssText = `
        box-shadow: 0 0 10px #fff, 0px 0px 10px rgb(4, 255, 0);
        padding: 10px;
        transition: all 0.2s ease`;
    _22_txt.style.cssText = `
        opacity: 100%;
        top: 10%;
        left: 9%;
        border-radius: 40px 40px 40px 40px;
        transition: all 0.3s ease;
    `;
});

_23.addEventListener('click', function() {
    resetButtons();
    _23.style.cssText = `
        box-shadow: 0 0 10px #fff, 0px 0px 10px rgb(4, 255, 0);
        padding: 10px;
        transition: all 0.2s ease`;
    _23_txt.style.cssText = `
        position: relative;
        opacity: 100%;
        top: 10%;
        left: 9%;
        border-radius: 40px 40px 40px 40px;
        transition: all 0.3s ease;
    `;
});

posle_.addEventListener('click', function() {
    resetButtons();
    posle_.style.cssText = `
        box-shadow: 0 0 10px #fff, 0px 0px 10px rgb(4, 255, 0);
        padding: 10px;
        transition: all 0.2s ease`;
    posle_txt.style.cssText = `
        opacity: 100%;
        top: 10%;
        left: 9%;
        border-radius: 40px 40px 40px 40px;
        transition: all 0.3s ease;
    `;
});