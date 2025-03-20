const do_txt = document.getElementById('do_txt');
const _22_txt = document.getElementById('22_txt');
const _23_txt = document.getElementById('23_txt');
const posle_txt = document.getElementById('posle-txt');

const do_ = document.getElementById('do');
const _21 = document.getElementById('21');
const _22 = document.getElementById('22');
const _23 = document.getElementById('23');
const posle_ = document.getElementById('posle');


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
            margin: 8px;
            transition: all 1s ease;
        `;
    });
    const txt = document.querySelectorAll('.gg'); // Получаем все элементы с классом '55'

    txt.forEach(element => {
        element.style.cssText = `
            position: fixed;
            top: 10%;
            left: 10%;
            width: 80%;
            text-align: center;
            padding: 10px;
            width: 80%;
            background-color: none;
            font-family: sans-serif;
            opacity: 0%;
            transition: all 0.1s ease;
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