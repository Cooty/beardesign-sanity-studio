import {HTMLAttributes} from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
}

const AspectRatio = styled.div<Props>`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: ${(props: Props) => ((props.height || 9) / (props.width || 16)) * 100}%;
`

export default AspectRatio
