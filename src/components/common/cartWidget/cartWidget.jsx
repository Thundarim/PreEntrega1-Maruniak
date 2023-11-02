import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcd38",
    },
    secondary: {
      main: '#ffc107',
    },
  },
});

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero color="primary">
        <ShoppingCartIcon color="#ffc107" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
