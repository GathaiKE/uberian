import { Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export default function Container({children, className}: ContainerProps) {
    return (
        <SafeAreaView style={[tw`bg-white flex-1 ${Platform.OS === 'android' ? 'mt-10':'mt-0'}`, className? tw`${className}`:null]}>
            {children}
        </SafeAreaView>
    )
}