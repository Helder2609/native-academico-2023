import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Pedidos from './Pedidos';
import PedidosForm from './PedidosForm';


const Stack = createNativeStackNavigator();

const PedidoStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='pedidos'>
                <Stack.Screen name="pedidos" component={Pedidos} options={{ title: 'pedidos' }} />
                <Stack.Screen name="pedidos-form" component={PedidosForm} options={{ title: 'pedidos' }} />
            </Stack.Navigator>
        </>
    )
}

export default PedidoStack