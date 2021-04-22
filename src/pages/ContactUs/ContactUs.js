import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import ChooseUs from 'containers/ChooseUs/ChooseUs';
import React from 'react';

const ContactUs = () => {
  return (
    <>
      <SubMainBanner
        bgImg="/assets/dummyImage.png"
        title="Contact Us"
        desc="LVPS For Your Car"
      ></SubMainBanner>
      <SubPageTitle
        type="word"
        title="Contact Us"
        desc="For Your Vehicle Protection Services in North York"
      ></SubPageTitle>
      <ChooseUs></ChooseUs>
      {/* <GoogleMap></GoogleMap> */}
    </>
  );
};

export default ContactUs;
