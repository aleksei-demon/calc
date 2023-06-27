/*
Тут функции:

appender('что', 'куда', 'placehold/type/title/src/href', 'контент/inputmode/action', 'класс', 'id');
gen('сколько' ,'чего', 'куда', 'холдер', 'контент', 'класс', 'id');
adaptive('кому', 'vh', 'vw', portr_h, portr_w);
clear('что');

appender('', '', '', '', '', '');

gen('', '', '', '', '', '', '');

adaptive('', '', '', '', '');// ЭТО УСТАНАВЛИВАТЬ В НИЗУ ФАЙЛA APPENDER.JS

clear(''); 

fill_select_options(where_to_get, option_id);
*/

//====================
let dey_labels = ['&nbsp;&nbsp;+', '&nbsp;&nbsp;-', '&nbsp;&nbsp;*', '&nbsp;&nbsp;/', '^ &nbsp;&nbsp; А в степень Б', '&#8730; &nbsp;&nbsp; степени Б из А',
    '% &nbsp;&nbsp; остаток от А/Б ', 'А! &nbsp;&nbsp; факториал', 'sin &nbsp;&nbsp;А', 'cos &nbsp;&nbsp;А',
    'log &nbsp;&nbsp; логарифм А по осн. Б'];

let nav_labels = ['&nbsp;ЧИСЛОБОГ', '&nbsp;закон Ома', '&nbsp;&nbsp;Т. В. З.', '&nbsp;&nbsp;К. Д. П.'];
//====================

appender('header', '', '', '', '', 'header');
appender('form', '#header', '', '', '', 'form2');

appender('select', '#form2', '', '', 'select', 'nav');
gen(nav_labels.length, 'option', '#nav', '', '', '', 'nav_');
fill_select_options(nav_labels, 'nav_');
document.querySelector('#nav_0').setAttribute('selected', 'selected');
document.querySelector('#nav').selectedIndex = 0;

appender('section', '', '', '', '', 'sec1');

appender('form', '#sec1', '', '', '', 'form');
//---
let body = document.querySelector('body');

function gen_calc() {
    clear('#form');

    appender('input', '#form', 'А', 'numeric', 'inputs user_fill', 'op1');

    appender('select', '#form', '', '', 'select', 'dey');
    gen(dey_labels.length, 'option', '#dey', '', '', 'option_dey', 'option_');
    fill_select_options(dey_labels, 'option_');

    appender('input', '#form', 'Б', 'numeric', 'inputs user_fill', 'op2');
    appender('input', '#form', 'Ответ', '', 'inputs result_fill', 'otvet');
    document.querySelector('#otvet').setAttribute('readonly', 'readonly');
    appender('button', '#form', '', 'С Б Р О С', 'inputs', 'sbros');
    appender('p', '#form', '', '', '', 'massage');

    document.querySelector('body').className = 'body_calc';
    for (all of document.querySelectorAll('option')) { all.className = 'body_calc'; }
}

function gen_trans() {
    clear('#form');

    appender('label', '#form', '', 'К.', '', 'ktr_');
    appender('sub', '#ktr_', '', 'тр.&nbsp;&nbsp;', '', '');
    appender('input', '#ktr_', 'соотн. числа витков', 'numeric', 'inputs trans', 'K');

    appender('label', '#form', '', 'R', '', 'loadR_');
    appender('sub', '#loadR_', '', 'нагр.&nbsp;', '', '');
    appender('input', '#loadR_', 'R нагр. УНЧ., Ом', 'numeric', 'inputs trans', 'L');

    appender('label', '#form', '', 'R', '', 'anodR_');
    appender('sub', '#anodR_', '', 'анод.&nbsp;', '', '');
    appender('input', '#anodR_', 'R Анода, Ом', 'numeric', 'inputs trans', 'A');

    appender('', '#form', '', '', 'manage', 'manage');
    appender('button', '#manage', '', 'С Б Р О С', 'inputs', 'sbros');
    appender('button', '#manage', '', 'С Ч Ё Т', 'inputs', 'calculate_trans');
    appender('p', '#form', '', 'Тут можно выполнить расчёт приведённого сопротивления выходного трансформатора лампового УНЧ', '', 'explanation');

    document.querySelector('body').className = 'body_trans';
    for (all of document.querySelectorAll('option')) { all.className = 'body_trans'; }
}

