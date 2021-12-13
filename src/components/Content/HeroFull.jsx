import React from "react";

export default function HeroFull(props) {
  console.log(props);
  return (
    <div className="heroFull">
      <article className="hero">{props.children}</article>
    </div>
  );
}
