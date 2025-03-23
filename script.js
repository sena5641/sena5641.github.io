const _6_txt = document.getElementById('6_txt');
const _7_txt = document.getElementById('7_txt');
const _8_txt = document.getElementById('8_txt');
const _9_txt = document.getElementById('9_txt');
const posle_txt = document.getElementById('posle_txt');

x = 14;
off = false;
const body = document.getElementById('body');
const butt = document.getElementById('butt');
const notify = document.getElementById('notify')
const glow = document.getElementById('off');

const _6 = document.getElementById('6');
const _7 = document.getElementById('7');
const _8 = document.getElementById('8');
const _9 = document.getElementById('9');
const posle_ = document.getElementById('posle');

butt.addEventListener('click', function() {
    if (x < 28) {
        x = x + 2;
    } else {
        x = 14;
    }
    document.body.style.cssText = `font-size: ${x}px;`;

    notify.innerText = 'Размер шрифта ' + x;

    notify.style.animation = 'none';
    setTimeout(() => {
        notify.style.animation = 'notif 1.5s ease-in-out';
    }, 10);
});

glow.addEventListener('click', function() {
    off = !off;
    if (off == true) {
        setTimeout(() => {
            document.getElementById('helper').style.bottom = '-100%';
        }, 1450);
        document.getElementById('helper').style.animation = `off 1.5s`;
        glow.style.transform = "rotate(180deg)";

    };
    if (off == false) {
        setTimeout(() => {
                document.getElementById('helper').style.bottom = '0'; // Применяем анимацию снова
        }, 990);
        document.getElementById('helper').style.animation = `on 1s`;
    glow.style.transform = "rotate(0deg)";

    }
});

function resetButtons() {
    const buttons = [_6, _7, _8 , _9, posle_];
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
    const txt = [_6_txt, _7_txt, _8_txt, _9_txt, posle_txt]; 

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
        opacity: 0;
        border-radius: 10px;
        z-index: 0;
        `;
    });
}

_6.addEventListener('click', function() {
    resetButtons();
    _6.style.cssText = `
        box-shadow: 0 0 5px #fff, 0px 0px 3px rgb(4, 255, 0);
        transform: scale(1.1);
        transition: all 0.2s ease`;
    _6_txt.style.cssText = `
        position: relative;
        opacity: 1;
        top: 10%;
        left: 9%;
        border-radius: 40px 40px 40px 40px;
        transition: all 0.3s ease;
    `;
});

_7.addEventListener('click', function() {
    resetButtons();
    _7.style.cssText = `
        box-shadow: 0 0 5px #fff, 0px 0px 3px rgb(4, 255, 0);
        transform: scale(1.1);
        transition: all 0.2s ease`;
    _7_txt.style.cssText = `
        position: relative;
        opacity: 1;
        top: 10%;
        left: 9%;
        border-radius: 40px 40px 40px 40px;
        transition: all 0.3s ease;
    `;
});

_8.addEventListener('click', function() {
    resetButtons();
    _8.style.cssText = `
        box-shadow: 0 0 5px #fff, 0px 0px 3px rgb(4, 255, 0);
        transform: scale(1.1);
        transition: all 0.2s ease`;
    _8_txt.style.cssText = `
        position: relative;
        opacity: 1;
        top: 10%;
        left: 9%;
        border-radius: 40px 40px 40px 40px;
        transition: all 0.3s ease;
    `;
});

_9.addEventListener('click', function() {
    resetButtons();
    _9.style.cssText = `
        box-shadow: 0 0 5px #fff, 0px 0px 3px rgb(4, 255, 0);
        transform: scale(1.1);
        transition: all 0.2s ease`;
    _9_txt.style.cssText = `
        position: relative;
        opacity: 1;
        top: 10%;
        left: 9%;
        border-radius: 40px 40px 40px 40px;
        transition: all 0.3s ease;
    `;
});

posle_.addEventListener('click', function() {
    resetButtons();
    posle_.style.cssText = `
        box-shadow: 0 0 5px #fff, 0px 0px 3px rgb(4, 255, 0);
        transform: scale(1.1);
        transition: all 0.2s ease`;
    posle_txt.style.cssText = `
        position: relative;
        opacity: 1;
        top: 10%;
        left: 9%;
        border-radius: 40px 40px 40px 40px;
        transition: all 0.3s ease;
    `;
});