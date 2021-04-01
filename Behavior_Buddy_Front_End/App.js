import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  ListItem,
  TouchableOpacity
} from 'react-native';
// import behaviors from '../Behavior_Buddy_API/controllers/behaviors'

// let behaviorArray = require('../Behavior_Buddy_API/controllers/behaviors')

let baseURL = ''

if(process.env.NODE_ENV === 'development'){
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here, bub'
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      behaviors: [],
    };
    this.getBehaviors = this.getBehaviors.bind(this)
  }

  async componentDidMount() {
    this.getBehaviors();
  }


  getBehaviors() {
    fetch(baseURL + '/behaviors')
      .then(data => { return data.json() }, err => console.log(err))
      .then(parsedData => this.setState({ behaviors: parsedData }), err => console.log(err))
  }

  renderItemComponent = (itemData) =>
    <TouchableOpacity>
      <Text source={{}}></Text>
    </TouchableOpacity>

  clickHandler = () => {
    // search through behaviors
  }

  pressHandler = (key) => {
    console.log(key)
  }


  render () {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <Text style={styles.header}>BehaviorBuddy</Text>

        <Text style={styles.searchText}>What should we learn about today?</Text>

        <TextInput 
          data={this.state.data}
          style={styles.input}
          placeholder='enter keyword(s)'
          // onChangeText={(val) => searchIndexCards(val)}
          />

        <View style={styles.loadingBar}>
          {this.state.isLoading?
            <View style={{ 
              ...StyleSheet.absolutelFill, 
              alignItems: 'center', 
              justifyContent: 'center'
              }}>
              <ActivityIndicator size='large' color='black' />
            </View>
          : null }
        </View>

        <View>

          <FlatList
            data={this.state.behaviors}
            renderItem={ this.renderItem }
            ListEmptyComponent={() => (
              <View style={{ marginTop: 50 }}>
              <Text style={styles.listText}>No result(s) found...</Text>
              </View>
            )}
          />

        </View>

        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }
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
    marginTop: 350,
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
  },
  loadingBar: {
    flex: 1,
    padding: 25,
  },
  listText: {
    color: 'black'
  }
});


export default App;