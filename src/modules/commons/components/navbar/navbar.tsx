import "./navbar.css";
import "./navbar-mobile.css";
import { Layout, Typography } from "antd";
import { NAVBAR_TITLES } from "../../helpers";
import React, { useEffect, useState } from "react";
import FashionImage from "../../../../assets/vector.png";

const { Title } = Typography;

const Navbar: React.FC = () => {
  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);
  const calculateDeviceWidth = () => setDeviceWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', calculateDeviceWidth);
    return () => window.removeEventListener('resize', calculateDeviceWidth);
  }, []);

  return (
    <Layout id="navbar">
      <div>
        <img src={FashionImage} alt="" />
        <Title className="title">Fashion</Title>
      </div>

      {
        deviceWidth > 1067 &&
        <div>
          {NAVBAR_TITLES.map(title => <Title id={title.name} className="title">{title.name}</Title>)}
        </div>
      }
    </Layout>
  );
};

export default Navbar;
