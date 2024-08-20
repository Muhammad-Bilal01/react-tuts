import React from "react";

function Child_card({ v, getValue, onChange }) {
  return (
    <div>
      <h2>Child</h2>
      <p>v</p>
      <input type="text" onChange={onChange} />
      <button onClick={() => getValue("Bilal child se mila")}>Value De</button>
    </div>
  );
}

export default Child_card;
