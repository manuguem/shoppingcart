const data = [
    {
        "id": 1,
        "image": "https://images.samsung.com/is/image/samsung/assets/ar/home/376x376-S21.png?$376_376_PNG$",
        "title": "Monitor Gaming ASUS 165hz",
        "description": "Hardware Product",
        "category": "Monitores",
        "price": "65499",
        "stock": "10"

    },
    {
        "id": 2,
        "image": "https://images.samsung.com/is/image/samsung/assets/ar/home/AU7000160x1601.png?$160_160_PNG$",
        "title": "CoolerMaster H411R CPU Fan",
        "description": "Hardware Product",
        "category": "Coolers",
        "price": "8990",
        "stock": "5"

    },
    {
        "id": 3,
        "image": "https://images.samsung.com/is/image/samsung/assets/ar/home/WW90J5410GW160x1601.png?$160_160_PNG$",
        "title": "Corsair Crystal series 680x RGB",
        "description": "Hardware Product",
        "category": "Gabinetes",
        "price": "15000",
        "stock": "12"

    },
    {
        "id": 4,
        "image": "https://images.samsung.com/is/image/samsung/assets/ar/2108/home/Home_trending_PC_Fresh.png?$160_160_PNG$",
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