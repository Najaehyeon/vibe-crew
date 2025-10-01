import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

const generateDates = () => {
  // ... (generateDates 함수 내용) ...
  const datesArray = [];
  const today = new Date();
  
  for (let i = 0; i < 21; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayIndex = date.getDay();
    const dateNumber = date.getDate();

    datesArray.push({
      day: DAYS_OF_WEEK[dayIndex],
      date: dateNumber,
      isToday: i === 0, 
    });
  }
  return datesArray;
};

export default function Home() {

  const insets = useSafeAreaInsets();
  const datesData = generateDates();

  return (
    <View style={[styles.container, {paddingTop: insets.top + 12}]}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
      />

      {/* 헤드 */}
      <View style={styles.header}> 
        <Text style={styles.title}>미팅하자</Text>
        <TouchableOpacity style={styles.alarmButton}>
          <FontAwesome name='bell-o' size={24} />
        </TouchableOpacity>
      </View>

      {/* 필터 메뉴 */}
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

      {/* 날짜 */}
      <View style={styles.dateContainer}>
        <TouchableOpacity style={styles.showAllDateButton}>
          <Text style={styles.showAllDateButtonText}>전체</Text>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.dateContentContainer}
          style={styles.dates}
        >
          {
            datesData.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.dateItem,
                  item.isToday && styles.todayDateTime
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    item.isToday && styles.todayDayText
                  ]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[
                    styles.dateText,
                    item.isToday && styles.todayDateText
                  ]}
                >
                  {item.date}
                </Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4FA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
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
    marginHorizontal: 24,
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
  },
  dateContainer: {
    marginTop: 24,
    backgroundColor: "white",
    flexDirection: "row",
    height: 80,
    alignItems: "center",
  },
  showAllDateButton: {
    position: "absolute",
    zIndex: 1,
    marginLeft: 10,
    width: 72,
    height: 60,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#960FFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  showAllDateButtonText: {
    color: "#960FFF",
    fontSize: 16,
    fontWeight: 600,
  },
  dateContentContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  dates: {
    width: "100%",
    height: 80,
    marginLeft: 82,
  },
  dateItem: {
    width: 50,
    alignItems: 'center',
    marginRight: 15,
    paddingVertical: 10,
  },
  todayDateTime: {
    backgroundColor: '#960FFF', // 오늘 날짜 배경색
    borderRadius: 10,
  },
  dayText: {
    fontSize: 14,
    color: "#666",
  },
  todayDayText: {
    color: "white",
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#333',
  },
  todayDateText: {
    color: "white",
  }
});