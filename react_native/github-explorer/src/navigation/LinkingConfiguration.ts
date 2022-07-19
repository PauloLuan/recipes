/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from './RootStackParams'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home'
            }
          },
          List: {
            screens: {
              ListScreen: 'list'
            }
          },
          Details: {
            screens: {
              ListScreen: 'details'
            }
          }
        }
      },
      NotFound: '*'
    }
  }
}

export default linking
