import Products from './Products'

const ItemList = ({ products }) => {

    return (
        <div className='containerItemList'>
            {products.map(product => {
                return (
                    <Products
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        stock={product.stock}
                        title={product.title}
                        description={product.description}
                        category={product.category}
                        price={product.price}
                    />
                )
            })}
        </div>
    )

}

export default ItemList