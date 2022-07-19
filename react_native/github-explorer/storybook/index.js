import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'

import { loadStories } from './storyLoader'
import AsyncStorage from '@react-native-async-storage/async-storage'

import './rn-addons'

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage
})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot)

export { StorybookUIRoot }
