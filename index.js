// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const sample = {
  property1: "やっほ～",
  property2: "こんちゃ",
  method1: () => {
    console.log("オブジェクトの中にある値がプロパティ")
  },
  method2: () => {
    alert("オブジェクトの中にある関数がメソッド")
  }
}

// console.log(sample.property1);
// console.log(sample.property2);
// sample.method1();
// sample.method2();


<!-- DOM(Document Object Model) handling -->
// document.getElementById(); //ElementはHTML要素のこと
// document.getElementsByClassName(); //Elementsは複数取る(配列になる)

// const btn1 = document.getElementById('btn01');
// const btns = document.getElementsByClassName('btn');

// console.log(btns[0]);


<!-- クリックイベント -->
// const btn1 = document.getElementById('btn01');
// btn1.addEventListener('click', function() {
//   console.log(this);
// }); //addEventListenerを使うときはアロー関数じゃなくfunction()でメソッドを作る


// const btn = document.getElementById('btn01');
// btn.addEventListener('click', function() {
//   this.classList.toggle('clicked');
//   console.log(btn);
// });


const btns = document.getElementsByClassName('btn');
for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    this.classList.toggle('clicked');
    console.log(btns[i]);
  })
}


