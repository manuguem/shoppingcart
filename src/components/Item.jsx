
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({ price, stock, image, title }) => {
    return (
        <Card className="centerCard" sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="Hardware products"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Stock: {stock} unidades
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    );
}

//     return (
//         <div>
//         <h2>{title}</h2>
//         <h3>{description}</h3>
//         <div>{image}</div>
//         <p>{price}</p>
//         <p>Stock:{stock}</p>
//         </div>

//     )
// }

export default Item