function gen_ohms() {
    clear('#form');

    appender('label', '#form', '', 'U&nbsp;', '', 'volt_');
    appender('input', '#volt_', 'напряжение', 'numeric', 'inputs ohm', 'voltage');

    appender('label', '#form', '', 'I&nbsp;', '', 'curr_');
    appender('input', '#curr_', 'сила тока', 'numeric', 'inputs ohm', 'current');

    appender('label', '#form', '', 'R&nbsp;', '', 'res_');
    appender('input', '#res_', 'сопротивление', 'numeric', 'inputs ohm', 'resist');

    appender('label', '#form', '', 'P&nbsp;', '', 'pow_');
    appender('input', '#pow_', 'мощность', 'numeric', 'inputs ohm', 'power');

    appender('', '#form', '', '', 'manage', 'manage');
    appender('button', '#manage', '', 'С Б Р О С', 'inputs', 'sbros');
    appender('button', '#manage', '', 'С Ч Ё Т', 'inputs', 'calculate_ohm');
    appender('p', '#form', '', 'Введите любую пару параметров, и жмите "рассчёт".', '', 'explanation');
    document.querySelector('body').className = 'body_ohms';
    for (all of document.querySelectorAll('option')) { all.className = 'body_ohms'; }
}

function gen_kdp() {
    clear('#form');

    appender('label', '#form', '', 'длина&nbsp;&nbsp;&nbsp;', '', 'len_');
    appender('input', '#len_', 'введите значение', 'numeric', 'inputs kdp', 'len');

    appender('label', '#form', '', 'ширина&nbsp;', '', 'widt_');
    appender('input', '#widt_', 'введите значение', 'numeric', 'inputs kdp', 'widt');

    appender('label', '#form', '', 'высота&nbsp;', '', 'heig_');
    appender('input', '#heig_', 'введите значение', 'numeric', 'inputs kdp', 'heig');

    appender('label', '#form', '', 'площадь&nbsp;', '', 'area_');
    appender('input', '#area_', 'введите значение', 'numeric', 'inputs kdp', 'area');

    appender('', '#form', '', '', 'manage', 'manage');
    appender('button', '#manage', '', 'С Б Р О С', 'inputs', 'sbros');
    appender('p', '#form', '', 'Достаточно ввести один любой параметр, чтобы получить результат расчёта остальных размеров Комнаты Для Прислушивания, основанных на принципе "золотого сечения" - 1 к 1.62', '', 'explanation');

    document.querySelector('body').className = 'body_kdp';
    for (all of document.querySelectorAll('option')) { all.className = 'body_kdp'; }
}

function draw_start() {
    switch (nav.value) {
        case nav_labels[0]: gen_calc(); break;
        case nav_labels[1]: gen_ohms(); break;
        case nav_labels[2]: gen_trans(); break;
        case nav_labels[3]: gen_kdp(); break;
    }
}
draw_start();

function Calc() {
    document.querySelector('#otvet').placeholder = 'Ответ';
    let err_count = 0;
    let otv = 0;
    switch (dey.value) {
        case dey_labels[0]: otv = +op1.value + +op2.value; break;
        case dey_labels[1]: otv = +op1.value - +op2.value; break;
        case dey_labels[2]: otv = +op1.value * +op2.value; break;
        case dey_labels[3]: otv = +op1.value / +op2.value; break;
        case dey_labels[4]: otv = (+op1.value) ** (+op2.value); break;
        case dey_labels[5]: otv = (+op1.value) ** (1 / (+op2.value)); break;
        case dey_labels[6]: otv = +op1.value % +op2.value; break;
        case dey_labels[7]: otv = factorial(+op1.value); break;
        case dey_labels[8]: otv = Math.sin(+op1.value); break;
        case dey_labels[9]: otv = Math.cos(+op1.value); break;
        case dey_labels[10]: otv = Math.log(+op1.value) / Math.log(+op2.value); break;
    }
    function factorial(n) {
        err_count++;
        if (err_count < 999) {
            if (n == 0) { return 1 }
            return n ? n * factorial(n - 1) : 1;
        } else { return }
    }
    console.log(otv);
    if (otv == Infinity) { otvet.placeholder = 'Безконечность'; otv = ''; otvet.value = otv; return }
    if (otv == -Infinity) { otvet.placeholder = '-Безконечность'; otv = ''; otvet.value = otv; return }
    if (isNaN(otv)) { otv = ''; otvet.value = otv; return }

    let countZerro = 0;
    let zerroFix = false;
    for (let val of String(otv)) {
        if (val == 0) {
            countZerro++;
        } else if (countZerro > 8 || val == 0) {
            countZerro++; zerroFix = true;
        } else { countZerro = 0; }
    }
    if (zerroFix == true) {
        otvet.value = +(otv.toFixed(countZerro - 1)); console.log(countZerro);
    } else { otvet.value = otv; }

    // let count_nines = 0;
    // let nineFix = 0;
    // for (let i = 0; i < String(otv).length; i++) {
    //   if (String(otv)[i] == 9) {
    //     count_nines++; nineFix = (i - 1);
    //   } else { count_nines = 0; nineFix = 0; }
    //   if (count_nines > 8) {
    //     String(otv)[nineFix] += 1;
    //     console.log(nineFix);
    //     console.log(String(otv)[nineFix]);
    //   }
    // }
    // otvet.value = otv;
}

