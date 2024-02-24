import "./navbar.css";
import React from "react";
import "./navbar-mobile.css";
import { Layout, Typography } from "antd";
import { NAVBAR_TITLES } from "../../helpers";
import FashionImage from "../../../assets/vector.png";
import useDeviceWidth from "../../hooks/use-device-width";

const { Title } = Typography;

const Navbar: React.FC = () => {
  const deviceWidth = useDeviceWidth();

  return (
    <Layout id="navbar">
      <div>
        <img src={FashionImage} alt="" />
        <Title className="title">Fashion</Title>
      </div>

      {
        deviceWidth > 1067 ?
          <div>
            {NAVBAR_TITLES.map(title => <Title id={title.name} className="title">{title.name}</Title>)}
          </div> : null
      }
    </Layout>
  );
};

export default Navbar;
