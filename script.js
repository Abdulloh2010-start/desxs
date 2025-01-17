document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';
document.body.style.fontFamily = '"Arimo", sans-serif';
document.body.style.backgroundColor = 'rgba(196, 181, 165, 1)';

let h = document.createElement("header");
document.body.appendChild(h);
h.style.margin = '0 auto';
h.style.width = '1440px';
h.style.height = '1000px';

let n = document.createElement("nav");
h.appendChild(n);
n.style.display = 'flex';
n.style.justifyContent = 'space-between';
n.style.alignItems = 'center';
n.style.padding = '50px 0';

let logo = document.createElement("li");
n.appendChild(logo);
logo.textContent = "Logo";
logo.style.listStyle = 'none';
logo.style.fontSize = '30px';

let ul = document.createElement("ul");
n.appendChild(ul);
ul.style.display = 'flex';
ul.style.alignItems = 'center';
ul.style.gap = '88px';

let li1 = document.createElement("li");
ul.appendChild(li1);
li1.textContent = "Home";
li1.style.listStyle = 'none';
li1.style.fontSize = '18px';

let li2 = document.createElement("li");
ul.appendChild(li2);
li2.textContent = "About us";
li2.style.listStyle = 'none';
li2.style.fontSize = '18px';

let li3 = document.createElement("li");
ul.appendChild(li3);
li3.textContent = "Portfolio";
li3.style.listStyle = 'none';
li3.style.fontSize = '18px';

let d1 = document.createElement("div");
d1.style.display = 'flex';
d1.style.gap = '10px';

let btn = document.createElement("button");
btn.textContent = "LightMode";
btn.style.width = '131px';
btn.style.height = '41px';
btn.style.borderRadius = '6px';
btn.style.backgroundColor = 'rgba(251, 152, 47, 1)';
btn.style.border = '1px solid rgba(251, 152, 47, 1)';
btn.style.color = 'black';

let btn2 = document.createElement("button");
btn2.textContent = "DarkMode";
btn2.style.width = '131px';
btn2.style.height = '41px';
btn2.style.borderRadius = '6px';
btn2.style.backgroundColor = 'black';
btn2.style.border = '1px solid black';
btn2.style.color = 'white';

d1.appendChild(btn);
d1.appendChild(btn2);
n.appendChild(d1);

let s = document.createElement("section");
h.appendChild(s);
s.style.width = '100%';
s.style.height = '500px';
s.style.display = 'flex';
s.style.justifyContent = 'space-between';
s.style.alignItems = 'center';

let p = document.createElement("div");
p.style.width = '100%';
p.style.height = '436px';
p.style.display = 'flex';
p.style.flexDirection = 'column';
p.style.justifyContent = 'space-between';

let h2 = document.createElement("h2");
h2.textContent = "Work that we produce for our clients";
h2.style.fontSize = '36px';
h2.style.fontWeight = '700';
h2.style.lineHeight = '55.87px';
h2.style.width = '420px';

let p2 = document.createElement("p");
p2.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.";
p2.style.width = '426px';
p2.style.fontSize = '16px';
p2.style.fontWeight = '500';
p2.style.lineHeight = '32px';

let a2 = document.createElement("button");
a2.textContent = "Get more details";
a2.style.width = '195px';
a2.style.height = '53px';
a2.style.background = '#FA8305';
a2.style.border = '1px solid #FA8305';
a2.style.borderRadius = '40px';
a2.style.color = 'white';

p.appendChild(h2);
p.appendChild(p2);
p.appendChild(a2);
s.appendChild(p);

let img2 = document.createElement("img");
img2.src = './Rectangle 24.png';
img2.alt = '0';
img2.style.width = '50%';
s.appendChild(img2);

function LightMode() {
    document.body.style.backgroundColor = 'rgba(196, 181, 165, 1)';
    document.body.style.color = 'black';
    btn.style.backgroundColor = 'rgba(251, 152, 47, 1)';
    btn.style.color = 'black';
    btn2.style.backgroundColor = 'black';
    btn2.style.color = 'white';
}
function DarkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
    btn2.style.backgroundColor = 'rgba(251, 152, 47, 1)';
    btn2.style.color = 'black';
}

btn.addEventListener("click", LightMode);
btn2.addEventListener("click", DarkMode);