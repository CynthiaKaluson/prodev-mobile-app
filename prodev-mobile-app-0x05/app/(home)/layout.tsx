import { Stack } from "expo-router";
import { View } from 'react-native'

export default function HomeLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="search" />
      <Stack.Screen name="saved" />
      <Stack.Screen name="inbox" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
