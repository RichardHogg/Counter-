let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addcountBtn');
const lowerCount = document.querySelector('#lowercountBtn');

let count = 0;

addCount.addEventListener('click',incrementCounter);
lowerCount.addEventListener('click',decrementCounter);


function incrementCounter (){
  count++;
  counter.innerHTML = count;
  if(counter.innerHTML > '0'){
    counter.style.color = '#e80003';
  }
  else if(counter.innerHTML ==='0'){
    counter.style.color = '#fff';
  }
  counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:800,fill:'forwards'});
}


function decrementCounter (){
  count--;
  counter.innerHTML = count;
  if(counter.innerHTML < '0'){
    counter.style.color = '#0000e8';
  }
  else if(counter.innerHTML ==='0'){
    counter.style.color = '#fff';
  }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:800,fill:'forwards'});
}
