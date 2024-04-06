//=====画面読込時のjquery
$(window).on('load',function(){
$("#splash-logo").delay(0).fadeOut('slow');

//=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる
$("#splash").delay(1000).fadeOut('slow',function(){

$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

});
//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

});