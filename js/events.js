// red button
function red(){
    document.body.style.backgroundColor='red';
}

// yellow button 
function makeyellow(){
    document.body.style.backgroundColor='yellow';
} 
const yellow=document.getElementById('yello-button');

yellow.onclick= makeyellow;

// blue button

const blue=document.getElementById('blue-button');
// function name na use korle(makeblue) na use korle bola anonymous.
blue.onclick= function makeblue(){
    document.body.style.backgroundColor='blue'
}

// golden-button 
const golden=document.getElementById('golden-button');
golden.addEventListener('click',makegolden)
function makegolden(){
    document.body.style.backgroundColor='goldenrod'
}
//hot pink-button

const hot=document.getElementById('hot-button');

hot.addEventListener('click',function makepink(){
    document.body.style.backgroundColor='hotpink'
})

// light-button

document.getElementById('light-button').addEventListener('click',function makelight(){
    document.body.style.backgroundColor='lightblue'
})

//event-common html use js


//direct-handel button

