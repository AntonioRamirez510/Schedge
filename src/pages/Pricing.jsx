import React from 'react';

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <div className="pricing-plan">
        <h2>Free Plan</h2>
        <p>Basic appointment scheduling with limited features.</p>
        <p>$0/month</p>
      </div>
      <div className="pricing-plan">
        <h2>Pro Plan</h2>
        <p>Advanced features like automated reminders and calendar sync.</p>
        <p>$15/month</p>
      </div>
      <div className="pricing-plan">
        <h2>Enterprise Plan</h2>
        <p>Custom features and dedicated support.</p>
        <p>Contact us for pricing.</p>
      </div>
    </div>
  );
};

export default Pricing;
