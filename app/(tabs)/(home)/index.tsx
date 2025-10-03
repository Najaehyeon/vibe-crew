import { styles } from '@/styles/home.styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'expo-image';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

const generateDates = () => {
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
          <TouchableOpacity>
            <FontAwesome name='angle-down' size={24}/>
          </TouchableOpacity>
        </View>
        <View style={styles.filterMenu}>
          <Text style={styles.filterMenuText}>지역</Text>
          <TouchableOpacity>
            <FontAwesome name='angle-down' size={24}/>
          </TouchableOpacity>
        </View>
        <View style={styles.filterMenu}>
          <Text style={styles.filterMenuText}>인원</Text>
          <TouchableOpacity>
            <FontAwesome name='angle-down' size={24}/>
          </TouchableOpacity>
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
              <TouchableOpacity key={index}>
                <View
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
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>

      {/* 게시물 리스트 */}
      <ScrollView>
        <View style={styles.post}>
          <Image
            style={styles.postImg}
            source="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
          />
          <View style={styles.postContent}>
            <Text
              style={styles.postTitle}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
            한강에서 치맥할 사람 구합니다~~~
            </Text>
            <View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>일시</Text>
                <Text style={styles.postConditionText}>9.11(일) 12:00</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>위치</Text>
                <Text style={styles.postConditionText}>한강(여의도역 5번 출구 앞)</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>나이</Text>
                <Text style={styles.postConditionText}>97년생 ~ 04년생</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>인원</Text>
                <Text style={styles.postConditionText}>남자 3/4 | 여자 3/4 참여중</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.post}>
          <Image
            style={styles.postImg}
            source="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
          />
          <View style={styles.postContent}>
            <Text
              style={styles.postTitle}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
            한강에서 치맥할 사람 구합니다~~~
            </Text>
            <View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>일시</Text>
                <Text style={styles.postConditionText}>9.11(일) 12:00</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>위치</Text>
                <Text style={styles.postConditionText}>한강(여의도역 5번 출구 앞)</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>나이</Text>
                <Text style={styles.postConditionText}>97년생 ~ 04년생</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>인원</Text>
                <Text style={styles.postConditionText}>남자 3/4 | 여자 3/4 참여중</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.post}>
          <Image
            style={styles.postImg}
            source="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
          />
          <View style={styles.postContent}>
            <Text
              style={styles.postTitle}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
            한강에서 치맥할 사람 구합니다~~~
            </Text>
            <View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>일시</Text>
                <Text style={styles.postConditionText}>9.11(일) 12:00</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>위치</Text>
                <Text style={styles.postConditionText}>한강(여의도역 5번 출구 앞)</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>나이</Text>
                <Text style={styles.postConditionText}>97년생 ~ 04년생</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>인원</Text>
                <Text style={styles.postConditionText}>남자 3/4 | 여자 3/4 참여중</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.post}>
          <Image
            style={styles.postImg}
            source="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
          />
          <View style={styles.postContent}>
            <Text
              style={styles.postTitle}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
            한강에서 치맥할 사람 구합니다~~~
            </Text>
            <View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>일시</Text>
                <Text style={styles.postConditionText}>9.11(일) 12:00</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>위치</Text>
                <Text style={styles.postConditionText}>한강(여의도역 5번 출구 앞)</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>나이</Text>
                <Text style={styles.postConditionText}>97년생 ~ 04년생</Text>
              </View>
              <View style={styles.postCondition}>
                <Text style={styles.postConditionText}>인원</Text>
                <Text style={styles.postConditionText}>남자 3/4 | 여자 3/4 참여중</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}


