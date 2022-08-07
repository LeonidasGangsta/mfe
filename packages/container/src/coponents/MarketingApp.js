import { mount } from 'marketing/MarketingApp';
import React, { useEffect, useRef } from 'react';

export default () => {
  const marketingRef = useRef(null);

  useEffect(() => {
    if (marketingRef.current) {
      mount(marketingRef.current)
    }
  }, [marketingRef])

  return (
    <div ref={marketingRef}></div>
  );
};
