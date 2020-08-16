import styled from 'styled-components'

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding);
  overflow: hidden;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);
  @media (min-width: 768px) {
    width: 25%;
  }
`

export const RightSide = styled.div`
  padding: 0 var(--horizontalPadding);
  @media (min-width: 768px) {
    width: 75%;
  }
`

export const Repositories = styled.div`
    
`
