import React from 'react';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import ServiceMainBanner from 'containers/ServiceMainBanner/ServiceMainBanner';
//import IconExplanCard from 'containers/IconExplanCard/IconExplanCard';
import CardExplanation from 'containers/CardExplanation/CardExplanation';
import Video from 'containers/Video/Video';
import CeramicProProtectionPackage from 'containers/CeramicProProtectionPackage/CeramicProProtectionPackage';
import CeramicProProtectionOptions from 'containers/CeramicProProtectionOptions/CeramicProProtectionOptions';
import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
import ServiceInfoType4 from 'containers/ServiceInfoType4/ServiceInfoType4';
import OurWorks from 'containers/OurWorks/OurWorks';
import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';

const cardList = [
  {
    id: 1,
    type: 'arrow',
    content: [
      {
        id: 1,
        content: 'Wash and decontamination of complete car.'
      }
    ],
    iconType: 'ceramicCardWashCar',
    background: '#2D2D2D',
    fontColor: '#FFFFFF'
  },
  {
    id: 2,
    type: 'arrow',
    content: [
      {
        id: 1,
        content: 'Paint correction to remove scratches, swirls, imperfections'
      }
    ],
    iconType: 'ceramicCardPaint',
    background: '#2D2D2D',
    fontColor: '#FFFFFF'
  },
  {
    id: 3,
    type: 'arrow',
    content: [
      {
        id: 1,
        content: `Completely dry & complete solvent & alcohol wipe down to remove waxes, oils on the painted surfaces`
      }
    ],
    iconType: 'ceramicCardHand',
    background: '#2D2D2D',
    fontColor: '#FFFFFF'
  },
  {
    id: 4,
    type: 'arrow',
    content: [{ id: 1, content: 'Ceramic Coating applicationl' }],
    iconType: 'ceramicCar',
    background: '#2D2D2D',
    fontColor: '#FFFFFF'
  }
];

const ServiceCeramic = () => {
  return (
    <>
      <SubMainBanner
        title="Ceramic Coating"
        desc="Ceramic Pro"
        bgImg="assets/CeramicCoatingBannerImage.png"
      />
      <SubPageTitle
        type="img"
        imagePath="/assets/ceramicPro.png"
        title="Our Services"
        desc="Ceramic Pro"
      />
      <ServiceMainBanner>
        Ceramic Pro is a multi-layerable, clear, liquid nano-ceramic coating.
        When cured, this technology will transform itself on the surface to a
        permanent, durable yet flexible glass shield. Ceramic Pro can be
        described as an additional clear coat, with 3 times the hardness and
        self cleaning properties.
      </ServiceMainBanner>
      {/* <IconExplanCard>
        <IconExplanCard.Title />
        <IconExplanCard.Contents />
      </IconExplanCard> */}
      <CardExplanation
        title="The process of installing Ceramic Pro"
        cardList={cardList}
      ></CardExplanation>
      <Video />
      <CeramicProProtectionPackage />
      <CeramicProProtectionOptions />
      <ServiceInfoType2
        imageLabel="Ceramic prop 9h"
        imagePath="./assets/ceramicpro9h.png"
        infoList={[
          'Scratch Resistance (Above 9H)',
          'Super Hydrophobic Effect',
          'Weather & UV Resistance',
          'Thermal Resistance (up to 1200°C)',
          'Anti-Graffiti',
          'Advanced Chemical Resistance',
          'Oxidation & Corrosion Resistant',
          'High Gloss Finish'
        ]}
        mode="right"
        title="CERAMIC PRO 9H"
      >
        Ceramic Pro 9H forms a permanent bond with the surface and will not wash
        off or break down. Ceramic Pro 9H can only be removed by abrasion. It is
        a highly durable protective coating that protects your paintwork from
        damaging contaminants. 9H can be applied in multiple layers which means
        the thickness of the coating can be increased with additional layers
        allowing a thicker/harder coating with improved scratch resistance.
      </ServiceInfoType2>

      <ServiceInfoType4
        imageLabel="CERAMIC PRO TOP COAT"
        imagePath="./assets/ceramic-pro-top-coat.png"
        infoList={[
          'Super Hydrophobic Effect',
          'Weather & UV Resistance',
          'High Gloss Finish',
          'Anti-Graffiti',
          'Advanced Chemical Resistance',
          'Oxidation & Corrosion Resistant'
        ]}
        title="CERAMIC PRO TOP COAT"
      >
        Top Coat allows the surface to stay cleaner longer as dirt and grime
        will not stick to it. The super hydrophobic effect of the coating will
        cause water to bead up and roll off the surface along with any dirt and
        grime. Top Coat is usually applied over 9H in the layering process.
        Though not as durable as 9H, it can also be applied on its own. Top Coat
        also enhances gloss depth further on all painted surfaces for that wet
        look that is often hard to attain with synthetic waxes.
      </ServiceInfoType4>

      <ServiceInfoType2
        imageLabel="ceramic pro coating bottle"
        imagePath="./assets/how-to-care.png"
        infoList={[]}
        mode="right"
        subTitle="AFTER CARE"
        title="HOW TO CARE OF YOUR COATED VEHICLE"
      >
        Ceramic Pro is designed to protect your factory clear coat, to provide a
        protective shield against the elements and to keep your vehicle looking
        new always. To maximize the effects of Ceramic Pro and to ensure your
        investment is long lasting, a few basic maintenance steps should be
        taken. We recommend maintaining your coating with Ceramic Pro After
        Care.
      </ServiceInfoType2>
      <ServiceInfoType2
        imageLabel="Ceramic pro top coat"
        imagePath="./assets/service-info-image.png"
        infoList={[
          'Super Hydrophobic Effect',
          'Weather & UV Resistance',
          'High Gloss Finish',
          'Anti-Graffiti',
          'Advanced Chemical Resistance',
          'Oxidation & Corrosion Resistance'
        ]}
      >
        Ceramic Pro PPF & Vinyl was designed as a protective coating for
        polyurethane film and vinyl. It protects from contamination and
        weathering resulting in film that is much easier to clean. It also helps
        reduce vinyl’s orange peel look. The complete protection program
        involves a base coat and top coat application.
      </ServiceInfoType2>
      <OurWorks>
        <OurWorks.Title />
        <OurWorks.Contents />
      </OurWorks>
      <GetAQuoteBanner
        title={`Didn’t find what you are looking for? <br /> Contact us!`}
        linkText="Contact Us"
        styledmode="secondary"
        color="pink"
      />
    </>
  );
};

export default ServiceCeramic;
