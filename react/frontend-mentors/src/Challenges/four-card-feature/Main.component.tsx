import React from 'react'
import { Card } from '.'

import SupervisorIcon from './__resources__/images/icon-supervisor.svg'
import TeamBuilderIcon from './__resources__/images/icon-team-builder.svg'
import KarmaIcon from './__resources__/images/icon-karma.svg'
import CalculatorIcon from './__resources__/images/icon-calculator.svg'

export const FourCard: React.FC = () => {
  return (
    <>
      <h1>Reliable, efficient delivery</h1>
      <h1>Powered by Technology</h1>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <Card icon={SupervisorIcon} borderColor='red'>
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
      </Card>
      <Card icon={TeamBuilderIcon} borderColor='blue'>
        <h2>Team Builder</h2>
        <p>
          Scans our talent network to create the optimal team for your project
        </p>
      </Card>
      <Card icon={KarmaIcon} borderColor='green'>
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
      </Card>
      <Card icon={CalculatorIcon} borderColor='black'>
        <h2>Calculator</h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
      </Card>
    </>
  )
}
