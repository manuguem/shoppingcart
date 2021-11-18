const data = [
    {
        "id": 1,
        "image": "https://manuguem.github.io/pcstuff-project/img/imagenes/monitorasus2.png",
        "title": "Monitor Gaming ASUS 165hz",
        "description": "Hardware Product",
        "category": "Monitores",
        "price": "65499",
        "stock": "10"

    },
    {
        "id": 2,
        "image": "https://manuguem.github.io/JavaScriptCH/img/imagenes/Hyper%20H411R.png",
        "title": "CoolerMaster H411R CPU Fan",
        "description": "Hardware Product",
        "category": "Coolers",
        "price": "8990",
        "stock": "5"

    },
    {
        "id": 3,
        "image": "https://manuguem.github.io/JavaScriptCH/img/imagenes/corsaircarbide.png",
        "title": "Corsair 4000D Airflow",
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