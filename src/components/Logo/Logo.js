import { oneOf, number } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Image } from '../../assets/Logo.svg'

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  max-width: ${(props) => `${props.maxWidth}px`};

  a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

// 사용 할 tag 전달
function Logo({ tag, ...restProps }) {
  return (
    <Heading as={tag} {...restProps}>
      <Link to="/">
        <Image title="Logo" />
      </Link>
    </Heading>
  )
}

Logo.defaultProps = {
  tag: 'h1',
  maxWidth: 200,
<<<<<<< HEAD
  height: 50,
}
=======
  height: 'auto',
};
>>>>>>> 8ecd1a4e3d8241ae9a3fec0ec376e5df70016e7e

Logo.propTypes = {
  tag: oneOf(['h1', 'h2', 'h3']),
  maxWidth: number,
}

Heading.displayName = 'Logo Heading'
Image.displayName = 'Logo Image'

export default Logo
