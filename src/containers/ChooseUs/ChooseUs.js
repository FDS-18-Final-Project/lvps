import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, fontSizes } from 'theme/theme';
import Paragraph from 'components/Paragraph/Paragraph';
import Icon from 'components/Icon/Icon';

const ChooseUsContainer = styled.section`
  border-top: 2px solid ${colors.lightGray};
  background: #f5f5f5;
  padding: ${calcRem(60)} 0;
`;
const FullContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 ${calcRem(50)};
`;
const StyledInfoContentContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const StyedParagraph = styled(Paragraph)`
  max-width: ${calcRem(835)};
  margin: 0 auto;
  h2 {
    margin-bottom: ${calcRem(60)};
  }
  p {
    margin-bottom: ${calcRem(70)};
    line-height: 150%;
  }
`;
const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${calcRem(50)};
  & address span {
    font-size: ${fontSizes.lg};
    line-height: 150%;
  }
  address {
    margin-top: ${calcRem(40)};
    max-width: ${calcRem(220)};
  }
  & + & {
    border-left: 2px solid ${colors.lightGray};
  }
  @media only screen and (max-width: 768px) {
    & {
      border-top: 2px solid ${colors.lightGray};
    }
    & + & {
      border-left: 0;
      border-top: 2px solid ${colors.lightGray};
    }
  }
`;
const StyledIconContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  height: ${calcRem(40)};
  min-width: ${calcRem(150)};
  span {
    margin-left: ${calcRem(20)};
    color: ${colors.red_05};
    font-size: ${fontSizes.xl};
  }
`;

const ChooseUs = ({ title, children }) => {
  return (
    <ChooseUsContainer>
      <FullContainer>
        <StyedParagraph type="normal" title={title} headingNum="2">
          {children}
        </StyedParagraph>
        <StyledInfoContentContainer>
          <StyledContentContainer>
            <StyledIconContainer>
              <Icon type="marker"></Icon>
              <span>Address</span>
            </StyledIconContainer>
            <address>
              <span>9 Vanley Cres, North York, ON M3J 2B7</span>
            </address>
          </StyledContentContainer>
          <StyledContentContainer>
            <StyledIconContainer>
              <Icon type="email"></Icon>
              <span>E-MAIL</span>
            </StyledIconContainer>
            <address>
              <span>
                <a href="mailto: info@lvps.ca">info@lvps.ca</a>
              </span>
            </address>
          </StyledContentContainer>
          <StyledContentContainer>
            <StyledIconContainer>
              <Icon type="phone"></Icon>
              <span>CALL US AT</span>
            </StyledIconContainer>
            <address>
              <span>
                <a href="tel: 1-647-703-5857">(647) 703 5857</a>
              </span>
            </address>
          </StyledContentContainer>
        </StyledInfoContentContainer>
      </FullContainer>
    </ChooseUsContainer>
  );
};

ChooseUs.propTypes = {
  title: string,
  children: string
};

ChooseUs.defaultProps = {
  title: 'Why Choose Us?',
  children:
    'By professionally installing products of the highest quality, we value the services that are offered to our clients. Installation is guaranteed on products and services for any make and/or model. We are a certified installer for services such as Ceramic Pro, IGL Ceramic Coating, and Xpel.'
};

ChooseUsContainer.displayName = 'ChooseUsContainer';
FullContainer.displayName = 'FullContainer';
StyledInfoContentContainer.displayName = 'InfoContentContainer';
StyedParagraph.displayName = 'Paragraph';
StyledContentContainer.displayName = 'ContentContainer';
StyledIconContainer.displayName = 'IconContainer';
export default ChooseUs;
