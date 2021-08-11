import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

export function Payment() {
  return (
    <>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1594498257673-9f36b767286c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="Airtable product" style={{ width: '100%' }} />
        <div className="card-details">
          <h1>Airtable Product</h1>
          <p className="price">$10.00</p>
          <p>Some information about the product</p>
          <PayPalButtons style={{ layout: 'horizontal' }} />
        </div>
      </div>
    </>
  );
}
