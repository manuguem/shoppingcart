const ItemDetail = (props) => {
    const {title, price, description, category, stock, image} = props.item;

    return (
    <div>
        <br />
        <img className="cardMobile" src={`${image}`} alt={`${image}`}></img>
        <div className="infoPosition">
        <h3>{title}</h3>
        <h3>${price}</h3>
        <h3>{description}</h3>
        <h3>{category}</h3>
        <h3>Disponibles: {stock}</h3>
        </div>
    </div>
    );
};

export default ItemDetail;