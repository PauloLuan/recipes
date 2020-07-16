import React from 'react'

interface Props {
  customText: string
}

export const FaceNav: React.FC<Props> = ({ customText }) => {
  return <div>{customText}</div>
}
