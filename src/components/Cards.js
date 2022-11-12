import React, { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/erti.jpg", stat: "" },
      { id: 2, img: "/img/ori.jpg", stat: "" },
      { id: 1, img: "/img/erti.jpg", stat: "" },
      { id: 2, img: "/img/ori.jpg", stat: "" },
      { id: 3, img: "/img/sami.jpg", stat: "" },
      { id: 3, img: "/img/sami.jpg", stat: "" },
      { id: 4, img: "/img/otxi.jpg", stat: "" },
      { id: 4, img: "/img/otxi.jpg", stat: "" },
      { id: 5, img: "/img/xuti.jpg", stat: "" },
      { id: 5, img: "/img/xuti.jpg", stat: "" },
      { id: 6, img: "/img/eqvsi.jpg", stat: "" },
      { id: 6, img: "/img/eqvsi.jpg", stat: "" },
      { id: 7, img: "/img/shvidi.jpg", stat: "" },
      { id: 7, img: "/img/shvidi.jpg", stat: "" },
      { id: 8, img: "/img/rva.jpg", stat: "" },
      { id: 8, img: "/img/rva.jpg", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      win();
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setPrev(id);
    } else {
      check(id);
    }
  }

  let win = items.every((element) => element.stat === "correct");

  return (
    <div>
      <h3 className={win ? "win" : "hidden"}>Congratulation!</h3>
      <h1 className={win ? "hidden" : ""}>Daimaxsovre</h1>
      <div className={win ? "hidden" : "container"}>
        {items.map((item, index) => (
          <Card id={index} handleClick={handleClick} key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
