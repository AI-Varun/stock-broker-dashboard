
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StockList from './StockList';
import StockSubscription from './StockSubscription';
import { getStocks, subscribeToStock, unsubscribeFromStock } from '../services/stockService';
import { getCurrentUser, logout } from '../services/authService';
import './styles/Dashboard.css';

const Dashboard = () => {
    const [stocks, setStocks] = useState({});
    const [subscriptions, setSubscriptions] = useState([]);
    const navigate = useNavigate();
    const user = getCurrentUser();

    useEffect(() => {
        const fetchStocksAndSubscriptions = async () => {
            const stocksData = await getStocks();
            const updatedStocks = {};

            Object.keys(stocksData).forEach(stock => {
                const currentPrice = Math.random() * 100 + 10;
                const high = currentPrice + Math.random() * 5;
                const low = currentPrice - Math.random() * 5;

                updatedStocks[stock] = {
                    current: currentPrice.toFixed(2),
                    high: high.toFixed(2),
                    low: low.toFixed(2),
                    symbol: stocksData[stock]?.symbol || ''
                };
            });

            setStocks(updatedStocks);
            const savedSubscriptions = JSON.parse(localStorage.getItem(user)) || [];
            setSubscriptions(savedSubscriptions);
        };

        fetchStocksAndSubscriptions();
        const interval = setInterval(fetchStocksAndSubscriptions, 1000);

        return () => clearInterval(interval);
    }, [user]);

    const handleSubscribe = async (stockSymbol) => {
        if (!subscriptions.includes(stockSymbol)) {
            const updatedSubscriptions = [...subscriptions, stockSymbol];
            setSubscriptions(updatedSubscriptions);
            localStorage.setItem(user, JSON.stringify(updatedSubscriptions));
            await subscribeToStock(stockSymbol);
        }
    };

    const handleUnsubscribe = async (stockSymbol) => {
        if (subscriptions.includes(stockSymbol)) {
            const updatedSubscriptions = subscriptions.filter(stock => stock !== stockSymbol);
            setSubscriptions(updatedSubscriptions);
            localStorage.setItem(user, JSON.stringify(updatedSubscriptions));
            await unsubscribeFromStock(stockSymbol);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="app-container">
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h2>Welcome, {user}</h2>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
                <StockSubscription
                    stocks={stocks}
                    onSubscribe={handleSubscribe}
                    onUnsubscribe={handleUnsubscribe}
                />
                <StockList stocks={stocks} subscriptions={subscriptions} />
            </div>
        </div>
    );
};

export default Dashboard;
