//nome - vida - stamina - facção - estilo de luta - dificuldade
const warden = ['warden',130,120,'Cavaleiros','Vanguarda','Facil'];
const conquistador = ['conquistador',140,120,'Cavaleiros','Pesado','Medio'];
const pacificadora = ['pacificadora',120,120,'Cavaleiros','Assassino','Medio'];
const lawbringer = ['lawbringer',140,120,'Cavaleiros','Hibrido','Dificil'];
const centuriao = ['centuriao',120,160,'Cavaleiros','Hibrido','Dificil'];
const gladiador = ['gladiador',120,150,'Cavaleiros','Assassino','Facil'];
const prior_sombrio = ['prior sombrio',130,120,'Cavaleiros','Pesado','Facil'];
const beligerante = ['beligerante',130,130,'Cavaleiros','Vanguarda','Facil'];
const gryfo = ['gryfo',130,120,'Cavaleiros','Hibrido','Facil'];
const kensei = ['kensei',125,120,'Samurais','Vanguarda','Facil'];
const shugoki = ['shugoki',140,120,'Samurais','Pesado','Facil'];
const orochi = ['orochi',120,120,'Samurais','Assassino','Dificil'];
const nobushi = ['nobushi',120,120,'Samurais','Hibrido','Dificil'];
const shinobi = ['shinobi',120,135,'Samurais','Assassino','Dificil'];
const aramusha = ['aramusha',120,120,'Samurais','Hibrido','Dificil'];
const hitokiri = ['hitokiri',140,130,'Samurais','Pesado','Medio'];
const kyoshin = ['kyoshin',120,120,'Samurais','Hibrido','Dificil'];
const invasor = ['invasor',130,120,'Vikings','Vanguarda','Facil'];
const chefe_de_guerra = ['chefe de guerra',140,120,'Vikings','Pesado','Medio'];
const barbaro = ['barbaro',130,140,'Vikings','Assassino','Dificil'];
const valquiria = ['valquiria',120,120,'Vikings','Hibrido','Dificil'];
const celta = ['celta',125,120,'Vikings','Hibrido','Dificil'];
const shaman = ['shaman',120,120,'Vikings','Assassino','Medio'];
const jomungandr = ['jomungandr',130,140,'Vikings','Pesado','Medio'];
const tiandi = ['tiandi',130,120,'Wu lin','Vanguarda','Facil'];
const jiang_jun = ['jiang jun',140,120,'Wu lin','Pesado','Medio'];
const nuxia = ['nuxia',120,120,'Wu lin','Assassino','Dificil'];
const shaolin = ['shaolin',120,120,'Wu lin','Hibrido','Dificil'];
const zhanhu = ['zhanhu',125,120,'Wu lin','Hibrido','Medio'];
const pirata = ['pirata',130,120,'Outlanders','Hibrido','Medio'];
const medjay = ['medjay',130,120,'Outlanders','Hibrido','Dificil'];
const afeera = ['afeera',120,120,'Outlanders','Hibrido','Dificil'];
const ocelote = ['ocelote',130,120,'Outlanders','Hibrido','Medio'];

let herois = [warden,conquistador,pacificadora,lawbringer,centuriao,gladiador,prior_sombrio,beligerante,gryfo,kensei,shugoki,orochi,nobushi,shinobi,aramusha,hitokiri,kyoshin,invasor,chefe_de_guerra,barbaro,valquiria,celta,shaman,jomungandr,tiandi,jiang_jun,nuxia,shaolin,zhanhu,pirata,medjay,afeera,ocelote];


const grid = document.querySelector('.grid');
const tabela = document.querySelector('#tabela');
const at_sort = document.querySelectorAll('.atributo-sorteado');

const at_sele = document.querySelectorAll('.atributo-selecionado');
const timer = document.querySelector('.timer');

