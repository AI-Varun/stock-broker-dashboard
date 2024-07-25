// const SUPPORTED_STOCKS = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];

// export const getStocks = () => {
//     // Simulating API call
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const stocks = {};
//             SUPPORTED_STOCKS.forEach((stock) => {
//                 stocks[stock] = +(Math.random() * 1000).toFixed(2);
//             });
//             resolve(stocks);
//         }, 500);
//     });
// };

// export const subscribeToStock = (stockSymbol) => {
//     // Simulating API call
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ success: true });
//         }, 500);
//     });
// };
const SUPPORTED_STOCKS = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];

export const getStocks = () => {
    // Simulating API call
    return new Promise((resolve) => {
        setTimeout(() => {
            const stocks = {};
            SUPPORTED_STOCKS.forEach((stock) => {
                stocks[stock] = {
                    current: +(Math.random() * 1000).toFixed(2),
                    high: +(Math.random() * 1100).toFixed(2), // Example high
                    low: +(Math.random() * 900).toFixed(2),   // Example low
                    symbol: stock,
                };
            });
            resolve(stocks);
        }, 500);
    });
};

export const subscribeToStock = (stockSymbol) => {
    // Simulating API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 500);
    });
};

export const unsubscribeFromStock = (stockSymbol) => {
    // Simulating API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 500);
    });
};
