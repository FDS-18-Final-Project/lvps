import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import TagPriceTable from 'components/PriceTable/TagPriceTable';
import Carousel from 'components/Carousel/Carousel';
import {
  ceramicPackage_01,
  ceramicPackage_02,
  ceramicPackage_03
} from 'data/Data';

const package_group = [
  <TagPriceTable
    key="1"
    mode="title"
    type="tagGold"
    typeText="GOLD"
    title="Starting At"
    price={1499}
    info={ceramicPackage_01}
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
    info={ceramicPackage_02}
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
    info={ceramicPackage_03}
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
