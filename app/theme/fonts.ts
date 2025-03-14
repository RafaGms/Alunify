import {
   useFonts,
   Inter_100Thin,
   Inter_200ExtraLight,
   Inter_300Light,
   Inter_400Regular,
   Inter_500Medium,
   Inter_600SemiBold,
   Inter_700Bold,
   Inter_800ExtraBold,
   Inter_900Black,
} from '@expo-google-fonts/inter'

export const font = {
   THIN: 'thin',
   EXTRA_LIGHT: 'extraLight',
   LIGHT: 'light',
   REGULAR: 'regular',
   MEDIUM: 'medium',
   SEMI_BOLD: 'semiBold',
   BOLD: 'bold',
   EXTRA_BOLD: 'extraBold',
   BLACK: 'black',
}

export const useFontsLoader = () => {
   const [fontsLoaded] = useFonts({
      [font.THIN]: Inter_100Thin,
      [font.EXTRA_LIGHT]: Inter_200ExtraLight,
      [font.LIGHT]: Inter_300Light,
      [font.REGULAR]: Inter_400Regular,
      [font.MEDIUM]: Inter_500Medium,
      [font.SEMI_BOLD]: Inter_600SemiBold,
      [font.BOLD]: Inter_700Bold,
      [font.EXTRA_BOLD]: Inter_800ExtraBold,
      [font.BLACK]: Inter_900Black,
   })

   return fontsLoaded
}

export const fontSizes = {
   h1: 28,
   h2: 26,
   h3: 24,
   h4: 22,
   medium: 16,
   small: 14,
   xSmall: 12,
}
