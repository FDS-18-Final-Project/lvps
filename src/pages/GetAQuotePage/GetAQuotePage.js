import GetAQuoteFormSection from 'containers/GetAQuoteFormSection/GetAQuoteFormSection';
import GetAQuote from 'pages/GetAQuote/GetAQuote';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const GetAQuotePage = () => {
  return (
    <>
      <GetAQuote />
      <GetAQuoteFormSection />
    </>
  );
};

export default GetAQuotePage;
