import styled from 'styled-components'

export const Container = styled.div<any>`
  border-top: 4px solid ${props => props.borderColor};
  height: 250px;
  width: 350px;
  margin: 24px;
`

export const ImageWrapper = styled.div`
  width: 64;
  height: 64;
`
