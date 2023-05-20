/*
APPENDER.JS подключать первым.
потом "верстка"
потом "логика"
Тут функции:

appender('что', 'куда', 'placehold/type/title/src/href', 'контент/inputmode/action', 'класс', 'id');
gen('сколько' ,'чего', 'куда', 'холдер', 'контент', 'класс', 'id');
adaptive('кому', 'vh', 'vw', portr_h, portr_w);
clear('что');

appender('', '', '', '', '', '');

gen('', '', '', '', '', '', '');

adaptive('', '', '', '', '');// ЭТО УСТАНАВЛИВАТЬ В НИЗУ ФАЙЛA APPENDER.JS

clear('');

*/


if (true) { //start

    let body = document.querySelector('body');

    function appender(it = 'div', paste_to = 'body', hold = '', content = '', css_class = '', id = '') {
        let item = '';
        if (it == '') { item = document.createElement('div'); } else {
            item = document.createElement(it);
        }
        if (hold != '') { // 'placeholder/type(ol)/title(abbr)/src(img)/href(a)'
            if (it == 'input') { item.setAttribute('placeholder', hold); }
            if (it == 'ol') { item.setAttribute('type', hold); }
            if (it == 'abbr') { item.setAttribute('title', hold); }
            if (it == 'img') { item.setAttribute('src', hold); }
            if (it == 'a') { item.setAttribute('href', hold); }
        }
        if (content != '') {// 'контент/inputmode/action'
            if (it == 'input') {
                item.setAttribute('inputmode', content);
            } else if (it == 'form') { item.setAttribute('action', content); } else { item.innerHTML = content; }
        }
        if (css_class != '') { item.setAttribute('class', css_class); }
        if (id != '') { item.setAttribute('id', id); }

        if (paste_to == '') { body.append(item); } else {
            document.querySelector(paste_to).append(item);
        }
    }

    function gen(howMuch, it = 'div', paste_to = 'body', hold, content, css_class, id) {
        if (howMuch == '') { howMuch = 10 }
        for (let i = 0; i < howMuch; i++) {
            appender(it, paste_to, hold, content, css_class, id + i);
        }
    }

    function clear(node = '') {
        if (node == '') { body.innerHTML = ``; return; }
        document.querySelector(node).innerHTML = ``;
    }

    function fill_select_options(where_to_get, option_id) {
        for (let i = 0; i < where_to_get.length; i++) {
            let option = document.querySelector(`#${option_id}${i}`);
            option.setAttribute('value', where_to_get[i]);
            option.innerHTML = where_to_get[i];
        }
    }
    //---  dynamic adaptive  -------

    function adaptive(to_whom, vh, vw, portr_h, portr_w) {
        let elem = document.querySelectorAll(to_whom);
        let doc_width = document.documentElement.clientWidth;
        let doc_height = document.documentElement.clientHeight;

        for (all of elem) {
            if (doc_width > doc_height) {
                let set_w = Math.round((doc_width / 100) * vw); //(val / 10) * 10;
                let set_h = Math.round((doc_height / 100) * vh);
                all.setAttribute('width', set_w + 'px');
                all.setAttribute('height', set_h + 'px');
                all.style.width = set_w + 'px';
                all.style.height = set_h + 'px';
            } else {
                let set_w = Math.round((doc_width / 100) * portr_w); //(val / 10) * 10;
                let set_h = Math.round((doc_height / 100) * portr_h);
                all.setAttribute('width', set_w + 'px');
                all.setAttribute('height', set_h + 'px');
                all.style.width = set_w + 'px';
                all.style.height = set_h + 'px';
            }
        }

    }


    let a, b;
    let c = true;

    let timerId = setTimeout(function tick() {
        if (c) {
            a = document.documentElement.clientWidth;
        } else { b = document.documentElement.clientWidth; }
        c = !c;
        timerId = setTimeout(tick, 99);
        if (a != b) {
            adaptive('.ee', '5', '50', '5', '50');
            adaptive('#canvas', '25', '25', '30', '30');
            //ещё что-либо ...
        };
    }, 99);


} //end
