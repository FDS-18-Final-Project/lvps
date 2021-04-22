import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import TagPriceTable from 'components/PriceTable/TagPriceTable';
import Carousel from 'components/Carousel/Carousel';

const package_01 = [
  {
    id: 1,
    title: '4 Layers Ceramic Pro 9H',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 2,
    title: '1 Layers Ceramic Pro Top Coat',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 3,
    title: '1 Layer Ceramic Pro Glass',
    description: 'on all glass surfaces'
  },
  {
    id: 4,
    title: '1 Layer Ceramic Pro Wheel & Caliper',
    description: 'on the face of the wheels'
  }
];

const package_02 = [
  {
    id: 1,
    title: '1 Layer Ceramic Pro 9H',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 2,
    title: '1 Layer Ceramic Pro Top Coat',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 3,
    title: '1 Layer Ceramic Pro Glass',
    description: 'on all glass surfaces'
  },
  {
    id: 4,
    title: '1 Layer Ceramic Pro Wheel & Caliper',
    description: 'on the face of the wheels'
  }
];

const package_03 = [
  {
    id: 1,
    title: '1 Layer Ceramic Pro Top Coat',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 2,
    title: '1 Layers Ceramic Pro Glass',
    description: 'on all glass surfaces'
  },
  {
    id: 3,
    title: '1 Layer Ceramic Pro Wheel & Caliper',
    description: 'on the face of the wheels'
  }
];

const package_group = [
  <TagPriceTable
    key="1"
    mode="title"
    type="tagGold"
    typeText="GOLD"
    title="Starting At"
    price={1499}
    info={package_01}
    priceColor="pink"
    minHeight={200}
  />,
  <TagPriceTable
    key="2"
    mode="title"
    type="tagSilver"
    typeText="SILVER"
    title="Starting At"
    price={899}
    info={package_02}
    priceColor="pink"
    minHeight={200}
  />,
  <TagPriceTable
    key="3"
    mode="title"
    type="tagBronze"
    typeText="BRONZE"
    title="Starting At"
    price={599}
    info={package_03}
    priceColor="pink"
    minHeight={200}
  />
];

const StyledPriceCardLayoutContainer = styled(PriceCardLayout)`
  border-bottom: none;
`;

const CeramicProProtectionPackage = () => {
  return (
    <StyledPriceCardLayoutContainer
      title="Ceramic Pro Protection Packages"
      cardList={package_group}
      marginRight={20}
    >
      <Carousel type="card" contents={package_group} />
    </StyledPriceCardLayoutContainer>
  );
};

export default CeramicProProtectionPackage;
