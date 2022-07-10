import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { push } from 'react-router-redux'
import { FaBitcoin, FaGithub } from 'react-icons/fa';
import { Layout, Menu, Space, Typography } from 'antd';

import './index.scss'
const { Header, Content, Footer } = Layout;
const { Text } = Typography

const Index = ({ children }) => {
    const dispatch = useDispatch()

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" >
                    <Link to={'/'}>
                        <FaBitcoin size={42} />
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items={[
                        {
                            label: 'Market',
                            key: 'market',
                        }
                    ]}
                    onClick={({ key: path }) => {
                        dispatch(push(`/${path}`))
                    }}
                />
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <div className="site-layout-content">
                    {children}
                </div>

            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                <a href="https://github.com/nottnt" target="_SEJ" rel="noreferrer"><Space size={6}><Text className={'footer-text'}>Nottnt</Text><FaGithub /></Space></a>
            </Footer>
        </Layout>
    )
}

export default Index
