const ItemDetail = (props) => {
    const {title, price, description, category, stock, image} = props.item;

    return (
    <div className="">
        <h3>{title}</h3>
        <h3>${price}</h3>
        <h3>{description}</h3>
        <h3>Disponibles: {stock}</h3>
        <img src={`${image}`} alt={`${image}`}></img>
    </div>
    );
};

export default ItemDetail;