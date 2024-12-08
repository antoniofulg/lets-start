import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ImageViewer from "./components/ImageViewer"
import Button from "./components/Button"

const PlaceholderImage = require("@/assets/images/background-image.png")

export default function HomeScreen() {
	return (
		<SafeAreaView className="flex-1 justify-center items-center dark:bg-black">
			<View className="flex-1">
				<ImageViewer imgSource={PlaceholderImage} />
			</View>
			<View className="flex-[1/3] items-center">
				<Button label="Choose a photo" />
				<Button label="Use this photo" />
			</View>
		</SafeAreaView>
	)
}
