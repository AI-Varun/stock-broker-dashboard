
import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import './styles/StockList.css';

const StockList = ({ stocks, subscriptions }) => {
  const [stockData, setStockData] = useState([]);

  // Function to update stock data based on subscriptions and stocks data
  const updateStockData = () => {
    const updatedStockData = subscriptions.map((stock) => {
      const stockInfo = stocks[stock] || {};
      const currentPrice = parseFloat(stockInfo.current) || 0;
      const openingPrice = parseFloat(stockInfo.open) || currentPrice;

      // Find existing data or initialize with current values
      const existingData = stockData.find((data) => data.stock === stock);

      // Initialize high and low with existing or opening price if not initialized
      let { high, low } = existingData || {
        stock,
        price: currentPrice,
        high: openingPrice,
        low: openingPrice,
        color: '',
      };

      // Update high and low only if price exceeds or falls below current values
      if (currentPrice > high) {
        high = currentPrice;
      }
      if (currentPrice < low) {
        low = currentPrice;
      }

      // Determine row color based on conditions
      let color = '';
      if (currentPrice > (existingData?.high || openingPrice)) {
        color = 'high';
      } else if (currentPrice < (existingData?.low || openingPrice)) {
        color = 'low';
      }

      return {
        stock,
        price: currentPrice.toFixed(2),
        high: typeof high === 'number' ? high.toFixed(2) : existingData?.high, // Keep existing high if not updated
        low: typeof low === 'number' ? low.toFixed(2) : existingData?.low,    // Keep existing low if not updated
        color: color,
      };
    });

    setStockData(updatedStockData);
  };

  // Initial load and update whenever subscriptions or stocks change
  useEffect(() => {
    updateStockData();
  }, [stocks, subscriptions]);

  const data = React.useMemo(() => stockData, [stockData]);

  const columns = React.useMemo(
    () => [
      { Header: 'Stock', accessor: 'stock' },
      { Header: 'Price', accessor: 'price' },
      { Header: "Today's High", accessor: 'high' },
      { Header: "Today's Low", accessor: 'low' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="stock-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const { color } = row.original;
          let rowClass = 'stock-row';
          if (color) {
            rowClass += ` ${color}`;
          }
          return (
            <tr {...row.getRowProps()} className={rowClass}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StockList;
