const btn = document.querySelector('button.btn');
const btn_text = btn.innerHTML;
btn.innerHTML = null;

const span_shadow = document.createElement('span');

const span_top = document.createElement('span');
span_top.appendChild(document.createTextNode(btn_text));

btn.appendChild(span_shadow);
btn.appendChild(span_top);

btn.firstElementChild.setAttribute('class', 'btn-shadow');
btn.lastElementChild.setAttribute('class', 'btn-top');