import Icon from 'components/Icon/Icon';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ParagraphWrapper = styled.div`
  color: ${({ colors }) => colors.sub};
  line-height: 1.4;

  h${({ headingNumber }) => headingNumber} {
    font-weight: bold;
    // TODO: rem으로 변경
    margin-bottom: 5px;
    color: ${({ colors }) => colors.main};
  }

  // TODO: theme으로 fontSize 변경
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.5rem;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
  }
  span {
    // TODO: rem으로 변경
    margin-left: 5px;
  }
`;

const Paragraph = ({
  title,
  type,
  headingNumber,
  items,
  icon,
  children,
  colors,
}) => {
  let Comp = `h${headingNumber}`;

  return (
    <ParagraphWrapper headingNumber={headingNumber} colors={colors}>
      <Comp>{title}</Comp>
      {type === 'list' && (
        <ul>
          {items.map((item) => (
            <li key={item}>
              {icon && (
                <Icon type={icon} width="20" height="20">
                  <span>{item}</span>
                </Icon>
              )}
              {/* 아이콘이 있으면 item 안보여주고, 없으면 icon 보여줘 */}
              {icon ? null : item}
            </li>
          ))}
        </ul>
      )}
      {children}
    </ParagraphWrapper>
  );
};

ParagraphWrapper.displayName = 'ParagraphWrapper';

Paragraph.defaultProps = {
  title: '',
  type: 'normal',
  headingNumber: 3,
  items: [],
  // TODO: main black 컬러로 변경
  colors: { main: 'black', sub: 'black' },
};

Paragraph.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  headingNumber: PropTypes.number,
  items: PropTypes.array,
  icon: PropTypes.string,
  colors: PropTypes.object,
};

export default Paragraph;
