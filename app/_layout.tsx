import { Stack } from "expo-router"

// Import your global CSS file
import "../global.css"

const RootLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="+not-found" />
		</Stack>
	)
}

export default RootLayout
