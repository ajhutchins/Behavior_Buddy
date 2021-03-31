import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [indexCards, setCards] = useState([
    { title: 'Applied Behavior Analysis (ABA)', key: '1' },
    { title: 'Adjunctive Behavior', key: '2' },
    { title: 'Aversion Therapy', key: '3' },
    { title: 'Aversive Stimulus', key: '4' },
    { title: 'Backward Chaining', key: '5' },
    { title: 'Baseline', key: '6' },
    { title: 'Behavrioal Repertoire', key: '7' },
    { title: 'Changing Criterion', key: '8' },
    { title: 'Classical Conditioning', key: '9' },
    { title: 'Compund Stimulus', key: '10' },
    { title: 'Concurrent Behavioral Contingency', key: '11' },
    { title: 'Conditioned Response', key: '12' },
    { title: 'Conditioned Reinforcer(s)', key: '13' },
    { title: 'Contingency-Shaped Behavior', key: '14' },
    { title: 'Continuous Reinforcement', key: '15' },
    { title: 'Dependent Variable', key: '16' },
    { title: 'Deprivation', key: '17' },
    { title: 'Discrete Trial Training', key: '18' },
    { title: 'Discrimination', key: '19' },
    { title: 'Displacement', key: '20' },
    { title: 'Echolalia', key: '21' },
  ])


  const clickHandler = () => {
    // search through indexCards
  }

  const pressHandler = (key) => {
    console.log(key)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>BehaviorBuddies</Text>

      <Text style={styles.searchText}>What should we learn about today?</Text>
      <TextInput 
        style={styles.input}
        placeholder='enter keyword(s)'
        // onChangeText={(val) => searchIndexCards(val)}
        />

      <View style={styles.buttonContainer}>
          <Button title='SEARCH' onPress={clickHandler}/>
      </View>

      <View>

        <FlatList
          data={indexCards}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
              <Text style={styles.indexCards}>{item.title}</Text>
            </TouchableOpacity>
          )}
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
  },
  header: {
    fontWeight: 'bold',
    fontSize: 34,
    marginTop: 50,
  },
  indexCards: {
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: ('solid'),
    padding: 40,
    margin: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 8,
    margin: 16,
    textAlign: 'center',
  },
  searchText: {
    padding: 8,
    margin: 20,
  },
  input: {
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: ('solid'),
    height: 34,
    width: 200,
    paddingLeft: 8,
  }
});
