import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const CartWidget = ({ cartCount }) => {
  return (
    <div>
      <Badge badgeContent={cartCount} showZero={true} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
}

export default CartWidget;
