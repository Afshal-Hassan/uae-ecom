import "./hero.css";
import React from 'react';
import { Layout, Typography } from "antd";
import MainHeroImage from "../../../../assets/hero.svg";
import HeroImage from "../../../../assets/vector 1.svg";

const { Title } = Typography;

const Hero: React.FC = () => {
    return (
        <Layout id="hero">
            <div>
                <div>
                    <span className="title">
                        <span id="lets-bg">Let's</span>
                        <br />
                        explore
                        <br />
                        <span id="unique-bg">unique</span>
                        <br />
                        clothes
                    </span>
                    <Title className="title">Live for Influential and Innovation fashion!</Title>
                    <div id="btn-container">
                        <img src={HeroImage} alt="" />
                        <button>Shop Now</button>
                    </div>
                </div>

                <div>
                    <img src={MainHeroImage} alt="" />
                </div>
            </div>
        </Layout>
    )
}

export default Hero;