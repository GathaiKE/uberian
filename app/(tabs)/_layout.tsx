import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

export default function Tabslayout() {

    const colorScheme = useColorScheme()
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? "home" : "home-outline"} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="services"
                options={{
                    title: "Services",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? "apps" : "apps-outline"} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="activity"
                options={{
                    title: "Activity",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? "document" : "document-outline"} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="accounts"
                options={{
                    title: "Account",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? "person" : "person-outline"} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({})