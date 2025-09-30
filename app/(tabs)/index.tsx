import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Home() {

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top + 12}]}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
      />
      <View style={styles.header}>
        <Text style={styles.title}>미팅하자</Text>
        <TouchableOpacity style={styles.alarmButton}>
          <FontAwesome name='bell-o' size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <View style={styles.filterMenu}>
          <Text style={styles.filterMenuText}>나이</Text>
          <FontAwesome name='angle-down' size={24}/>
        </View>
        <View style={styles.filterMenu}>
          <Text style={styles.filterMenuText}>지역</Text>
          <FontAwesome name='angle-down' size={24}/>
        </View>
        <View style={styles.filterMenu}>
          <Text style={styles.filterMenuText}>인원</Text>
          <FontAwesome name='angle-down' size={24}/>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4FA",
    padding: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
  },
  alarmButton: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    marginTop: 24,
    backgroundColor: "white",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 64,
  },
  filterMenu: {
    flexDirection: "row",
  },
  filterMenuText: {
    fontSize: 18,
    fontWeight: 600,
    marginRight: 4,
  }
});