function put_to_RAM() {
    navigator.clipboard.writeText(otvet.value)
        .then(() => {
            // Получилось!
            document.querySelector('#massage').innerText = 'Скопировано в буфер обмена';
            setTimeout(() => { document.querySelector('#massage').innerText = ''; }, 2200);
        })
        .catch(err => {
            console.log('Something went wrong', err);
        });
}

function comma_point_correct(op) {
    let container = '';
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    for (let val of op) {
        if (val == ',') { val = '.'; }
        if (container.includes('.') && val == '.') { val = '' }
        if (numbers.includes(val)) { container += val; }
    }
    return container;
}

//----------------------------------------------------------------

function Ohm() {
    if (voltage.value != '' && current.value != '') {
        power.value = +(+voltage.value * +current.value).toFixed(3); toggle_input_cssClass(power, true); // P=U*I
        resist.value = +(+voltage.value / +current.value).toFixed(3); toggle_input_cssClass(resist, true);// R=U/I        
    } else if (voltage.value != '' && resist.value != '') {
        power.value = +(+(voltage.value ** 2) / +resist.value).toFixed(3); toggle_input_cssClass(power, true); // P=U**2/R
        current.value = +(voltage.value / +resist.value).toFixed(3); toggle_input_cssClass(current, true);  // I=U/R        
    } else if (current.value != '' && resist.value != '') {
        power.value = +(+(current.value ** 2) * +resist.value).toFixed(3); toggle_input_cssClass(power, true); // P=I**2*R
        voltage.value = +(+current.value * +resist.value).toFixed(3); toggle_input_cssClass(voltage, true); // U=I*R        
    } else if (power.value != '' && voltage.value != '') {
        resist.value = +(+(voltage.value ** 2) / +power.value).toFixed(3); toggle_input_cssClass(resist, true);// R=(U**2)/P
        current.value = +(power.value / +voltage.value).toFixed(3); toggle_input_cssClass(current, true);  // I=P/U        
    } else if (power.value != '' && current.value != '') {
        resist.value = +(power.value / +(current.value ** 2)).toFixed(3); toggle_input_cssClass(resist, true);// R=P/I**2
        voltage.value = +(power.value / +current.value).toFixed(3); toggle_input_cssClass(voltage, true); // U=P/I        
    } else if (power.value != '' && resist.value != '') {
        current.value = +((+(+power.value / +resist.value)) ** 0.5).toFixed(3); toggle_input_cssClass(current, true);  // I = sqrt P/R
        voltage.value = +((+(+power.value * +resist.value)) ** 0.5).toFixed(3); toggle_input_cssClass(voltage, true); // U=sqrt P*R
    }
}

function T_V_Z() { //KLA
    if (L.value != '' && A.value != '') {
        K.value = +(Math.sqrt(+(+A.value / +L.value))).toFixed(3); toggle_input_cssClass(K, true)//k = sqrt(A/l)       
    } else if (K.value != '' && A.value != '') {
        L.value = +(+A.value / +(K.value ** 2)).toFixed(3); toggle_input_cssClass(L, true) //l = A/(k**2)      
    } else if (L.value != '' && K.value != '') {
        A.value = +(+L.value * +(K.value ** 2)).toFixed(3); toggle_input_cssClass(A, true) //A = l*(k**2)
    }
}
function K_() {
    if (L.value != '' && K.value != '') {
        A.value = +(+L.value * +(K.value ** 2)).toFixed(3); toggle_input_cssClass(A, true) //A = l*(k**2)
    }
}
function L_() {
    if (L.value != '' && K.value != '') {
        A.value = +(+L.value * +(K.value ** 2)).toFixed(3); toggle_input_cssClass(A, true) //A = l*(k**2)
    }
}
function A_() {
    if (L.value != '' && A.value != '') {
        K.value = +(Math.sqrt(+(+A.value / +L.value))).toFixed(3); toggle_input_cssClass(K, true)//k = sqrt(A/l)       
    }
}

