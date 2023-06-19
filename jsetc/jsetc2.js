let inp = document.querySelector('input');
let btn = document.querySelector('button');
let elem = document.querySelector('p');

btn.addEventListener('click',() => {
    let age = parseInt(inp.value);
    if(isNaN(inp.value)){
        elem.innerText = "半角数字で正しい年齢を入れてください";   
    } else  ( age < 18 )
        elem.innerText = "未成年";         
             if (6< age <=15 ){
                elem.innerText = "未成年（義務教育期間）";
    } else if( age >=65　){
        elem.innerText = "高齢者";
    }　else{
        elem.innerText = "成人";
    }
} );