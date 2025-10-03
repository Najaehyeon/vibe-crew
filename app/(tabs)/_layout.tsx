import { COLORS } from '@/constants/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  function TabBarIcon({ name, focused, color, size }) {
    let iconName = name;
    
    if (focused) {
      if (name === 'comment-o') iconName = 'comment';
      else if (name === 'bookmark-o') iconName = 'bookmark';
      else if (name === 'user-o') iconName = 'user';
    }
    
    return <FontAwesome size={size} name={iconName} color={color} />;
  }
  
  return (
    <Tabs
      screenOptions={{    
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 8,
          backgroundColor: 'white',
        }
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" focused={focused} color={color} size={32} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="comment-o" focused={focused} color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: 'Bookmarks',
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="bookmark-o" focused={focused} color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="user-o" focused={focused} color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}