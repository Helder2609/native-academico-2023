import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CursoStack from './screens/cursos/CursoStack';
import AlunosStack from './screens/alunos/AlunosStack';
import DisciplinaStack from './screens/disciplinas/DisciplinasStack';
import Carrinho from './screens/carrinho/Carrinho';
import Mesas from './screens/mesas/Mesas';
import Reserva from './screens/reserva/Reserva';
import ReservaStack from './screens/reserva/ReservaStack';
import PedidoStack from './screens/entrega/PedidoStack';
import Icon from 'react-native-vector-icons/AntDesign'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator initialRouteName='Disciplinas'>
            <Tab.Screen
              name="Produtos" 
              component={CursoStack}
              options={{
                tabBarIcon: () => (

                  <Icon name="inbox" size={26}/>
                ),
              }}
            />
            <Tab.Screen
              name="Menu" 
              component={DisciplinaStack}
              options={{
                tabBarIcon: () => (
                 
                  <MaterialCommunityIcons name="menu" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Mesas" 
              component={Mesas}
              options={{
                tabBarIcon: () => (
                  <Icon name="inbox" size={26}/>
                ),
              }}
            />
            <Tab.Screen
              name="Reserva" 
              component={ReservaStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="table-large" size={26} />
                  ),
                }}
            />
            <Tab.Screen
              name="Pedidos" 
              component={PedidoStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="reorder-horizontal" size={26} />
                  
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}