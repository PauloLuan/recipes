import { addDays, isBefore, isSameDay, subYears } from 'date-fns'
import React from 'react'
import Heatmap from 'react-calendar-heatmap'
import { Container, Wrapper } from './randomcalendar.styles'

type HeatmapValue = { date: Date; count: number }

export const RandomCalendar: React.FC = ({}) => {
  const startDate = subYears(new Date(), 1)
  const endDate = new Date()

  return (
    <Container>
      <Wrapper>
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          gutterSize={3.5}
          showWeekdayLabels
          values={generateHeatmapValues(startDate, endDate)}
          classForValue={(item: HeatmapValue) => {
            let clampedCount = 0

            if (item !== null) {
              clampedCount = Math.max(item.count, 0)
              clampedCount = Math.min(item.count, 4)
            }

            return `scale-${clampedCount}`
          }}
        />
      </Wrapper>
      <span>Learn how we count contributions.</span>
    </Container>
  )
}

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = []
  let currentDate = startDate

  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4
    values.push({ date: currentDate, count: Math.round(count) })
    currentDate = addDays(currentDate, 1)
  }

  return values
}
