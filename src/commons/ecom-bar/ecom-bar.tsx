import "./ecom-bar.css";
import React from 'react';
import { Layout, Typography, Input } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
import FashionImage from "../../assets/vector.png";

const { Search } = Input;
const { Title } = Typography;

const EcomBar: React.FC = () => {
  return (
    <Layout id="ecomBar">
      <div>
        <img src={FashionImage} alt="" />
        <Title className="title">Fashion</Title>
      </div>

      <div>
        <Search id="ecomBar-search" placeholder="Search" onSearch={() => console.log("Searching...")} enterButton />

        <div id="cart-and-account-container">
          <ShoppingCartOutlined id="cart-icon-ecomBar" />
          <Title className="title">My Account</Title>
        </div>
      </div>
    </Layout>
  )
}

export default EcomBar;