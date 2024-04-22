import React, { useState } from 'react';


const CheckoutComponent = () => {
  const [pincode, setPincode] = useState('');
  const [deliveryPossible, setDeliveryPossible] = useState(false);

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const checkDeliveryPossibility = () => {
    
    if (pincode.startsWith('4')) {
      setDeliveryPossible(true);
    } else {
      setDeliveryPossible(false);
      alert('Delivery not possible to this pin code!');
    }
  };

  const handleCheckout = () => {
    
    if (deliveryPossible) {
      alert('Proceed with online payment');
     
    } else {
      alert('Cannot proceed with payment. Delivery not possible.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        
        <label className='ui left label'>Enter Pincode:</label>
        <input 
          type="text"
          value={pincode}
          onChange={handlePincodeChange}
          placeholder="Enter your pincode"
          className='ui field'
        />
        <button onClick={checkDeliveryPossibility} className='ui small yellow button'>Check Delivery</button>
        <br></br>
        
      </div>
      {deliveryPossible && (
        <div>
          <button onClick={handleCheckout} className='ui small blue button'>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutComponent;
