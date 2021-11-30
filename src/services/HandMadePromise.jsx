const data = [
    {
        "id": 1,
        "image": "https://http2.mlstatic.com/D_NQ_NP_947494-MPE41441193989_042020-O.jpg",
        "title": "Monitor Gaming ASUS 165hz",
        "description": "Hardware Product",
        "category": "Monitores",
        "price": "65499",
        "stock": "10"

    },
    {
        "id": 2,
        "image": "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw1a80c7d3/images/imagenes-productos/800/MK5V/MK5VXYJYPX-002.jpg?sw=513&sh=654&sm=fit",
        "title": "CoolerMaster H411R CPU Fan",
        "description": "Hardware Product",
        "category": "Coolers",
        "price": "8990",
        "stock": "5"

    },
    {
        "id": 3,
        "image": "https://www.system1it.com/wp-content/uploads/2021/02/corsair-crystal-series-680x-rgb-atx-high-airflow-tempered-glass-smart-case.png",
        "title": "Corsair Crystal series 680x RGB",
        "description": "Hardware Product",
        "category": "Gabinetes",
        "price": "15000",
        "stock": "12"

    }
]

const getProducts = new Promise((resolve) => {

    setTimeout(() => {
        resolve(data)
    }, 2000)
})

export default getProducts