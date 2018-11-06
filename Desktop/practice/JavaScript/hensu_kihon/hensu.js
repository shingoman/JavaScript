//変数作成
var a = "aaaa";
    console.log(a);

//複数変数の定義
var c,
        d = 0,
        e;
console.log(c,d,e);

//配列の作成
var hairetu1 = [];
var hairetu2 = new Array(3);
var hairetu3 = [1,2,3];
//配列番号の読み出し
hairetu3.indexOf(1); //2
//要素の追加
hairetu3.push(4);
//要素の削除
delete hairetu3[4];
//要素の結合
hairetu3.join();
hairetu3.join("/");//文字列で出力
//配列の分割
hairetu3.slice(2);//0~2文字目
hairetu3.slice(1,3);//1~2文字目
//配列のコピー
hairetu3.concat(); //そのままコピー
hairetu3.concat("aaaa"); //配列の後ろにaaaaを追加してコピー
//要素の抽出 value = 要素の値 index = 配列の添字 array = 現在の配列
hairetu3.filter( function(value, index,array) {
    return value < 2;//配列の要素が2より小さければ表示  
})

//変数の型を表示する
var myNumber = 100; 
console.log( typeof myNumber );//Number

console.log(aaaaa);//変数の巻き上げ　変数を宣言しなくても、宣言してたことになる
var aaaa;
console.log(aaaaa); 