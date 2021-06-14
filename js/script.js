'use strict';
{

  const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});

const targetElement = document.querySelectorAll(".animationTarget");
console.log(window.innerHeight);
document.addEventListener("scroll", function() {

  for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[1].clientHeight * .4
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add('show');
    }
  }
});

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');

open.addEventListener('click', () => {
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
});

close.addEventListener('click', () => {
  modal.classList.add('hidden');
  mask.classList.add('hidden');
});

function loaded() {
  document.getElementById('loading').classList.remove('active');

}

// ロードが終わったら＋1秒後に実行

window.addEventListener("load", function () {
  setTimeout(loaded, 800);
});

// 読み込めなくても実行

setTimeout(loaded, 5000);

}