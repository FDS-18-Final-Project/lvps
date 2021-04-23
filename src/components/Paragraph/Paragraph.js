import { Link } from 'react-router-dom';
import { string, number, array, object, bool } from 'prop-types';
import styled, { css } from 'styled-components';
import { fontSizes, calcRem, colors } from 'theme/theme';
import Icon from 'components/Icon/Icon';

const styledHeading = css`
  h${({ headingNum }) => headingNum} {
    font-weight: bold;
    margin-bottom: ${calcRem(10)};
    color: ${({ colors }) => colors.main};
  }
`;

const StyledParagraphContainer = styled.div`
  color: ${({ colors }) => colors.sub};
  line-height: 1.4;
  ${({ headingNum }) => headingNum && styledHeading}

  h1 {
    font-size: ${fontSizes.titleLarge};
  }

  h2 {
    font-size: ${fontSizes.titleBase};
  }

  h3 {
    font-size: ${fontSizes.xl};
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

  .list-content {
    display: inline-block;
    margin-left: ${calcRem(10)};
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
  iconcolor,
  // stroke,
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
      {headingNum && <Comp>{title}</Comp>}

      {type === 'list' && (
        <ul>
          {items.map((item, idx) => {
            if (link)
              return (
                <li key={`${item}-${idx}`}>
                  <Link to={to}>
                    {icon && (
                      <Icon
                        title={item}
                        type={icon}
                        color={iconcolor}
                        // stroke={stroke}
                        width="20"
                        height="20"
                      >
                        <span className="list-content">{item}</span>
                      </Icon>
                    )}{' '}
                    {icon ? null : item}
                  </Link>
                </li>
              );
            return (
              <li key={`${item}-${idx}`}>
                {icon && (
                  <Icon
                    title={item}
                    type={icon}
                    color={iconcolor}
                    // stroke={stroke}
                    width="20"
                    height="20"
                  >
                    <span className="list-content">{item}</span>
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
  /** 문단 제목 */
  // title: oneOfType([string, array]),
  /** 문단 타입 */
  type: string,
  /** 헤드라인 넘버 */
  headingNum: number,
  /** 문단 아이템 배열 */
  items: array,
  /** 아이콘 여부와 타입 */
  icon: string,
  /** 아이콘 스트로크 색 */
  // stroke: string,
  /** 아이콘 색 */
  iconcolor: string,
  /** 문단 색 */
  colors: object,
  /** 문단 사이즈 */
  size: number,
  /** 링크 여부 */
  link: bool,
  /** 링크 href */
  to: string
};

Paragraph.defaultProps = {
  headingNum: 2,
  title: '',
  type: 'normal',
  items: [],
  colors: { main: colors.black, sub: colors.black },
  size: 16,
  link: false
};

StyledParagraphContainer.displayName = 'StyledParagraphContainer';

export default Paragraph;
