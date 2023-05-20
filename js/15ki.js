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
let dey_labels = ['+', '-', '*', '/', '^ &nbsp;&nbsp; А в степень Б', '&#8730; &nbsp;&nbsp; степени Б из А',
    '% &nbsp;&nbsp; остаток от А/Б ', 'А! &nbsp;&nbsp; факториал', 'sin А', 'cos А',
    'log &nbsp;&nbsp; логарифм А по осн. Б'];

let nav_labels = ['ЧИСЛОБОГ', 'закон Ома', 'Т. В. З.'];
//====================

// appender('header', '', '', '', '', '');
// appender('h1', 'header', '', 'Ч И С Л О Б О Г', '', '');

appender('header', '', '', '', '', 'header');
appender('form', '#header', '', '', '', 'form2');

appender('select', '#form2', '', '', 'select', 'nav');
gen(nav_labels.length, 'option', '#nav', '', '', '', 'nav_');
fill_select_options(nav_labels, 'nav_');

appender('section', '', '', '', '', 'sec1');

appender('form', '#sec1', '', '', '', 'form');
//-


let h1 = document.querySelector('h1');
let body = document.querySelector('body');

function gen_calc() {
    clear('#form');
    // h1 = document.querySelector('h1');
    // h1.innerHTML = 'Ч И С Л О Б О Г';
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
gen_calc();

function gen_trans() {
    clear('#form');
    // h1 = document.querySelector('h1');
    // h1.innerHTML = 'Т В З';

    appender('label', '#form', '', 'К.', '', 'ktr_');
    appender('sub', '#ktr_', '', 'тр.', '', '');
    appender('input', '#ktr_', 'соотношение числа витков', 'numeric', 'inputs trans', 'K');

    appender('label', '#form', '', 'R', '', 'loadR_');
    appender('sub', '#loadR_', '', 'нагр.', '', '');
    appender('input', '#loadR_', 'R нагрузки УНЧ., Ом', 'numeric', 'inputs trans', 'L');

    appender('label', '#form', '', 'R', '', 'anodR_');
    appender('sub', '#anodR_', '', 'анод.', '', '');
    appender('input', '#anodR_', 'R нагрузки анода, Ом', 'numeric', 'inputs trans', 'A');

    appender('', '#form', '', '', 'manage', 'manage');
    appender('button', '#manage', '', 'С Б Р О С', 'inputs', 'sbros');
    appender('button', '#manage', '', 'С Ч Ё Т', 'inputs', 'calculate_trans');

    document.querySelector('body').className = 'body_trans';
    for (all of document.querySelectorAll('option')) { all.className = 'body_trans'; }
}

function gen_ohms() {
    clear('#form');
    // h1 = document.querySelector('h1');
    // h1.innerHTML = 'З А К О Н &nbsp; О М А';

    appender('label', '#form', '', 'U', '', 'volt_');
    appender('input', '#volt_', 'напряжение', 'numeric', 'inputs ohm', 'voltage');

    appender('label', '#form', '', 'I', '', 'curr_');
    appender('input', '#curr_', 'сила тока', 'numeric', 'inputs ohm', 'current');

    appender('label', '#form', '', 'R', '', 'res_');
    appender('input', '#res_', 'сопротивление', 'numeric', 'inputs ohm', 'resist');

    appender('label', '#form', '', 'P', '', 'pow_');
    appender('input', '#pow_', 'мощность', 'numeric', 'inputs ohm', 'power');

    appender('', '#form', '', '', 'manage', 'manage');
    appender('button', '#manage', '', 'С Б Р О С', 'inputs', 'sbros');
    appender('button', '#manage', '', 'С Ч Ё Т', 'inputs', 'calculate_ohm');

    document.querySelector('body').className = 'body_ohms';
    for (all of document.querySelectorAll('option')) { all.className = 'body_ohms'; }
}

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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let revolve_1 = 0;
let revolve_2 = 0;

body.addEventListener('click', event_click);    //CLICK
function event_click(e) { //e.target.id
    e.preventDefault();
    switch (e.target.id) {
        case 'otvet': put_to_RAM(); break;
        case 'sbros':
            let sbr = document.querySelectorAll('.inputs');
            for (let val of sbr) { val.value = ''; }
            revolve_1 = revolve_2 = 0;
            break;
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
        //default: console.log(e.target);
    }
    switch (e.target.value) {
        //nav
        case nav_labels[0]: gen_calc(); revolve_1 = revolve_2 = 0; break;
        case nav_labels[1]: gen_ohms(); break;
        case nav_labels[2]: gen_trans(); break;
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

