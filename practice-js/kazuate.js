// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let c =document.querySelector('#print');
c.addEventListener('click',hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let i = document.querySelector('input[name="number"]');
    let nu =i.value;
    let yoso = Math.floor(nu);
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

    let x =(kaisu + "回目の予想" + yoso);
    let s =document.querySelector("span#x");
    s.textContent = x;

        if(kotae==yoso && kaisu<4){
            let ans =('正解です．おめでとう!');
        }

        else if(kotae>yoso && kaisu<3){
            ans =('まちがい．答えはもっと大きいですよ');
        }

        else if(kotae<yoso && kaisu<3){
            ans =('まちがい．答えはもっと小さいですよ');
        }

        else if(kaisu==3){
            ans =('まちがい．残念でした答えは'+kotae+'です．');
        }

        else if(kaisu>3){
            ans =('答えは'+kotae+'でした．すでにゲームは終わっています');
        }

    let b = document.querySelector('span#ans');
    b.textContent=ans;
    kaisu++;
}
