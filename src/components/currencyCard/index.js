import React from 'react'
import { Card, Skeleton } from 'antd';
import './index.scss';

const index = ({
    symbol = '',
    closePrice = '',
    volume = '',
    className,
    isLoading = false,
    onClick = () => { }
}) => {
    return (
        <>
            {
                isLoading &&
                <Skeleton />
            }
            {
                !isLoading &&
                <Card className={className} onClick={onClick}>
                    <p>{symbol.replace('_', '/').toUpperCase()}</p>
                    <p>฿{closePrice}</p>
                    <p>Volume: {volume}</p>
                </Card>
            }
        </>
    )
}

export default index