// import React, { useState } from 'react';
// import './styles/StockSubscription.css';

// const StockSubscription = ({ stocks, onSubscribe }) => {
//     const [selectedStock, setSelectedStock] = useState('');

//     const handleChange = (event) => {
//         setSelectedStock(event.target.value);
//     };

//     const handleSubscribe = () => {
//         if (selectedStock) {
//             onSubscribe(selectedStock);
//             setSelectedStock('');
//         }
//     };

//     return (
//         <div className="stock-subscription">
//             <select
//                 value={selectedStock}
//                 onChange={handleChange}
//                 className="stock-dropdown"
//             >
//                 <option value="" disabled>Select a stock</option>
//                 {Object.keys(stocks).map(stock => (
//                     <option key={stock} value={stock}>{stock}</option>
//                 ))}
//             </select>
//             <button onClick={handleSubscribe} className="subscribe-button">Subscribe</button>
//         </div>
//     );
// };

// export default StockSubscription;

// import React, { useState } from 'react';
// import './styles/StockSubscription.css';

// const StockSubscription = ({ stocks, onSubscribe }) => {
//     const [selectedStock, setSelectedStock] = useState('');

//     const handleChange = (event) => {
//         setSelectedStock(event.target.value);
//     };

//     const handleSubscribe = () => {
//         if (selectedStock) {
//             onSubscribe(selectedStock);
//             setSelectedStock('');
//         }
//     };

//     return (
//         <div className="stock-subscription">
//             <select
//                 value={selectedStock}
//                 onChange={handleChange}
//                 className="stock-dropdown"
//             >
//                 <option value="" disabled>Select a stock</option>
//                 {Object.keys(stocks).map(stock => (
//                     <option key={stock} value={stock}>{stock}</option>
//                 ))}
//             </select>
//             <button onClick={handleSubscribe} className="subscribe-button">Subscribe</button>
//         </div>
//     );
// };

// export default StockSubscription;

import React, { useState } from 'react';
import './styles/StockSubscription.css';

const StockSubscription = ({ stocks, onSubscribe, onUnsubscribe }) => {
    const [selectedStock, setSelectedStock] = useState('');

    const handleChange = (event) => {
        setSelectedStock(event.target.value);
    };

    const handleSubscribe = () => {
        if (selectedStock) {
            onSubscribe(selectedStock);
            setSelectedStock('');
        }
    };

    const handleUnsubscribe = () => {
        if (selectedStock) {
            onUnsubscribe(selectedStock);
            setSelectedStock('');
        }
    };

    return (
        <div className="stock-subscription">
            <select
                value={selectedStock}
                onChange={handleChange}
                className="stock-dropdown"
            >
                <option value="" disabled>Select a stock</option>
                {Object.keys(stocks).map(stock => (
                    <option key={stock} value={stock}>{stock}</option>
                ))}
            </select>
            <button onClick={handleSubscribe} className="subscribe-button">Subscribe</button>
            <button onClick={handleUnsubscribe} className="unsubscribe-button">Unsubscribe</button>
        </div>
    );
};

export default StockSubscription;
