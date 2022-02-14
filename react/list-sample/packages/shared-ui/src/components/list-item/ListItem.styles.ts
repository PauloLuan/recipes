import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  padding: 20px;
  font-size: 16px;
  border-top: 2px #e5e5e5 solid;

  &:nth-of-type(odd) {
    background-color: #e9ecef;
  }
`
