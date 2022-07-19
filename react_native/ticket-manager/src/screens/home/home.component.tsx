import { Input } from '@components/input'
import { Heading, VStack, Icon, useTheme } from 'native-base'
import { Envelope, Key, Password } from 'phosphor-react-native'
import React from 'react'

export interface homeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id', ...props }: homeProps) => {
  const { colors } = useTheme()

  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="gray.600"
      px={8}
      py={12}
    >
      <Heading color="secondary.100" fontSize="2xl">
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        InputLeftElement={
          <Icon ml={4} as={<Envelope color={colors.gray[300]} />} />
        }
      />
      <Input
        placeholder="Senha"
        InputLeftElement={<Icon ml={4} as={<Key color={colors.gray[300]} />} />}
        secureTextEntry
      />
    </VStack>
  )
}
