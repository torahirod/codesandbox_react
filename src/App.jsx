// ファイルの拡張子は「.js」でも良いが、
// 「.jsx」とすることでReactのファイルであることを明示的に表せる
import React, { useEffect, useState } from "react";
// ⇓ default export の場合の呼び出し方
// import ColorfullMessage from "./components/ColorfulMessage";
import { ColorfullMessage } from "./components/ColorfulMessage";

// Reactではコンポーネントはパスカルケース（先頭文字が大文字のキャメルケース）
// で表記することが推奨されている
const App = () => {
  // 1つ目がステートの変数名、2つ目がその変数を更新するメソッドの名前
  // useStateの()内に変数の初期値を設定できる
  const [num, setNum] = useState(0);
  const [flg, setFlg] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickOnOff = () => {
    setFlg(!flg);
  };

  // ⇓ Too many re-rendersが起こる悪い例
  // setFlgが走った際にリレンダが走るので何度も繰り返しレンダリングが走ってしまう。
  // if (num % 3 === 0) {
  //   setFlg(true);
  // } else {
  //   setFlg(false);
  // }

  // useEffect関数の第2引数に空の配列を与えてあげると、
  // useEffect内は最初の1回目のレンダリングのときにしか行われない
  useEffect(() => {
    console.log("最初だけ");
  }, []);

  // 第二引数の配列の中に変数を設定すると、その変数の値が変わったときに再レンダする
  useEffect(() => {
    if (num % 3 === 0) {
      flg || setFlg(true);
    } else {
      flg && setFlg(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは3</h1>
      {/* コンポーネントに渡す引数のようなもののことをpropsという */}
      {/* <ColorfullMessage color="blue" message="元気ですか？" />
      <ColorfullMessage color="pink" message="へい元気です" /> */}
      <ColorfullMessage color="blue">元気？</ColorfullMessage>
      <ColorfullMessage color="pink">うん、元気</ColorfullMessage>
      <button onClick={onClickButton}>ボタン</button>
      <button onClick={onClickOnOff}>on/off</button>
      <p>{num}</p>
      {flg && <p>💩💩💩</p>}
    </>
  );
};

// 他のファイルでも使えるようにexport
export default App;
