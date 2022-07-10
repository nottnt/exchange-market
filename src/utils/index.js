export const formatWsMsgData = (msgData) => {
    return msgData.map(msg => ({
        closePrice: msg.c,
        priceChangePercent: '0',
        symbol: msg.s,
        volume: msg.v,
    })).sort((a, b) => ('' + a.symbol).localeCompare(b.symbol))
}