import React from 'react'
import {
    useParams
} from "react-router-dom";
import {
    Divider,
    Space,
    Typography,
    Row,
    Col,
    Button,
} from 'antd';
import { push } from 'react-router-redux'
import { useDispatch, useSelector } from "react-redux";

import CurrencyCard from '../../components/currencyCard'
import AppLayout from '../../components/layout'
const { Title } = Typography

const Currency = () => {
    const { pairId } = useParams();
    const dispatch = useDispatch()
    const currency = useSelector(state =>
        state.market.currencies
            .find(currency => currency.symbol === pairId.toLowerCase())
    )
    const loading = useSelector(state =>
        state.app.isLoading
    )


    const handleChangeCurrency = (pairId) => {
        dispatch(push(`/market/${pairId}`))
    }

    return (
        <AppLayout>
            <Divider><Title level={3}>Quick view</Title></Divider>
            <Row
                style={{ alignItems: 'center' }}
            >
                <Col
                    xs={{
                        span: 10,
                        offset: 2,
                    }}
                    lg={{
                        span: 10,
                        offset: 2,
                    }}
                >
                    <Space
                        direction="vertical"
                        size={20}
                    >
                        <Button
                            type='primary'
                            onClick={() => handleChangeCurrency(pairId)}
                        >
                            {pairId.replace('_', '/')}
                        </Button>
                        <Button
                            type='primary'
                            onClick={() => handleChangeCurrency('BUSD_THB')}
                        >
                            BUSD/THB
                        </Button>
                        <Button
                            type='primary'
                            onClick={() => handleChangeCurrency('USDT_THB')}
                        >
                            USDT/THB
                        </Button>
                    </Space>
                </Col>
                <Col xs={{
                    span: 10,
                    offset: 2,
                }}
                    lg={{
                        span: 10,
                        offset: 2,
                    }}
                >
                    <CurrencyCard className="currency-card" {...currency} isLoading={loading} />
                </Col>
            </Row>
        </AppLayout>
    )
}


export default Currency
