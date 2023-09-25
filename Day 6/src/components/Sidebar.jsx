// MainContent.js
import React from 'react';
import '../assets/css/Sidebar.css'; // Import the CSS file
import Chart from 'chart.js/auto';
import Dashboard from './Dashboard';
import { useEffect ,useRef} from 'react';

function MainContent() {
    const chartRef = useRef(null); // Create a ref for the chart

  useEffect(() => {
    // Data for the chart (replace with your data)
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sales',
          data: [10, 20, 15, 30, 25],
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
          borderColor: 'rgba(75, 192, 192, 1)', // Border color
          borderWidth: 1,
        },
      ],
    };

    // Chart configuration
    const chartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Check if the chart already exists, and destroy it if it does
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    // Create the chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'bar', // Specify the chart type (bar, line, pie, etc.)
      data: chartData,
      options: chartOptions,
    });


    
    // Store the chart reference for later destruction
    chartRef.current = newChart;

    
  }, []);
  return (
    <div className="main-content">
        <Dashboard/>
      <h2>Welcome to the Dashboard</h2>

      {/* Sample Widget 1 */}
      <div className="widget">
        <h3>Widget 1 - Order Details</h3>
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Product A</td>
              <td>5</td>
              <td>$20.00</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Product B</td>
              <td>3</td>
              <td>$15.00</td>
              <td>$45.00</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Sample Widget 2 */}
    

      {/* Sample Chart */}
      <div className="chart">
        <h3>Chart</h3>
        <canvas id="myChart" width="400" height="200"></canvas>
      </div>

      
    
      
    
      
    </div>
  );
}

export default MainContent;