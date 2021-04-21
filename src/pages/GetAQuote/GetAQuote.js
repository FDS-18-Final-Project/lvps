import GetAQuoteCheckbox from 'containers/GetAQuoteCheckbox/GetAQuoteCheckbox';
import GetAQuoteForm from 'containers/GetAQuoteForm/GetAQuoteForm';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import React from 'react';
import { Route } from 'react-router-dom';

const GetAQuote = () => {
  return (
    <>
      <SubMainBanner
        title="GET A QUOTE"
        desc="LVS for your car"
        bgImg="assets/CeramicCoatingBannerImage.png"
      />
      <SubPageTitle title="Get a Quote" desc="Meet Our Quality Services" />
      <GetAQuoteCheckbox />
    </>
  );
};

export default GetAQuote;
