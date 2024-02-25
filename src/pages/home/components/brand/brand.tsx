import "./brand.css";
import React from 'react';
import "./brand-mobile.css";
import { Carousel } from 'antd';
import { BRANDS } from './constants';
import useDeviceWidth from "../../../../helpers/hooks";

const Brand: React.FC = () => {
    const deviceWidth = useDeviceWidth();

    return (
        <Carousel dots={false} autoplay slidesToShow={deviceWidth < 500 ? 1 : 4} id='brand'>
            {BRANDS.map(brand => <div key={brand.image}><img src={brand.image} alt='' id="brand-img" /></div>)}
        </Carousel>
    )
}

export default Brand