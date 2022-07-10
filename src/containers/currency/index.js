import React, { useEffect } from 'react'
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

import { fetch24HrsTicker, stopFetch24HrsTicker } from '../../actions/market'
import { setLoading } from '../../actions/app'
import CurrencyCard from '../../components/currencyCard'
import AppLayout from '../../components/layout'
const { Title } = Typography

const Currency = () => {
    const { pairId } = useParams();
    const dispatch = useDispatch()
    const currency = useSelector(state =>
        state.market.currency
    )
    const loading = useSelector(state =>
        state.app.isLoading
    )

    useEffect(() => {
        dispatch(setLoading())
        dispatch(fetch24HrsTicker(pairId))

        return () => {
            dispatch(stopFetch24HrsTicker())
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pairId])

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
                    <CurrencyCard {...currency} isLoading={loading} />
                </Col>
            </Row>
        </AppLayout>
    )
}


export default Currency
