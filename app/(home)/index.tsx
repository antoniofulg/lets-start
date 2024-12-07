import { Text } from "@/components/Text"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
	return (
		<SafeAreaView className="flex-1 justify-center items-center">
			<Text className="text-2xl dark:text-white">Hello, world!</Text>
		</SafeAreaView>
	)
}
