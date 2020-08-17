import { subYears } from 'date-fns'
import React from 'react'
import Heatmap from 'react-calendar-heatmap'
import { Container } from './randomcalendar.styles'

export const RandomCalendar: React.FC = ({}) => {
  const startDate = subYears(new Date(), 1)
  const endDate = new Date()

  return (
    <Container>
      <Heatmap 
        startDate={startDate}
        endDate={endDate}
        values={[]}
        gutterSize={3.5}
      />
    </Container>
  )
}
