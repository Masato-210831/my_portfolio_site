'use strict'

{
  //ハンバーガーメニュー
  const header = document.getElementById('header');
  const humbergarBtn = document.getElementById('humburger-btn');
  const closeBtn = document.getElementById('close-icon-container');
  const humbergarIcon = document.getElementById('humburger-icon');

  

  //スライダー関係
  if(document.getElementById('swiper')){
    const swiper = new Swiper(".swiper", {
      //表示枚数
      slidesPerView: 2,
      //ループ
      loop: true,
      centeredSlides:true,
      // ページネーション
      pagination: {
      el: ".swiper-pagination"
    },
    // ナビボタン
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
    });
  }

  
  //------------------------------
  //ハンバーガーメニュー
  //-----------------------------
//ハンバーガーボタンを押した時の挙動
humbergarBtn.addEventListener('click', () => {
  header.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  header.classList.remove('open');
});


//---------------------------------
//ページ内ジャンプスクロール
//---------------------------------
//#で始まる要素を全て抜き出す
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      //既定の挙動をキャンセル
      e.preventDefault();
      //取り出した要素のhrefの属性を取得
      let href = smoothScrollTrigger[i].getAttribute('href');
      // href =#~~なので#を除くidを持つ要素を抽出
      let targetElement = document.getElementById(href.replace('#', ''));
      //getBoundingClientRect() -> 表示領域の左上を(0, 0)として、そこからの相対位置を示す
      //topをつけると要素の上端がブラウザの上端にくると0になる(表示領域の上端になる)
      const rect = targetElement.getBoundingClientRect().top;
      //スクロールされ、上側に隠れた部分
      const offset = window.pageYOffset;
      const gap = 72;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }




}