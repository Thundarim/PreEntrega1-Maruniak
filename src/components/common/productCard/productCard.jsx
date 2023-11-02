import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './productCard.css';

const Media = styled(CardMedia)`
  height: 300px;
`;

const ProductCard = ({ producto }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/itemdetail/${producto.id}`);
  };

  return (
    <div className="product-card">
      <Media
        component="img"
        alt={producto.nombre}
        height="200"
        image={producto.imageUrl}
        title={producto.nombre}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {producto.nombre}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Categoría: {producto.categoria}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          Precio: ${producto.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleViewDetails}>
          Ver más detalles
        </Button>
      </CardActions>
    </div>
  );
};

export default ProductCard;
