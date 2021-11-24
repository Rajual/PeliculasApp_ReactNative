import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'

export const HomeScreens = () => {
    
   const navigation= useNavigation()

    return (
        <View>
            <Text>Home Screen</Text>

            <Button 
            title='Ir detalles'
            onPress={()=>navigation.navigate('Details')}
            />
        </View>
    )
}
