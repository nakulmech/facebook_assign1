import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TABS = [
  { key: 'Home', icon: 'home' },
  { key: 'Friends', icon: 'people' },
  { key: 'Videos', icon: 'play-circle' },
  { key: 'Profile', icon: 'person-circle' },
  { key: 'Notifications', icon: 'notifications' },
  { key: 'More', icon: 'menu' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  function renderScreen() {
    if (activeTab === 'Home') {
      return <HomeScreen />;
    }
    return (
      <View style={styles.center}>        
        <Text style={styles.screenTitle}>{activeTab}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Tab bar at top */}
      <View style={styles.tabBar}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setActiveTab(tab.key)}
            style={styles.tabButton}
          >
            <Ionicons
              name={tab.icon}
              size={24}
              color={activeTab === tab.key ? '#1877f2' : '#444'}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Current screen */}
      {renderScreen()}
    </SafeAreaView>
  );
}

function HomeScreen() {
  // Constants defined by the developer
  const LOGO_URL =
    'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png';
  const MY_AVATAR = 'https://randomuser.me/api/portraits/men/32.jpg';

  // Stories data: name + image
  const stories = [
    { name: 'Alex', image: 'https://randomuser.me/api/portraits/men/44.jpg' },
    { name: 'Nel', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { name: 'Samantha', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Jhon', image: 'https://randomuser.me/api/portraits/men/85.jpg' },
    { name: 'Nia', image: 'https://randomuser.me/api/portraits/women/55.jpg' },
  ];

  // Post data
  const POST_USER = { username: 'peter_433', avatar: MY_AVATAR };
  const POST_TEXT = 'Checked one off the bucket list today — made it to London Bridge!';
  const POST_IMAGE =
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60';

  return (
    <ScrollView style={styles.content}>
      {/* Header with logo and icons */}
      <View style={styles.header}>
        <Image source={{ uri: LOGO_URL }} style={styles.logoImage} />
        <View style={styles.headerIcons}>
          <Ionicons name="headset" size={24} />
          <Ionicons name="search" size={24} />
          <MaterialIcons name="message" size={24} />
        </View>
      </View>

      {/* New post input */}
      <View style={styles.newPostRow}>
        <Image source={{ uri: MY_AVATAR }} style={styles.avatar} />
        <TextInput
          placeholder="Write something here..."
          style={styles.textInput}
        />
        <MaterialIcons name="photo" size={24} />
      </View>

      {/* Stories strip */}
      <Text style={styles.sectionTitle}>Stories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesScroll}
      >
        {stories.map((story, index) => (
          <View key={index} style={styles.storyBox}>
            <Image source={{ uri: story.image }} style={styles.storyImage} />
            <Text numberOfLines={1} style={styles.storyName}>
              {story.name}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Sample post */}
      <View style={styles.postCard}>
        <View style={styles.postHeaderRow}>
          <Image source={{ uri: POST_USER.avatar }} style={styles.avatar} />
          <View style={styles.postUserInfo}>
            <Text style={styles.postUserName}>{POST_USER.username}</Text>
            <Text style={styles.postSubtitle}>{POST_TEXT}</Text>
          </View>
        </View>
        <Image source={{ uri: POST_IMAGE }} style={styles.postMainImage} />
        <View style={styles.postActionsRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="thumbs-up-outline" size={20} />
            <Text style={styles.actionLabel}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={20} />
            <Text style={styles.actionLabel}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="send-outline" size={20} />
            <Text style={styles.actionLabel}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1 },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  tabButton: { padding: 4 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  screenTitle: { fontSize: 24, fontWeight: '600' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  logoImage: { width: 100, height: 30, resizeMode: 'contain' },
  headerIcons: { flexDirection: 'row', width: 100, justifyContent: 'space-between' },

  newPostRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  textInput: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },

  sectionTitle: {
    fontWeight: '600',
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  storiesScroll: { paddingLeft: 12, marginBottom: 16 },
  storyBox: { marginRight: 12, alignItems: 'center' },
  storyImage: { width: 80, height: 120, borderRadius: 8 },
  storyName: { marginTop: 4, width: 80, textAlign: 'center', fontSize: 12 },

  postCard: { marginBottom: 24 },
  postHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  postUserInfo: { flex: 1, marginLeft: 8 },
  postUserName: { fontWeight: '600' },
  postSubtitle: { color: '#555' },
  postMainImage: { width: '100%', height: 200 },
  postActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  actionButton: { flexDirection: 'row', alignItems: 'center' },
  actionLabel: { marginLeft: 4, fontSize: 14 },
});