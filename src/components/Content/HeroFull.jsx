import React from "react";

export default function HeroFull(props) {
  console.log(props);
  return (
    <div>
      <article className="heroFull">{props.children}</article>
    </div>
  );
}
