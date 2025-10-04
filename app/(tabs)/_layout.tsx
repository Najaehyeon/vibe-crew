import { COLORS } from '@/constants/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  function TabBarIcon({ focused, color }) {
    return <FontAwesome color={color} />;
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
          tabBarIcon: ({ color, focused }) => {
            if (!focused) return <Octicons name="home" focused={focused} color={color} size={24} />
            else return <Octicons name="home-fill" focused={focused} color={color} size={24} />
          },
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) return <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
            else return <Ionicons name="chatbubble-ellipses" size={24} color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: 'Bookmarks',
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) return <FontAwesome name="heart-o" size={24} color={color} />
            else return <FontAwesome name="heart" size={24} color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) return <FontAwesome name="user-o" focused={focused} color={color} size={24} />
            else return <FontAwesome name="user" focused={focused} color={color} size={24} />
          },
        }}
      />
    </Tabs>
  );
}