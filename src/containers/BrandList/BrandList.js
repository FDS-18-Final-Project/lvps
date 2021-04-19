import { string } from 'prop-types';
import styled from 'styled-components';
import { fontSizes, colors, calcRem } from 'theme/theme';
import BrandItem from 'components/BrandItem/BrandItem';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-bottom: ${calcRem(1)} solid ${colors.lightGray};
  padding: ${calcRem(75)} 0;
  text-align: center;
  justify-content: center;
`;

const StyledTitle = styled.h2`
  color: ${colors.red_05};
  font-size: ${fontSizes.titleBase};
  font-weight: 700;
  margin-bottom: ${calcRem(50)};
`;

const StyledList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: ${calcRem(1200)};
  margin: auto;
  padding-left: ${calcRem(20)};
`;

const tireList = [
  {
    id: 'tire_01',
    value: 'beyern',
    src: 'assets/img/tire_beyern.png'
  },
  {
    id: 'tire_02',
    value: 'blackrhino',
    src: 'assets/img/tire_blackrhino.png'
  },
  {
    id: 'tire_03',
    value: 'enkei',
    src: 'assets/img/tire_enkei.png'
  },
  {
    id: 'tire_04',
    value: 'fastwheels',
    src: 'assets/img/tire_fastwheels.png'
  },
  {
    id: 'tire_05',
    value: 'hre',
    src: 'assets/img/tire_hre.png'
  },
  {
    id: 'tire_06',
    value: 'vorsteiner',
    src: 'assets/img/tire_vorsteiner.png'
  },
  {
    id: 'tire_07',
    value: 'gts',
    src: 'assets/img/tire_gts.png'
  },
  {
    id: 'tire_08',
    value: 'superspeed',
    src: 'assets/img/tire_superspeed.png'
  },
  {
    id: 'tire_09',
    value: 'mandrus',
    src: 'assets/img/tire_mandrus.png'
  },
  {
    id: 'tire_10',
    value: 'tirerays',
    src: 'assets/img/tire_rays.png'
  },
  {
    id: 'tire_11',
    value: 'replica',
    src: 'assets/img/tire_replika.png'
  },
  {
    id: 'tire_12',
    value: 'rotiform',
    src: 'assets/img/tire_rotiform.png'
  },
  {
    id: 'tire_13',
    value: 'sparco',
    src: 'assets/img/tire_sparco.png'
  },
  {
    id: 'tire_14',
    value: 'superspeedCircle',
    src: 'assets/img/tire_superspeedCircle.png'
  }
];

const wheelList = [
  {
    id: 'wheel_01',
    value: 'wheel_bfgoodrich',
    src: 'assets/img/wheel_bfgoodrich.png'
  },
  {
    id: 'wheel_02',
    value: 'wheel_bridgestone',
    src: 'assets/img/wheel_bridgestone.png'
  },
  {
    id: 'wheel_03',
    value: 'wheel_continental',
    src: 'assets/img/wheel_continental.png'
  },
  {
    id: 'wheel_04',
    value: 'wheel_dunlop',
    src: 'assets/img/wheel_dunlop.png'
  },
  {
    id: 'wheel_05',
    value: 'wheel_yokohama',
    src: 'assets/img/wheel_yokohama.png'
  },
  {
    id: 'wheel_06',
    value: 'wheel_pirelli',
    src: 'assets/img/wheel_pirelli.png'
  },
  {
    id: 'wheel_07',
    value: 'wheel_generaltire',
    src: 'assets/img/wheel_generaltire.png'
  },
  {
    id: 'wheel_08',
    value: 'wheel_gislaved',
    src: 'assets/img/wheel_gislaved.png'
  },
  {
    id: 'wheel_09',
    value: 'wheel_gislaved',
    src: 'assets/img/wheel_gislaved.png'
  },
  {
    id: 'wheel_10',
    value: 'wheel_hankook',
    src: 'assets/img/wheel_hankook.png'
  },
  {
    id: 'wheel_11',
    value: 'wheel_uniroyal',
    src: 'assets/img/wheel_uniroyal.png'
  },
  {
    id: 'wheel_12',
    value: 'wheel_rovelo',
    src: 'assets/img/wheel_rovelo.png'
  },
  {
    id: 'wheel_13',
    value: 'wheel_kapsen',
    src: 'assets/img/wheel_kapsen.png'
  },
  {
    id: 'wheel_14',
    value: 'wheel_kumhotire',
    src: 'assets/img/wheel_kumhotire.png'
  },
  {
    id: 'wheel_15',
    value: 'wheel_michelin',
    src: 'assets/img/wheel_michelin.png'
  },
  {
    id: 'wheel_16',
    value: 'wheel_maxxis',
    src: 'assets/img/wheel_maxxis.png'
  },
  {
    id: 'wheel_17',
    value: 'wheel_nexen',
    src: 'assets/img/wheel_nexen.png'
  },
  {
    id: 'wheel_18',
    value: 'wheel_toyotires',
    src: 'assets/img/wheel_toyotires.png'
  }
];

const BrandList = ({ title, type, ...restProps }) => {
  console.log(type, title, { ...restProps });
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {type === 'wheel'
          ? wheelList.map((item, idx) => (
              <BrandItem
                key={idx}
                id={item.id}
                value={item.value}
                src={item.src}
                {...restProps}
              />
            ))
          : tireList.map((item, idx) => (
              <BrandItem
                key={idx}
                id={item.id}
                value={item.value}
                src={item.src}
                {...restProps}
              />
            ))}
      </StyledList>
    </StyledContainer>
  );
};

BrandList.propTypes = {
  title: string
};

BrandList.defaultProps = {
  title: 'Feature Tire Brands'
};

BrandList.displayName = 'BrandList';

export default BrandList;
