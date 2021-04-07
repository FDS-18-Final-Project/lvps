import Icon from 'components/Icon/Icon';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ParagraphWrapper = styled.div`
  color: ${({ colors }) => colors.sub};

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
    <ParagraphWrapper
      headingNumber={headingNumber}
      icon={icon}
      type={type}
      colors={colors}
    >
      <Comp>{title}</Comp>
      {type === 'list' && (
        <ul>
          {items.map((item) => (
            <li>
              {icon && (
                <Icon type="facebook" width="30" height="30">
                  <span>{item}</span>
                </Icon>
              )}
              {icon || item}
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
  icon: false,
  // TODO: main black 컬러로 변경
  colors: { main: 'black', sub: 'black' },
};

Paragraph.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  headingNumber: PropTypes.number,
  items: PropTypes.array,
  icon: PropTypes.bool,
  colors: PropTypes.object,
};

export default Paragraph;
