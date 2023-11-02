import Cart from "../components/pages/Carrito/cart";
import ItemListContainer from "../components/pages/ItemListContainer/Itemlistcontainer";
import Checkout from "../components/pages/Checkout/checkout";
import ItemDetailContainer from "../components/pages/ItemDetailContainer/ItemDetailContainer";
export const routes = [
    {
        id: "home",
        path: "/" ,
        Element: ItemListContainer  ,
    },
    {
        id: "categoria",
        path: "/categoria/:nombrecategoria",
        Element : ItemListContainer 
    },
    {
        id: "cart",
        path: "/cart",
        Element : Cart
    },
    {
        id: "detalle",
        path: "/itemDetail/:id",
        Element : ItemDetailContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element : Checkout
    },
   
]