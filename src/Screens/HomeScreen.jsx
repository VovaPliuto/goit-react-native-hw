import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import HeaderLogoutBtn from "../components/HeaderLogoutBtn";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        initialRouteName: "PostsScreen",
        tabBarIcon: ({ focused, color, size = 24 }) => {
          let iconName = "user";
          let bgc = "#ffffff";

          if (route.name === "PostsScreen") {
            iconName = "grid-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = "add";
          }

          if (focused) {
            bgc = "#FF6C00";
          }

          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: bgc,
                width: 70,
                height: 40,
                borderRadius: 20,
              }}
            >
              {route.name !== "ProfileScreen" ? (
                <Ionicons name={iconName} color={color} size={size} />
              ) : (
                <Feather name={iconName} color={color} size={size} />
              )}
            </View>
          );
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#212121cc",
        tabBarShowLabel: false,
        tabBarStyle: { height: 58, justifyContent: "space-around" },
      })}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerRight: () => (
          <HeaderLogoutBtn/>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeScreen;
