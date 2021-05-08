import React, { Suspense } from 'react';
import { ceramicCardList } from 'data/Data';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
// import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
// import CardExplanation from 'containers/CardExplanation/CardExplanation';
// import Video from 'containers/Video/Video';
// import CeramicProProtectionPackage from 'containers/CeramicProProtectionPackage/CeramicProProtectionPackage';
// import CeramicProProtectionOptions from 'containers/CeramicProProtectionOptions/CeramicProProtectionOptions';
// import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
// import ServiceInfoType4 from 'containers/ServiceInfoType4/ServiceInfoType4';
// import OurWorks from 'containers/OurWorks/OurWorks';
// import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
// import CeramicCoating from 'containers/CeramicCoating/CeramicCoating';
// import GoogleMap from 'containers/GoogleMap/GoogleMap';
const SubMainBanner = React.lazy(() =>
  import('containers/SubMainBanner/SubMainBanner')
);
const SubPageTitle = React.lazy(() =>
  import('containers/SubPageTitle/SubPageTitle')
);
const CardExplanation = React.lazy(() =>
  import('containers/CardExplanation/CardExplanation')
);
const Video = React.lazy(() => import('containers/Video/Video'));
const CeramicProProtectionPackage = React.lazy(() =>
  import('containers/CeramicProProtectionPackage/CeramicProProtectionPackage')
);
const CeramicProProtectionOptions = React.lazy(() =>
  import('containers/CeramicProProtectionOptions/CeramicProProtectionOptions')
);
const ServiceInfoType2 = React.lazy(() =>
  import('containers/ServiceInfoType2/ServiceInfoType2')
);
const ServiceInfoType4 = React.lazy(() =>
  import('containers/ServiceInfoType4/ServiceInfoType4')
);
const OurWorks = React.lazy(() => import('containers/OurWorks/OurWorks'));
const GetAQuoteBanner = React.lazy(() =>
  import('containers/GetAQuoteBanner/GetAQuoteBanner')
);
const CeramicCoating = React.lazy(() =>
  import('containers/CeramicCoating/CeramicCoating')
);
const GoogleMap = React.lazy(() => import('containers/GoogleMap/GoogleMap'));

