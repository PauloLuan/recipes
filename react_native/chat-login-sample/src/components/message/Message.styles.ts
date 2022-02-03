import styled, { css } from 'styled-components/native'

// import { MessageProps } from '.'

export const Wrapper = styled.View`
  ${() => css`
    flex-direction: row;
    height: 100px;
    padding: 15px;
    background-color: black;
    align-items: center;
  `}
`

export const AuthorPhoto = styled.Image`
  width: 30px;
  height: 30px;
  background-color: red;
`

export const ContentContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`

export const Title = styled.Text`
  color: white;
  font-size: 10px;
`

export const MessageContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 20px 0 0;
`

export const Message = styled.Text`
  flex-wrap: wrap;
  color: white;
  font-size: 14px;
`
