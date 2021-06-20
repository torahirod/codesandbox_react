import React from "react";

export const ColorfullMessage = (props) => {
  // const ColorfullMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // color: color,
    // ⇓ 属性に対して、同名の変数を割り当てる場合、以下のように省略できる
    color,
    fontSize: "18px"
  };
  // ⇓ propsで受け取った値で出力する場合
  // return <p style={contentStyle}>{props.message}</p>;
  // ⇓ コンポーネントをタグとして囲って、その中に文字列を記載した場合
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfullMessage;
