import { COLORS } from '@/constants/theme';
import { styles } from '@/styles/home.styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createClient } from '@supabase/supabase-js';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
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
  const supabase = createClient('https://kkzhsaqigwpuzgvszvuz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtremhzYXFpZ3dwdXpndnN6dnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTE4NTMsImV4cCI6MjA3NTEyNzg1M30.2_EvGzGXY9dPZrvh4hphWdMYv2miSs0oEBgY8-TVnJQ');
  const insets = useSafeAreaInsets();
  const datesData = generateDates();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select();
      
      if (error) {
        console.error(error);
        return;
      }
      setPosts(data || []);
    }
    getPosts();
  }, [])

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
        {
          posts.map((post) => (
            <TouchableOpacity style={styles.post} activeOpacity={0.8} key={post.id}>
              <TouchableOpacity style={styles.postLike}>
                <FontAwesome name='heart-o' size={20} color={COLORS.white}/>
              </TouchableOpacity>
              <Image
                style={styles.postImg}
                source={post.image}
                contentFit="cover"
              />
              <View style={styles.postContent}>
                <Text
                  style={styles.postTitle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                {post.title}
                </Text>
                <View>
                  <View style={styles.postCondition}>
                    <Text style={styles.postConditionTitle}>일시</Text>
                    <Text style={styles.postConditionText}>{post.date}</Text>
                  </View>
                  <View style={styles.postCondition}>
                    <Text style={styles.postConditionTitle}>위치</Text>
                    <Text style={styles.postConditionText}>{post.location}</Text>
                  </View>
                  <View style={styles.postCondition}>
                    <Text style={styles.postConditionTitle}>나이</Text>
                    <Text style={styles.postConditionText}>{post.age}</Text>
                  </View>
                  <View style={styles.postCondition}>
                    <Text style={styles.postConditionTitle}>인원</Text>
                    <Text style={styles.postConditionText}>{post.headcount}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
        
      </ScrollView>
    </View>
  );
}


