import { Link } from 'react-router-dom';
import { string, number, array, object, bool } from 'prop-types';
import styled from 'styled-components';
import { fontSizes, calcRem, colors } from 'theme/theme';
import { Icon } from 'components';

const StyledParagraphContainer = styled.div`
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

  li {
    font-size: ${({ size }) => calcRem(size)};
    margin-bottom: ${({ type }) => type === 'list' && calcRem(7)};
    a {
      user-select: none;
    }
    a:hover {
      text-decoration: ${({ link }) => (link ? 'underline' : '')};
    }
  }
  li > span {
    margin-left: ${calcRem(5)};
  }
  li > p {
    font-size: ${({ size }) => calcRem(size)};
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
  iconColor,
  stroke,
  children,
  colors,
  size,
  link,
  to,
  ...restProps
}) => {
  let Comp = `h${headingNum}`;

  return (
    <StyledParagraphContainer
      headingNum={headingNum}
      colors={colors}
      size={size}
      link={link}
      type={type}
      {...restProps}
    >
      <Comp>{title}</Comp>

      {type === 'list' && (
        <ul>
          {items.map((item, idx) => {
            if (link)
              return (
                <li key={`${item}-${idx}`}>
                  <Link to={to}>
                    {icon && (
                      <Icon
                        type={icon}
                        color={iconColor}
                        width="20"
                        height="20"
                      >
                        <span>{item}</span>
                      </Icon>
                    )}
                    {icon ? null : item}
                  </Link>
                </li>
              );
            return (
              <li key={`${item}-${idx}`}>
                {icon && (
                  <Icon
                    type={icon}
                    color={iconColor}
                    stroke={stroke}
                    width="20"
                    height="20"
                  >
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
    </StyledParagraphContainer>
  );
};

Paragraph.propTypes = {
  title: string,
  subTitle: string,
  type: string,
  headingNum: number,
  items: array,
  icon: string,
  iconColor: string,
  colors: object,
  size: string,
  link: bool,
  to: string
};

Paragraph.defaultProps = {
  title: '',
  subTitle: '',
  type: 'normal',
  items: [],
  colors: { main: colors.black, sub: colors.black },
  size: fontSizes.base,
  link: false
};

StyledParagraphContainer.displayName = 'StyledParagraphContainer';

export default Paragraph;
