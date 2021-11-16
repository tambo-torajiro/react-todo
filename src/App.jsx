import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div id="" className="input-area">
        <input placeholder="todoを入力" />
        <button>追加</button>
      </div>
      <div id="" className="incomplete-area">
        <p className="title">未完了リスト</p>
        <ul>
          <div className="list-row">
            <li>aaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>iiii</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div id="" className="complete-area">
        <p className="title">完了リスト</p>
        <ul>
          <div className="list-row">
            <li>終わったやつ</li>
            <button>元に戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
