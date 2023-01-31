
//=====画面読込時のjquery
$(window).on('load',function(){
$("#splash-logo").delay(0).fadeOut('slow');

//=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる
$("#splash").delay(1000).fadeOut('slow',function(){

$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

});
//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

});

//====================================
//====================================
//====================================
//====================================
//====================================


// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
　　var elemPos = $(this).offset().top-50; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　　$(this).addClass('fadeUp');
　　// 画面内に入ったらfadeInというクラス名を追記
　　}else{
　　　$(this).removeClass('fadeUp');
　　// 画面外に出たらfadeInというクラス名を外す
　　}
　　});


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

