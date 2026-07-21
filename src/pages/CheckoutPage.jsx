import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldCheck } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    // In a real app, you would create a PaymentIntent on your server.
    // For this frontend-only MVP, we simulate a successful payment after a small delay.
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('hasAccess', 'true');
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '12px', border: '1px solid var(--glass-border)', marginBottom: '1.5rem' }}>
        <CardElement options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#fff',
              '::placeholder': { color: '#8a93ac' },
              iconColor: '#00f0ff'
            },
            invalid: { color: '#ff4d4f' }
          }
        }} />
      </div>
      
      {error && <div style={{ color: '#ff4d4f', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}

      <button type="submit" disabled={!stripe || loading} className="btn-primary" style={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
        {loading ? 'Processing...' : (
          <>
            <Lock size={18} />
            Pay $9.99 AUD
          </>
        )}
      </button>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
        <ShieldCheck size={16} />
        Secured by Stripe
      </div>
    </form>
  );
};

const CheckoutPage = () => {
  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '500px', padding: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>Complete Enrollment</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
          One-time payment of $9.99 AUD for lifetime access to AI Creator University.
        </p>

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;
