import { COLORS } from "@/constants/theme";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{backgroundColor: "#F7F4FA"}}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="notice"
            options={{
              headerTitle: "알림",
              headerStyle: {
                backgroundColor: COLORS.background,
              } 
            }}
          />
          <Stack.Screen
            name="post"
            options={{
              headerTitle: "게시물 작성",
              headerStyle: {
                backgroundColor: COLORS.background,
              } 
            }}
          />
          <Stack.Screen
            name="location"
            options={{
              headerTitle: "지역 설정",
              headerStyle: {
                backgroundColor: COLORS.background,
              } 
            }}
          />
        </Stack>
    </SafeAreaProvider>
  );
}