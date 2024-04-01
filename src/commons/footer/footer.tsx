import "./footer.css";
import React from 'react';
import { Layout, Typography } from 'antd';

const { Title, Text } = Typography;

const Footer: React.FC = () => {
    return (
        <Layout id='footer'>
            <div id="box-container">
                <div id='left-box' className="box">
                    <Title className="title">Fashion</Title>
                    <Text id="footer-text">Complete your style with awesome <br />
                        clothes from us.
                    </Text>
                </div>

                <div id='right-box' className="box">
                    <Title className="title">Catalogue</Title>
                    <Title className="title">Fashion</Title>
                    <Title className="title">Favourite</Title>
                    <Title className="title">Lifestyle</Title>
                </div>
            </div>
            <Title id="copyrights-footer">@ 2024 Fashion. All rights reserved.</Title>
        </Layout>
    )
}

export default Footer;