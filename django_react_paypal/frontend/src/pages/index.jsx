import * as React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Payment } from '../components/payment';

const IndexPage = () => (
  <div>
    <PayPalScriptProvider options={{ 'client-id': process.env.PAYPAL_CLIENT_ID }}>
      <Payment />
    </PayPalScriptProvider>
  </div>
);

export default IndexPage;
