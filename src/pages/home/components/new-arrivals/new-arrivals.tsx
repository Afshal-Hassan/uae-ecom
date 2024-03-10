import React from 'react';
import "./new-arrivals.css";
import { Layout, Typography } from 'antd';
import { NEW_ARRIVALS_PRODUCT_CATEGORIES } from './constants';

const { Title } = Typography;

const NewArrivals: React.FC = () => {
    return (
        <Layout id='new-arrivals'>

            <Title className='title'>New Arrivals</Title>
            <div>
                {NEW_ARRIVALS_PRODUCT_CATEGORIES.map(category => {
                    return <div className='category-card'>
                        <img src={category.img} alt='' />
                        <Title className='title'>{category.name}</Title>
                        <Title className='explore-now'>Explore Now!</Title>
                    </div>
                })}
            </div>
        </Layout>
    )
}

export default NewArrivals;