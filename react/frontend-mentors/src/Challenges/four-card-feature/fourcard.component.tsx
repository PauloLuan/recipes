import React from 'react'

interface CardProps {
  headerText: string
  bodyText: string
  iconPath: string
  borderColor: string
}

const Card: React.FC<CardProps> = ({ children, iconPath, borderColor }) => {
  return <>{children}</>
}

export const FourCard: React.FC = () => {
  return (
    <>
      <h1>Reliable, efficient delivery</h1>
      <h1>Powered by Technology</h1>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <Card>
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
      </Card>
      <Card>
        <h2>Team Builder</h2>
        <p>
          Scans our talent network to create the optimal team for your project
        </p>
      </Card>
      <Card>
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
      </Card>
      <Card>
        <h2>Calculator</h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
      </Card>
    </>
  )
}
