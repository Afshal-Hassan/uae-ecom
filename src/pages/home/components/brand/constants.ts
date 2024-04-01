import { Brand } from "./models";
import ObeyImage from "../../../../assets/obey.png";
import LevisImage from "../../../../assets/levis.png";
import AmazonImage from "../../../../assets/amazon.png";
import HandMImage from "../../../../assets/h-and-m.png";

export const BRANDS = [
    {
        image: ObeyImage
    },
    {
        image: LevisImage
    },
    {
        image: HandMImage
    },
    {
        image: AmazonImage
    },
    {
        image: "https://www.bayut.com/mybayut/wp-content/uploads/mybayut-logo-new-small2x.png"
    },
    {
        image: "https://tulsign.com/cdn/shop/files/Tulsign_black_low-res_0c9c3f28-cd88-4615-93bd-495bd84bc6db.png?v=1700318411&width=190"
    }
] satisfies Brand[];