function len_() {
    widt.value = +(+len.value * 0.62).toFixed(2); toggle_input_cssClass(widt, true) //w = l*0.62
    heig.value = +(+widt.value * 0.62).toFixed(2); toggle_input_cssClass(heig, true) //h = w*0.62
    area.value = +(+len.value * +widt.value).toFixed(2); toggle_input_cssClass(area, true) //area = l*w
}
function widt_() {
    len.value = +(+widt.value * 1.62).toFixed(2); toggle_input_cssClass(len, true) //l = w * 1.62
    heig.value = +(+widt.value * 0.62).toFixed(2); toggle_input_cssClass(heig, true) //h=w*0.62
    area.value = +(+len.value * +widt.value).toFixed(2); toggle_input_cssClass(area, true) //area = l*w
}
function heig_() {
    widt.value = +(+heig.value * 1.62).toFixed(2); toggle_input_cssClass(widt, true) //w = h * 1.62
    len.value = +(+widt.value * 1.62).toFixed(2); toggle_input_cssClass(len, true) //l = w*1.62
    area.value = +(+len.value * +widt.value).toFixed(2); toggle_input_cssClass(area, true) //area = l*w
}
function area_() {
    // 6	3.1 = 1.9
    // 15	4.9 = 3
    // 40	8	= 5
    // 90 	12	= 7.5
    len.value = +(Math.sqrt(+area.value) * 1.265).toFixed(2); toggle_input_cssClass(len, true) //l = w*1.62
    widt.value = +(+len.value * 0.62).toFixed(2); toggle_input_cssClass(widt, true) //w = l*0.62
    heig.value = +(+widt.value * 0.62).toFixed(2); toggle_input_cssClass(heig, true) //h = w*0.62
}

function sbros() {
    let sbr = document.querySelectorAll('.inputs');
    for (let val of sbr) { val.value = ''; }
    revolve_1 = revolve_2 = 0;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let revolve_1 = 0;
let revolve_2 = 0;

body.addEventListener('click', event_click);    //CLICK
function event_click(e) { //e.target.id
    e.preventDefault();
    switch (e.target.id) {
        case 'otvet': put_to_RAM(); break;
        case 'sbros': sbros(); break;
        case 'calculate_ohm': Ohm(); break;
        case 'calculate_trans': T_V_Z(); break;
    }
}

body.addEventListener('dblclick', event_dblclick);  //DBL CLICK
function event_dblclick(e) { //e.target.id
    e.preventDefault();
    switch (e.target.id) {
        case 'op1':
            if (revolve_1 % 3 == 0) { op1.value = Math.PI; Calc(); }
            if (revolve_1 % 3 == 1) { op1.value = Math.E; Calc(); }
            if (revolve_1 % 3 == 2) { op1.value = (Math.PI / 2); Calc(); }
            revolve_1++;
            break;
        case 'op2':
            if (revolve_2 % 3 == 0) { op2.value = Math.PI; Calc(); }
            if (revolve_2 % 3 == 1) { op2.value = Math.E; Calc(); }
            if (revolve_2 % 3 == 2) { op2.value = (Math.PI / 2); Calc(); }
            revolve_2++;
            break;
    }
}



body.addEventListener('input', event_input);    //INPUT
function event_input(e) { //e.target.id
    switch (e.target.id) {
        //Calc
        case 'op1': document.querySelector('#op1').value = comma_point_correct(op1.value); Calc(); break;
        case 'op2': document.querySelector('#op2').value = comma_point_correct(op2.value); Calc(); break;
        case 'dey': Calc(); break;
        //Ohm             U, I, R, P user_fill result_fill
        case 'voltage': toggle_input_cssClass(voltage); break;
        case 'current': toggle_input_cssClass(current); break;
        case 'resist': toggle_input_cssClass(resist); break;
        case 'power': toggle_input_cssClass(power); break;
        //Transform
        case 'K': toggle_input_cssClass(K); K_(); break; //k = sqrt(A/l)
        case 'L': toggle_input_cssClass(L); L_(); break; //l = A/(k**2)
        case 'A': toggle_input_cssClass(A); A_(); break; //A = l*(k**2)        
        // K D P
        case 'len': toggle_input_cssClass(len); len_(); break;
        case 'widt': toggle_input_cssClass(widt); widt_(); break;
        case 'heig': toggle_input_cssClass(heig); heig_(); break;
        case 'area': toggle_input_cssClass(area); area_(); break;
    }
    switch (e.target.value) {
        //nav
        case nav_labels[0]: gen_calc(); revolve_1 = revolve_2 = 0; break;
        case nav_labels[1]: gen_ohms(); break;
        case nav_labels[2]: gen_trans(); break;
        case nav_labels[3]: gen_kdp(); break;
    }
}

function toggle_input_cssClass(elem, result = false) {
    elem.value = comma_point_correct(elem.value);
    if (!(elem.classList.contains('user_fill')) && !(elem.classList.contains('result_fill'))) {
        elem.classList.add('user_fill');
    } else if (!(elem.classList.contains('user_fill')) && elem.classList.contains('result_fill')) {
        elem.classList.remove('result_fill');
        elem.classList.add('user_fill');
    }

    if (result) {
        elem.classList.remove('user_fill');
        elem.classList.add('result_fill');
    }
}

