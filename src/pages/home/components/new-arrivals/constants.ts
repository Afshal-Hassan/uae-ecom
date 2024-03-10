import { ProductCategories } from "./models";
import Rings from "../../../../assets/rings.jpg";
import Thobe from "../../../../assets/thobe.jpg";
import Sandals from "../../../../assets/sandals.jpg";

export const NEW_ARRIVALS_PRODUCT_CATEGORIES = [
    {
        img: Thobe,
        name: "Kandoora & Abayas"
    },
    {
        img: Sandals,
        name: "Shoes & Sandals"
    },
    {
        img: Rings,
        name: "Accessories & Rings"
    },
] as ProductCategories[];