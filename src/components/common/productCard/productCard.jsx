import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './productCard.css';

const Media = styled(CardMedia)`
  height: 300px;
`;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/itemdetail/${product.id}`);
  };

  return (
    <div className="product-card">
      <Media
        component="img"
        alt={product.nombre}
        height="200"
        image={product.imageUrl}
        title={product.nombre}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Categoria: {product.categoria}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${product.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleViewDetails}>
          Ver mas detalles
        </Button>
      </CardActions>
    </div>
  );
};

export default ProductCard;
