let myLabel = document.getElementById('myLabel');
let x2decreaseBtn = document.getElementById('x2decreaseBtn');
let decreaseBtn = document.getElementById('decreaseBtn');
let resetBtn = document.getElementById('resetBtn');
let increaseBtn = document.getElementById('increaseBtn');
let x2increaseBtn = document.getElementById('x2increaseBtn');

let count = 0;

x2decreaseBtn.onclick = function(){
    count -= 2;
    myLabel.innerHTML = count;
}

decreaseBtn.onclick = function(){
    count -= 1;
    myLabel.innerHTML = count; 
}

resetBtn.onclick = function(){
    count = 0;
    myLabel.innerHTML = count;
}

increaseBtn.onclick = function(){
    count += 1;
    myLabel.innerHTML = count;
}

x2increaseBtn.onclick = function(){
    count += 2;
    myLabel.innerHTML = count;
}