const ServiceCeramic = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, type: 'tween' }
        }}
        enter={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <Helmet>
          <title>Ceramic Pro Page</title>
          <meta
            name="description"
            content="Luxury Vehicle Protection Services (LVPS) is a Certified Ceramic Pro Installer. We provide professional installation for Ceramic Pro products like 9H, Top coat, Sport, Glass, Wheel & Caliper, Strong, Leather, Textile. We are Ceramic Coating specialists in North York and in the GTA (Greater Toronto Area). We have coated and protected many vehicles. Tesla expert in Ceramic Coating Ceramic Pro."
          />
        </Helmet>
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
        <ServiceInfoType2
          imageLabel="ceramic pro coating bottle"
          imagePath="/assets/ceramicInfoImage.png"
          mobileImagePath="/assets/ServiceInfo_01.png"
          infoList={[]}
          mode="right"
          subTitle=" "
          title="What Is Ceramic Pro?"
        >
          Ceramic Pro is a multi-layerable, clear, liquid nano-ceramic coating.
          When cured, this technology will transform itself on the surface to a
          permanent, durable yet flexible glass shield. Ceramic Pro can be
          described as an additional clear coat, with 3 times the hardness and
          self cleaning properties.
        </ServiceInfoType2>

        <CeramicCoating />

        <CardExplanation
          title="The process of installing Ceramic Pro"
          cardList={ceramicCardList}
        ></CardExplanation>
        <Video videoId="dEHu-STjB-Q" videoTitle="ceramic pro products" />
        <CeramicProProtectionPackage />
        <CeramicProProtectionOptions />
        <ServiceInfoType2
          imageLabel="Ceramic prop 9h"
          imagePath="./assets/ceramicpro9h.png"
          mobileImagePath="./assets/mobile-ceramic-pro-9h.png"
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
          Ceramic Pro 9H forms a permanent bond with the surface and will not
          wash off or break down. Ceramic Pro 9H can only be removed by
          abrasion. It is a highly durable protective coating that protects your
          paintwork from damaging contaminants. 9H can be applied in multiple
          layers which means the thickness of the coating can be increased with
          additional layers allowing a thicker/harder coating with improved
          scratch resistance.
        </ServiceInfoType2>
        <ServiceInfoType4
          imageLabel="CERAMIC PRO TOP COAT"
          imagePath="./assets/ceramic-pro-top-coat.png"
          mobileImagePath="./assets/mobile-ceramic-top-coat.png"
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
          cause water to bead up and roll off the surface along with any dirt
          and grime. Top Coat is usually applied over 9H in the layering
          process. Though not as durable as 9H, it can also be applied on its
          own. Top Coat also enhances gloss depth further on all painted
          surfaces for that wet look that is often hard to attain with synthetic
          waxes.
        </ServiceInfoType4>

        <ServiceInfoType2
          imageLabel="ceramic pro coating bottle"
          imagePath="./assets/how-to-care.png"
          mobileImagePath="./assets/mobile-coated-vehicle.png"
          infoList={[]}
          mode="right"
          subTitle="AFTER CARE"
          title="HOW TO CARE OF YOUR COATED VEHICLE"
        >
          Ceramic Pro is designed to protect your factory clear coat, to provide
          a protective shield against the elements and to keep your vehicle
          looking new always. To maximize the effects of Ceramic Pro and to
          ensure your investment is long lasting, a few basic maintenance steps
          should be taken. We recommend maintaining your coating with Ceramic
          Pro After Care.
        </ServiceInfoType2>
        <ServiceInfoType2
          imageLabel="CERAMIC PRO PPF &amp; VINYL"
          imagePath="./assets/service-info-image.png"
          mobileImagePath="./assets/mobile-ppf-vinyl.png"
          subTitle="CERAMIC PRO PPF &amp; VINYL"
          title="PAINT PROTECTION FILM &amp; VINYL"
          infoList={[
            'Super Hydrophobic Effect',
            'Weather & UV Resistance',
            'High Gloss Finish',
            'Anti-Graffiti',
            'Advanced Chemical Resistance',
            'Oxidation & Corrosion Resistance'
          ]}
        >
          Ceramic Pro PPF &amp; Vinyl was designed as a protective coating for
          polyurethane film and vinyl. It protects from contamination and
          weathering resulting in film that is much easier to clean. It also
          helps reduce vinyl’s orange peel look. The complete protection program
          involves a base coat and top coat application.
        </ServiceInfoType2>
        <ServiceInfoType2
          mode="right"
          imageLabel="Ceramic Pro Glass"
          imagePath="./assets/ceramic-glass.png"
          mobileImagePath="./assets/ceramic-glass-mobile.png"
          title="Ceramic Pro Glass"
          infoList={[
            'Excellent Durability',
            'Hydrophobic Effect – 115°',
            'Fills Scratches and Swirl Marks',
            'Excellent Wear Resistance',
            'Keeps Glass Cleaner',
            'Allows Water to Roll off Glass',
            'Anti-Icing'
          ]}
        >
          Ceramic Pro Glass is a coating specifically designed for glass. It has
          excellent durability with a Super hydrophobic effect that allows water
          to simply bead up and flow off the glass while you are driving.
          Ceramic Pro Rain lasts for up to 12 month in automotive use
        </ServiceInfoType2>
        <OurWorks></OurWorks>
        <GetAQuoteBanner
          title={
            <>
              Didn’t find what you are looking for? <br /> Contact us!
            </>
          }
          linkText="Contact Us"
          styledmode="secondary"
          color="pink"
          borderColor="pink"
          hoverColor="pink"
          iconcolor="pink"
          to="/contact-us"
        />
        <GoogleMap />
      </motion.main>
    </Suspense>
  );
};

export default ServiceCeramic;
