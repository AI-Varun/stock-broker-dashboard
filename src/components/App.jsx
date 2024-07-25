import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './styles/App.css';

const App = () => {
    const [user, setUser] = useState(null);
    const [stocks, setStocks] = useState({
        GOOG: 0, TSLA: 0, AMZN: 0, META: 0, NVDA: 0
    });

    const springProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStocks(prevStocks => {
                const updatedStocks = { ...prevStocks };
                Object.keys(updatedStocks).forEach(stock => {
                    updatedStocks[stock] = +(Math.random() * 1000).toFixed(2);
                });
                return updatedStocks;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <animated.div className="app-container" style={springProps}>
            {user ? (
                <Dashboard user={user} stocks={stocks} setUser={setUser} />
            ) : (
                <Login setUser={setUser} />
            )}
        </animated.div>
    );
};

export default App;