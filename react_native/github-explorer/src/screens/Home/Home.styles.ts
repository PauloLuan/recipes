import styled, { css } from 'styled-components/native'

// import { HomeProps } from '.'

export const Wrapper = styled.SafeAreaView`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary};
  `}
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 40px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title700};
`

export const SubHeading = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: 40px;
  font-size: 15px;
  text-align: center;
  margin-top: 16px;
`
