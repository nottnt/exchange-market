import React from 'react';
import { Divider, Card, Space, Typography, Image } from 'antd';
import styled from 'styled-components'
import AppLayout from '../../components/layout'
import mockNewsData from '../../mockNews.json'
import './index.scss'
const { Title, Text } = Typography;

const TextWrapper = styled.div`
    display: -webkit-box;
    max-width: 60vw;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; 
`

const Home = () => (
    <AppLayout>
        <Divider><Title level={3}>Crypto's News Today</Title></Divider>
        <Space
            direction="vertical"
            size="large"
            style={{
                display: 'flex',
            }}
        >
            {mockNewsData.map((news) => (
                <Card
                    title={news.title}
                    key={news.date}
                    extra={<a href={news.news_url} target="_SEJ" rel="noreferrer">More</a>}
                    className='news-card'
                >
                    <Space size={12}>
                        <Image
                            width={200}
                            src={news.image_url}
                            placeholder={
                                <Image
                                    preview={false}
                                    src={`${news.image_url}?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200`}
                                    width={200}
                                />
                            }
                        />
                        <TextWrapper><Text>{news.text}</Text></TextWrapper>
                    </Space>
                </Card>
            ))}
        </Space>
    </AppLayout>
);

export default Home;