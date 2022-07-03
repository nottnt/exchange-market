import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { changePath, test } from '../actions/route'
const { Header, Content, Footer } = Layout;

const Home = () => (
    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={[
                    {
                        label: 'Market',
                        key: 'market',
                    }
                ]}
                onClick={({ key }) => { 
                    changePath(key) 
                }}
            />
        </Header>
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <div className="site-layout-content">Content</div>
        </Content>
        <Button onClick={() => test()}> test </Button>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            nottnt
        </Footer>
    </Layout>
);

export default Home;