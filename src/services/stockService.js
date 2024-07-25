
const SUPPORTED_STOCKS = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];

export const getStocks = () => {
    // Simulating API call
    return new Promise((resolve) => {
        setTimeout(() => {
            const stocks = {};
            SUPPORTED_STOCKS.forEach((stock) => {
                stocks[stock] = {
                    current: +(Math.random() * 1000).toFixed(2),
                    high: +(Math.random() * 1100).toFixed(2),
                    low: +(Math.random() * 900).toFixed(2),
                    symbol: stock,
                };
            });
            resolve(stocks);
        }, 500);
    });
};

export const subscribeToStock = (stockSymbol) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 500);
    });
};

export const unsubscribeFromStock = (stockSymbol) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 500);
    });
};
