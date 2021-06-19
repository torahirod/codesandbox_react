// React17からJSXのみを使用の場合、Reactのimportは不要になった
// import React from "react";
import ReactDom from "react-dom";

const App = () => {
  // jsの中でhtmlのタグを書いてreturnする方式をJSX方式という
  // return (
  //   // JSX方式で返却するタグは一番外側が1つのタグになっていないとダメ
  //   <div>
  //     <h1>こんにちは</h1>
  //     <p>こんばんは</p>
  //   </div>
  // );
  // return (
  //   // エラー回避のためだけに無駄なタグを入れたくない場合、<React.Fragment>タグ
  //   // で囲ってあげるとエラーなく返却できる
  //   <React.Fragment>
  //     <h1>こんにちは２</h1>
  //     <p>こんばんは２</p>
  //   </React.Fragment>
  // );
  return (
    // <React.Fragment>タグの代わりに空のタグ<>,</>で囲ってもエラーなく返却可
    <>
      <h1>こんにちは3</h1>
      <p>こんばんは3</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
