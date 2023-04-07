let body = document.querySelector('body');
let header = document.createElement('header');
let h1 = document.createElement('h1');
h1.innerText = 'Ч И С Л О Б О Г';
header.append(h1);

let inputStrings = document.createElement('section');
let form = document.createElement('form');
form.id = 'form';
inputStrings.append(form);

for (let i = 0; i < 4; i++) {
  let inp = document.createElement('input');
  if (i == 0) { inp.setAttribute('placeholder', 'А'); }
  if (i == 1) { inp.setAttribute('placeholder', 'Б'); }
  if (i == 2) {
    inp.setAttribute('placeholder', 'Ответ')
    inp.setAttribute('readonly', 'readonly')
  }
  if (i == 3) {
    inp.setAttribute('type', 'button');
    inp.setAttribute('value', 'С Б Р О С');
  }
  inp.id = 'id' + i;
  inp.setAttribute('class', 'inputs');
  inp.setAttribute('inputmode', 'numeric');
  form.append(inp);
}

let div = document.createElement('div');

let dey_labels = ['+', '-', '*', '/', '^ &nbsp;&nbsp; А в степень Б', '&#8730; &nbsp;&nbsp; степени Б из А',
  '% &nbsp;&nbsp; остаток от А/Б ', 'А! &nbsp;&nbsp; факториал', 'sin А', 'cos А',
  'log &nbsp;&nbsp; логарифм А по осн. Б'];

let select = document.createElement("select");
select.id = "dey";
select.setAttribute('class', 'select');

form.insertBefore(select, form.id1);

for (let i = 0; i < dey_labels.length; i++) {
  let option = document.createElement("option");
  option.className = "option_dey";
  option.id = "option_" + i;
  option.setAttribute('value', dey_labels[i]);
  option.innerHTML = dey_labels[i];
  select.append(option);
}

//======
let p = document.createElement('p');
p.setAttribute('id', 'massage');
form.append(p);
//==========

body.append(header);
body.append(inputStrings);

let op1 = document.querySelector('#id0');
let dey = document.querySelector('#dey');
let op2 = document.querySelector('#id1');
let otvet = document.querySelector('#id2');
let sbros = document.querySelector('#id3');
let revolve_1 = 0;
let revolve_2 = 0;

op1.ondblclick = () => {
  if (revolve_1 % 3 == 0) { op1.value = Math.PI; Calc(); }
  if (revolve_1 % 3 == 1) { op1.value = Math.E; Calc(); }
  if (revolve_1 % 3 == 2) { op1.value = (Math.PI / 2); Calc(); }
  revolve_1++;
}
op2.ondblclick = () => {
  if (revolve_2 % 3 == 0) { op2.value = Math.PI; Calc(); }
  if (revolve_2 % 3 == 1) { op2.value = Math.E; Calc(); }
  if (revolve_2 % 3 == 2) { op2.value = (Math.PI / 2); Calc(); }
  revolve_2++;
}
sbros.onclick = () => {
  document.querySelector('#form').reset();
  otvet.placeholder = 'Ответ';
  revolve_1 = revolve_2 = 0;
}
dey.oninput = Calc; op1.oninput = Calc; op2.oninput = Calc;
otvet.onclick = put_to_RAM;

function Calc() {
  op1.value = comma_point_correct(op1.value);
  op2.value = comma_point_correct(op2.value);
  otvet.placeholder = 'Ответ';
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
      p.innerText = 'Скопировано в буфер обмена';
      setTimeout(() => { p.innerText = ''; }, 2200);
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
}

function comma_point_correct(op) {
  let container = '';
  for (let val of op) {
    if (val == ',') {
      val = '.';
      container += val;
    } else { container += val; }
  }
  return container;
}
//========================================================


function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById('id0').addEventListener('dbclick', stopDefAction, false);
document.getElementById('id1').addEventListener('dbclick', stopDefAction, false);
