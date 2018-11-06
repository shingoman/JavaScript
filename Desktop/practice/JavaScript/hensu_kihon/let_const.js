"use strict";
//var
var a = 1;
var a = 2; //再宣言できる
a = 3; //ok

//let
let b = 1;
//let b = 2; //再宣言できない
b = 3; //ok

//const
const c = 1;
//c = 2; //ng 再代入もできない
const obj = {
    name: '太郎'
} 
obj.name = '三郎'; //オブジェクトの再代入はできる

if(true) {
    console.log(a);
//    console.log(b); //スコープ違い
}