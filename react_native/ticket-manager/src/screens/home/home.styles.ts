import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Heading = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.primaryBold};
`
