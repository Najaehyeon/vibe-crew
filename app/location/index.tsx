import { COLORS } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Location() {
    return (
        <View style={styles.container}>
            <Text style={styles.defaultText}>지역 설정 페이지</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: 'center',
    },
    defaultText: {
        fontSize: 16,
        bottom: "10%",
    }
})