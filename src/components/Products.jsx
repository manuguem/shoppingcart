import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("../JSON/DataList.json");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };  
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      </>
    )
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);

  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() =>setFilter(data)}>Más vendidos</button>
          <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("discos solidos")}>Discos Sólidos</button>
          <button className="btn btn-outline-dark me-2 " onClick={() =>filterProduct("Monitores")}>
            Monitores
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3">
                <div class="card h-55 text-center p-4" key={product.id}>
                  <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0,16)}</h5>
                    <p class="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    <a href="" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-shopping-cart me-1"></i>Cart</a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Elegidos del mes
            </h1>
          </div>
        </div>
        <div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
