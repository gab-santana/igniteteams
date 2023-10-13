import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
flex:1;
justify-content: center;
align-items: center;

background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({ color: theme.COLORS.GREEN_700 }))`
`