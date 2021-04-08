import styled, { css } from 'styled-components'
import { oneOf, bool, string } from 'prop-types'

// 버튼 색상 스타일링
const compColor = css`
  ${props => {
    switch (props.mode) {
      case 'primary': 
        return css `
          color: white;
          background-color: #EB1527;
          border: none;
        `
      case 'secondary':
        return css`
          color: black;
          background-color: white;
          border: 4px solid #EB1527;
        `
      default: 
        return css `
            color: white;
            background-color: #EB1527;
            border: none;
          `
    }
  }}
`

// 마우스 호버 버튼 스타일링
const hoveredCompColor = css`
  &:hover {
    color: white;
    background-color: #EB1527;
  }
`

// 버튼 모양 스타일링 (모바일 디자인 필요)
const compDesign = css`
  display: flex;
  box-sizing: border-box;
  width: 465px;
  height: 96px;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-decoration: none;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`

const StyledButton = styled.button`
  ${compColor}
  ${hoveredCompColor}
  ${compDesign}
`

const StyledAnchor = styled.a`
  ${compColor}
  ${hoveredCompColor}
  ${compDesign}
`

// button 컴포넌트
const Button = ({ 
  type, 
  mode, 
  disabled, 
  children, 
  ...restProps }) => {
  return (<StyledButton
    type={type}
    mode={mode}
    disabled={disabled}
    {...restProps}
  >
    {children}
  </StyledButton>
)}

// a 컴포넌트
const Anchor = ({
  mode,
  role,
  href,
  children,
  ...restProps }) => {
  return (<StyledAnchor
    role={role}
    href={href}
    {...restProps}
  >
    {children}
  </StyledAnchor>
)}

// 버튼 컴포넌트
const ButtonComp = ({ 
  tag,
  ...restProps}) => {
  const Tag = tag === 'button' ? Button : Anchor
  
  return (
    <Tag {...restProps} />
  )

}

ButtonComp.propTypes = {
  tag: oneOf(['button', 'a']),
  type: string,
  mode: oneOf(['primary', 'secondary']),
  disabled: bool,
  role: string,
  href: string,
}

ButtonComp.defaultProps = {
  tag: 'button',
  type: 'button',
  mode: 'primary',
  disabled: false,
  role: 'button',
  href: '/',
  children: 'Button',
}

ButtonComp.displayName = 'Button'

export default ButtonComp;