import { H1 } from "@/components/Typography"
import { Link, Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Home" }} />
			<SafeAreaView className="flex-1 justify-center items-center dark:bg-black">
				<H1>First app</H1>
				<Link href="/about">Go to About</Link>
			</SafeAreaView>
		</>
	)
}
