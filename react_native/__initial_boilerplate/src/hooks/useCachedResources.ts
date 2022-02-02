import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
  useFonts
} from '@expo-google-fonts/roboto'
import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          Roboto_100Thin,
          Roboto_100Thin_Italic,
          Roboto_500Medium,
          Roboto_500Medium_Italic,
          Roboto_900Black,
          Roboto_900Black_Italic
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
