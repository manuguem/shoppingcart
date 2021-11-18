import { useState } from "react";

const ItemCount = ({ stock, initial }) => {

  const [count, setCount] = useState(initial);

  const Increase = () => {
    const NewValue = count + 1
    if (NewValue <= stock) {
      setCount(NewValue)

    }
  };

  const Decrease = () => {
    const NewValue = count - 1
    if (NewValue >= initial) {
      setCount(NewValue)

    }

  }

  const addCart = () => {
    alert(`Agregaste ${count} productos`)
  }

  return (
    <>
      <div>
        <button onClick={Increase}>+</button>
        <h3>{count}</h3>
        <button onClick={Decrease}>-</button>
      </div><br />
      <button onClick={addCart}>Agregar al carrito</button>
    </>
  );
}

export default ItemCount;