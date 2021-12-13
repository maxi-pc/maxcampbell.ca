import React from "react";

export default function HeroMid(props) {
  console.log(props);
  return (
    <div className="heroMid">
      <article className="hero">{props.children}</article>
    </div>
  );
}
