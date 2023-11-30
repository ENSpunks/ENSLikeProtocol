


// Replace 'YourApiKeyToken' with your actual Etherscan API key
const apiKey = 'VXSI2UCC99RMGIU1TAZADKTZ3T2Y2BTRRD';
const address = '0x231b0ee14048e9dccd1d247744d114a4eb5e8e63'; // ENS resolver address

// Function to fetch data from Etherscan API
async function fetchEtherscanData() {
  try {
    const response = await fetch(`https://api.etherscan.io/api?module=logs&action=getLogs&address=${address}&apikey=${apiKey}`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Function to display the fetched data
async function displayEtherscanFeed() {
  const etherscanFeedElement = document.getElementById('etherscanFeed');

  const logs = await fetchEtherscanData();

  if (logs.length > 0) {
    logs.forEach(log => {
      const logElement = document.createElement('div');
      logElement.textContent = JSON.stringify(log);
      etherscanFeedElement.appendChild(logElement);
    });
  } else {
    etherscanFeedElement.textContent = 'No logs found.';
  }
}

// Call the function to display the Etherscan feed when the page loads
window.onload = displayEtherscanFeed;

