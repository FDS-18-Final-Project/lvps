import Icon from 'components/Icon/Icon';
import styled from 'styled-components';
import { string, number, array, object } from 'prop-types';
import { fontSizes, calcRem } from 'theme/theme';
import { Link } from 'react-router-dom';

const ParagraphWrapper = styled.div`
  color: ${({ colors }) => colors.sub};
  line-height: 1.4;

  h${({ headingNum }) => headingNum} {
    font-weight: bold;
    margin-bottom: ${calcRem(10)};
    color: ${({ colors }) => colors.main};
  }

  h1 {
    font-size: ${fontSizes.titleLarge};
  }
  h2 {
    font-size: ${fontSizes.titleBase};
  }
  h3 {
    font-size: ${fontSizes.small};
  }

  /* .icon-wrapper {
    display: flex;
    align-items: center;
  } */
  li {
    font-size: ${({ size }) => `${size}px`};
  }
  span {
    margin-left: ${calcRem(5)};
  }
  p {
    font-size: ${({ size }) => `${size}px`};
  }
  li,
  p,
  span {
    font-weight: 500;
  }
`;

const Paragraph = ({
  title,
  type,
  headingNum,
  items,
  icon,
  children,
  colors,
  size,
  link,
  to,
  ...restProps
}) => {
  let Comp = `h${headingNum}`;

  return (
    <ParagraphWrapper
      headingNum={headingNum}
      colors={colors}
      size={size}
      {...restProps}
    >
      <Comp>{title}</Comp>
      {type === 'list' && (
        <ul>
          {items.map(item => {
            if (link) {
              return (
                <Link to={to}>
                  <li key={item}>
                    {icon && (
                      <Icon type={icon} width="20" height="20">
                        <span>{item}</span>
                      </Icon>
                    )}
                    {icon ? null : item}
                  </li>
                </Link>
              );
            }
            return (
              <li key={item}>
                {icon && (
                  <Icon type={icon} width="20" height="20">
                    <span>{item}</span>
                  </Icon>
                )}
                {icon ? null : item}
              </li>
            );
          })}
        </ul>
      )}
      <p>{children}</p>
    </ParagraphWrapper>
  );
};

Paragraph.propTypes = {
  title: string,
  type: string,
  headingNum: number,
  items: array,
  icon: string,
  colors: object
};

Paragraph.defaultProps = {
  title: '',
  type: 'normal',
  headingNum: 3,
  items: [],
  colors: { main: '#2D2D2D', sub: '#2D2D2D' }
};

ParagraphWrapper.displayName = 'ParagraphWrapper';

export default Paragraph;
