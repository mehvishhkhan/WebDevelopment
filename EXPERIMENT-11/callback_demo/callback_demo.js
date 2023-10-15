function simulateAPI(callback) {
    const randomDelay = Math.floor(Math.random() * 4000) + 1000; // Random delay between 1 to 5 seconds
    setTimeout(() => {
      const data = `Data received after ${randomDelay} ms`;
      callback(null, data); // Simulate success
    }, randomDelay);
  }
// Define callback functions
function callback1(err, data) {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Callback 1:', data);
    }
  }
  
  function callback2(err, data) {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Callback 2:', data);
    }
  }
  
  function callback3(err, data) {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Callback 3:', data);
    }
  }
  
  // Make asynchronous calls with different callbacks
  simulateAPI(callback1);
  simulateAPI(callback2);
  simulateAPI(callback3);
    