import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import ReservaForm from './ReservaForm'
import Reserva from './Reserva';


const Stack = createNativeStackNavigator();

const ReservaStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='reserva'>
                <Stack.Screen name="reserva" component={Reserva} options={{ title: 'Reserva' }} />
                <Stack.Screen name="reserva-form" component={ReservaForm} options={{ title: 'Reserva' }} />
            </Stack.Navigator>
        </>
    )
}

export default ReservaStack