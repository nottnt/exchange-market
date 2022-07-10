import React, { useState } from 'react';
import {
    Divider,
    Space,
    Typography,
    Row,
    Col,
    Table,
    Input,
    Empty,
    Skeleton
} from 'antd';
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { push } from 'react-router-redux'
import { FaSearch } from 'react-icons/fa';

import AppLayout from '../../components/layout'
import CurrencyCard from '../../components/currencyCard'
import './index.scss'
const { Title, Text } = Typography;

const InputWrapper = styled.div`
    max-width: 17rem;
    min-width: 10rem;
    margin: 1rem 0 1rem 0;
    float: right;
`

const Market = () => {
    const dispatch = useDispatch()
    const currencies = useSelector((state) => state.market.currencies)
    const [currenciesFiltered, setCurrenciesFiltered] = useState(null)
    const loading = useSelector(state =>
        state.app.isLoading
    )
    const topThreeHighVol = useSelector((state) => {
        if (state.market.currencies) {
            return state.market.currencies.sort((a, b) => a.volume - b.volume).reverse().filter((currency, index) => index < 3)
        }

        return [{}, {}, {}]
    })

    const columns = [
        {
            title: 'Name',
            dataIndex: 'symbol',
            key: 'symbol',
            sorter: (a, b) => a.symbol.charCodeAt(0) - b.symbol.charCodeAt(0),
            render: (text) => {
                return text.split('_')[0].toUpperCase()

            },
        },
        {
            title: 'Price',
            dataIndex: 'closePrice',
            key: 'closePrice',
            sorter: (a, b) => a.closePrice - b.closePrice,
            render: (text, record) => {
                return <Text>฿{text}</Text>
            }
        },
        {
            title: '24h Volume',
            dataIndex: 'volume',
            key: 'volume',
            sorter: (a, b) => a.volume - b.volume,
        },
    ];

    const onSearch = (event) => {
        if (event.target.value) {
            const filteredData = currencies.filter(currency => currency.symbol.includes(event.target.value.toLowerCase()))
            setCurrenciesFiltered(filteredData)
        } else {
            setCurrenciesFiltered(null)
        }
    }

    const goToCurrencyPage = (data) => {
        dispatch(push(`market/${data.symbol.toUpperCase()}`))
    }

    return (
        <AppLayout>
            <Divider><Title level={3}>Today’s Cryptocurrencies Price</Title></Divider>
            <Space
                direction="vertical"
                size={60}
                style={{
                    display: 'flex',
                }}
            >
                <Row>
                    <Divider><Title level={5}>High Volume 24h</Title></Divider>
                    {
                        topThreeHighVol.map((list, index) => (
                            <Col
                                xs={{
                                    span: 6,
                                    offset: !index ? 1 : 2,
                                }}
                                lg={{
                                    span: 6,
                                    offset: !index ? 1 : 2,
                                }}
                                key={list.symbol || index}
                            >
                                <CurrencyCard
                                    className="currency-card"
                                    {...list}
                                    onClick={() => {
                                        goToCurrencyPage(list)
                                    }}
                                    isLoading={loading}
                                />
                            </Col>
                        ))
                    }
                </Row>
                <Row justify="center">
                    <Divider><Title level={5}>All</Title></Divider>

                    <Col
                        xs={{
                            span: 22,
                        }}
                        lg={{
                            span: 22,
                        }}
                    >
                        <InputWrapper>
                            <Input size="large" className='search-coin' placeholder="Search Coin Name" onChange={onSearch} prefix={<FaSearch />} />
                        </InputWrapper>
                    </Col>
                    <Col
                        xs={{
                            span: 24,
                        }}
                        lg={{
                            span: 22,
                        }}
                    >
                        <Table
                            className="currencies-table"
                            rowKey="symbol"
                            dataSource={currenciesFiltered || currencies}
                            columns={columns}
                            onRow={(record, rowIndex) => {
                                return {
                                    onClick: event => {
                                        goToCurrencyPage(record)
                                    },
                                };
                            }}
                            locale={{
                                emptyText: loading ? <Skeleton /> : <Empty />
                            }}
                        />
                    </Col>
                </Row>
            </Space>
        </AppLayout>
    );
}

export default Market;