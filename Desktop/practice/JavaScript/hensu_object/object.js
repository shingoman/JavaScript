//オブジェクトリテラルでオブジェクト生成
var a = {};
//new演算子でオブジェクト生成
var b = new Object();

//プロパティの初期化
a = {
    name : "中村 信吾",
    age : 23
}

//表示
console.log(`${a.name}は${a.age}歳です`);
console.log(`${a['name']}は${a['age']}歳です`); //ブラケット記述法

//プロパティの追加
a.country = "Japan";
a['number'] = 1;

//プロパティの削除
delete a.country;
console.log(a);

//undefinedか？
if(a.aaa === undefined) {
    console.log("なかった1");
}

//プロパティの検索
if(!('name' in a)) {
    console.log("なかった2");
} else {
    console.log("あった");
}

//プロパティの取得 配列で表示
console.log(Object.keys(a));

Object.keys(a).forEach(function(value) {
//1文字で表示
    console.log(value);
});

////1文字で表示
for (let key in a) {
    console.log(key);
}

//オブジェクトをJSONに変換
let json = JSON.stringify(a);
console.log(json);