const characters = [
    'warden',
    'conquistador',
    'pacificadora',
    'lawbringer',
    'centuriao',
    'gladiador',
    'prior sombrio',
    'beligerante',
    'gryfo',
    'kensei',
    'shugoki',
    'orochi',
    'nobushi',
    'shinobi',
    'aramusha',
    'hitokiri',
    'kyoshin',
    'invasor',
    'chefe de guerra',
    'barbaro',
    'valquiria',
    'celta',
    'shaman',
    'jomungandr',
    'tiandi',
    'jiang jun',
    'nuxia',
    'shaolin',
    'zhanhu',
    'pirata',
    'medjay',
    'afeera',
    'ocelote'
]

const modal = document.querySelector('.modal');
let segundos = 3;

function startTimer (duration){
    var tempo = duration;
    timer.textContent = ": "+ tempo;
    
    intervalo = setInterval(function() {
        
        if (--tempo == -1){
            clearInterval(intervalo);
            reset();
        }
        timer.textContent = ": "+ tempo;
    }, 1000);
}


const checkAnswer = ({target}) => {
    let tentativa = target.getAttribute('data-character');
    if (tentativa == null){
        tentativa = target.parentNode.getAttribute('data-character');
    };
    

    if (sorteado[0] == tentativa){
        tabela.style.background = "green";
        document.getElementById('titulo-pagina').innerHTML = 'Você é fera!';
        setTimeout(reset,3000);
    }
    else{
        tabela.style.background = "#940000";
        vidas = vidas - 1;
        document.getElementById('tabela-titulo').innerHTML = 'VIDAS: '+ vidas;
        document.getElementById('card-resposta-certa').style.backgroundImage = `url('images/characters/${sorteado[0]}.png')`;

        if (vidas == 0){
            document.getElementById('resposta-certa').innerHTML += sorteado[0].toUpperCase();
            modal.classList.add('block');

            startTimer(3);
        }
    };

    for(i=0;i<herois.length;i++){
        if (herois[i][0]==tentativa){
            select=herois[i];
        }
    }
    for(i=0;i<at_sele.length;i++){
        at_sele[i].innerHTML=select[i+1];
        if(at_sele[i].innerHTML==at_sort[i].innerHTML){
            at_sele[i].style.color='green';
        }else{
            at_sele[i].style.color='red';
        }
    };
}
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}





const createCard = (character) => {

    const card = createElement('div', 'card');
    const image = createElement('img','images')
    const name = createElement('h2', 'names');
    

    image.style.backgroundImage = `url('images/characters/${character}.png')`;
    name.innerHTML = character;

    card.appendChild(image);
    card.appendChild(name);

    card.setAttribute('data-character', character);
    card.addEventListener('click', checkAnswer);
    

    return card;
}


function sortear(){
    let sorteio = Math.floor(Math.random()*32);
    let sorteado = herois[sorteio];
    vidas = 3;
    document.getElementById('tabela-titulo').innerHTML = 'VIDAS: '+ vidas;

    for(i=0;i<at_sort.length;i++){
        at_sort[i].innerHTML=sorteado[i+1];
    };

    return sorteado;
}

function loadGame(){
    characters.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

let vidas = 3;
loadGame();
let sorteado = sortear();
for(i=0;i<at_sort.length;i++){
    at_sort[i].innerHTML=sorteado[i+1];
};


function reset(){
    tabela.style.background = "black";
    document.getElementById('titulo-pagina').innerHTML = 'FOR HONOR GUESS CHALLENGE!';
    document.getElementById('resposta-certa').innerHTML = 'ERA: ';
    timer.innerHTML =": 3";

    sorteado = sortear();
    modal.classList.remove('block');
    for(i=0;i<at_sort.length;i++){
        at_sort[i].innerHTML=sorteado[i+1];
    };
    for(i=0;i<at_sort.length;i++){
        at_sele[i].innerHTML=0;
        at_sele[i].style.color='black';
    };
}

const reiniciar = document.getElementById('reiniciar');

reiniciar.addEventListener("click",reset);
