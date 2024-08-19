import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Tabs } from 'expo-router';
import { FAB } from 'react-native-paper';
import FloatingButton from '@/components/FloatButton';
import { theme } from '@/global/styles/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function TabLayout() {
    return (
        <View style={styles.container}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: theme.colors.navy,
                    tabBarInactiveTintColor: theme.colors.lightPurple,
                    tabBarLabelStyle: {
                        fontFamily: 'Poppins-Semibold',
                        fontSize: 12,
                        paddingBottom: 8,
                        color: theme.colors.lightPurple
                    },
                    tabBarStyle: {
                        height: 70,
                        elevation: 0,
                        borderTopWidth: 0
                    },
                }}
            >
                <Tabs.Screen
                    name='index'
                    options={{
                        headerShown: false,
                        title: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Octicons
                                name="home"
                                size={26}
                                color={color}
                            />
                        )
                    }}

                />

                <Tabs.Screen
                    name='prescriptions'
                    options={{
                        headerShown: false,
                        title: 'Prescriptions',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name="notes-medical"
                                size={26}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='listReminders'
                    options={{
                        headerShown: false,
                        title: 'Medications',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="pill"
                                size={28}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='inputs'
                    options={{
                        headerShown: false,
                        title: 'Reminders',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="timer-outline"
                                size={28}
                                color={color}
                            />
                        )
                    }}
                />
            </Tabs>

            <FloatingButton />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
