import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Mesas = () => {
  const [tables, setTables] = useState([
    { id: 1, status: 'free' },
    { id: 2, status: 'occupied' },
    { id: 3, status: 'free' },
    { id: 4, status: 'free' },
    { id: 5, status: 'occupied' },
    { id: 6, status: 'free' },
    { id: 7, status: 'free' },
    
  ]);

  const handleTablePress = (tableId) => {
    // Implemente a lógica para lidar com o clique na mesa (reservar, pedir, etc.)
    console.log(`Clicou na mesa ${tableId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mesas do Restaurante</Text>
      <View style={styles.tablesContainer}>
        {tables.map((table) => (
          <TouchableOpacity
            key={table.id}
            style={[
              styles.table,
              { backgroundColor: table.status === 'free' ? '#4CAF50' : '#FF5733' },
            ]}
            onPress={() => handleTablePress(table.id)}
          >
            <Text style={styles.tableText}>{table.id}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  tablesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  table: {
    width: 80,
    height: 80,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  tableText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Mesas;