import React from 'react'

interface Props {
  customText: string
}

export const Example: React.FC<Props> = ({ customText }) => {
  return <div>{customText}</div>
}
