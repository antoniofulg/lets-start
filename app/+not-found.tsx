import { Link, Stack } from "expo-router"
import { SafeAreaView } from "react-native"

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Not Found" }} />
			<SafeAreaView className="flex-1 justify-center items-center">
				<Link href="/">Go to Home</Link>
			</SafeAreaView>
		</>
	)
}
