import React from 'react'
import styled from '@xstyled/styled-components'

export const Button = () => <Base>test button</Base>

const Base = styled.button`
  background-color: primary;
  color: white;
  border-width: 1px;
  border-style: solid;
  border-color: primary;
  padding: 5px;
`
