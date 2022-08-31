import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [buyItem, setBuyItem] = useState('');
  const [items, setItems] = useState([]);


  const saveItems = (newItem) => {
    setItems([...items, { key: newItem }]);
  }

  const clearItems = () => {
    setItems([]);
  }

  const handleAddItem = () => {
    saveItems(buyItem);
  }
  
  const handleClearItems = () => {
    clearItems();
  }

  return (
    <View style={styles.container}>

      <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
  
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={buyItem => setBuyItem(buyItem)}
        value={buyItem}
        keyboardType="text"
      />
      </View>

      <View style={{flex: .5, flexDirection: 'row', alignItems: 'center'}}>
        <Button onPress={handleAddItem}title="Add" />
        <Button onPress={handleClearItems}title="Clear" />
      </View>

      <View style={{flex: 2, alignItems: 'flex-start'}}>
        <Text style={{fontWeight: 'bold', color: 'blue'}}>Shopping List</Text>
        <FlatList style={styles.list} 
          data={items}
          renderItem={({ item }) => <Text>{ item.key }</Text>}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
