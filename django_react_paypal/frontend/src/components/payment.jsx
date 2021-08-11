import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

export function Payment() {
  return (
    <PayPalButtons style={{ layout: 'horizontal' }} />
  );
}
