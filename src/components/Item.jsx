
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import { Link } from "react-router-dom";

const Item = ({ price, stock, category, image, title, id }) => {
    return (
        <Link to={`/item/${id}`}>
        <Card className="cardPosition">
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
        </Link>
    );
}

export default Item