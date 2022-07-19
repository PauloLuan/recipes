import { Heading, VStack } from 'native-base'
import React from 'react'

export interface homeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id', ...props }: homeProps) => {
  return (
    <VStack flex={1} alignItems={'center'} bg={'gray.600'} px={8} py={12}>
      <Heading color={'secondary.100'} fontSize={'2xl'}>
        Acesse sua conta
      </Heading>
    </VStack>
  )
}
