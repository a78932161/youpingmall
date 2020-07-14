// (function (win, doc) {
//     let window = win;
//     let document = doc;
//     let docEl = document.documentElement;
//     let metaEl = document.createElement('meta');
//     let dpr = window.devicePixelRatio;
//
//     const agent = navigator.userAgent;
//     if (agent.indexOf('Android') > -1 || agent.indexOf('Adr') > -1) {
//         dpr = 1;
//     }
//
//     dpr = (dpr == 2 || dpr == 3) ? dpr : 1;
//     metaEl.setAttribute('name', 'viewport');
//     metaEl.setAttribute('content', `width=device-width,initial-scale=${1 / dpr},maximum-scale=${1 / dpr},
//    minimum-scale=${1 / dpr}, user-scalable=no`);
//     docEl.firstElementChild.appendChild(metaEl);
//     docEl.style.fontSize = `${docEl.clientWidth / 10}px`;
//     window.addEventListener('resize', function () {
//         docEl.style.fontSize = `${docEl.clientWidth / 10}px`;
//     });
//
//     docEl.setAttribute('data-dpr', dpr);
// })(window, document);
//
// function setRem() {
//
//     // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
//     let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
// //得到html的Dom元素
//     let htmlDom = document.getElementsByTagName('html')[0];
// //设置根元素字体大小
//     htmlDom.style.fontSize = htmlWidth / 20 + 'px';
// }
//
// // 初始化
// setRem();
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//     setRem()
// }


(function (win, doc) {
    if (!win.addEventListener) return;
    var html = document.documentElement;
    function setFont() {
        var html = document.documentElement;
        html.style.fontSize = html.clientWidth / 10  + "px";
    }
    setFont();
    setTimeout(function () {
        setFont();
    }, 300);
    doc.addEventListener('DOMContentLoaded', setFont, false);
    win.addEventListener('resize', setFont, false);
    win.addEventListener('load', setFont, false);    })(window, document);
