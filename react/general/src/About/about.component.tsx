import React from 'react'
import { AboutSection, Container, AboutItem, AboutImage, Description } from './about.styles'

export interface Props {}

export const About: React.FC<Props> = ({}) => {
  return (
    <AboutSection>
      <Container>
        <h1>A mixture of</h1>

        <AboutItem>
          <AboutImage
            src={'https://origamid.com/projetos/brafe-1/img/cafe-1.jpg'}
          />
          <h3>Love</h3>
        </AboutItem>
        <AboutItem>
          <AboutImage
            src={'https://origamid.com/projetos/brafe-1/img/cafe-2.jpg'}
          />
          <h3>Perfection</h3>
        </AboutItem>
      </Container>

      <Description>
        Coffee is a drink produced from the roasted beans of the coffee fruit.
        It is traditionally served hot, but it can also be eaten chilled. It is
        a stimulant, because it has caffeine - usually 80 to 140 mg for each 207
        ml depending on the method of preparation.
      </Description>
    </AboutSection>
  )
}
