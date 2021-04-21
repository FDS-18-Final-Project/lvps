import IGLProtectionProducts from 'containers/IGLProtectionProducts/IGLProtectionProducts';
import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
import CarCareGuide from 'containers/CarCareGuide/CarCareGuide';
import FeaturesBenefits from 'containers/FeaturesBenefits/FeaturesBenefits';
import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';

const IGLCoatings = () => {
  return (
    <>
      <SubMainBanner
        bgImg="/assets/IGLCar.png"
        title="Ceramic Coating"
        desc="LVS for your car"
      />
      <SubPageTitle
        type="img"
        imagePath="/assets/IGLLogo.png"
        title="IGL logo"
        desc="IGL Coatings"
      />
      <ServiceInfoType2
        mode="right"
        title="FOR THOSE SEEKING THE NEXT-GEN TECH IN ULTIMATE VEHICLE SURFACE PROTECTION"
        imagePath="/assets/IGLCard.png"
        mobileImagePath="/assets/IGLMobileCard.png"
      >
        Kenzo is a revolutionary paint protection coating that contains 100%
        silica providing the highest level of gloss and protection and is backed
        by an official warranty provided by IGL Coatings and supported by
        certified IGL Coatings Master Applicator. It forms a layer of thick
        coating that radiates a rich and natural glow reminiscence of a bespoke
        wax while providing unmatched protection. Running your hands across a
        Kenzo coated car is like touching the soft luxurious silk. It will never
        be the same again.
      </ServiceInfoType2>
      <FeaturesBenefits />
      <ServiceInfoType2
        mode="left"
        title="Benefits of having a KENZO IGL Coating include"
        imagePath="/assets/KENZO.png"
        mobileImagePath="/assets/IGLMobileCard2.png"
        infoList={[
          'Never wax your vehicle again',
          'Installed by Professional Auto Detailing Experts',
          'Easier to wash and keep clean',
          'Hydrophobic, water repels off easily and quickly creating  a self cleaning effect',
          'Strong resistance to bug etching, sap, and bird droppings.',
          'Scratch resistance. IGL Coatings have been independently tested at "Greater than 9H" hardness  levels',
          'Scratch resistance. IGL Coatings have been independently tested at "Greater than 9H" hardness  levels'
        ]}
      />
      {/* TODO: 비디오 */}
      <IGLProtectionProducts />
      <CarCareGuide />
      <ServiceInfoType2
        mode="right"
        title="IGL COATINGS™ LEATHER AND FABRIC MAINTENANCE PROGRAM"
        imagePath="/assets/IGLLeather.png"
        mobileImagePath="/assets/IGLMobileCard3.png"
        paddingBottom={58}
      >
        For best results, clean all leather/vinyl surfaces bi-weekly with IGL
        Ecoclean Interior and Ecoshine Leather to avoid contaminant buildup and
        replenish the natural oils. Vacuum carpets regularly and use IGL Ecocoat
        Fabric when necessary. Immediately wipe off spills on leather, vinyl, or
        fabric.
      </ServiceInfoType2>
      <GetAQuoteBanner
        title={
          <>
            Didn’t find what you are looking for? <br />
            Contact us!
          </>
        }
        color="green"
        linkText="Contact us!"
        styledmode="secondary"
        borderColor="green"
        hoverColor="green"
        iconcolor="green"
      />
      {/* TODO: 구글맵 */}
    </>
  );
};

export default IGLCoatings;
