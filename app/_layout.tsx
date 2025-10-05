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
        </Stack>
    </SafeAreaProvider>
  );
}