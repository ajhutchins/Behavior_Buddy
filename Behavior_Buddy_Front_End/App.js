import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { SearchBar } from 'react-native-elements'
import axios from 'axios';
// import behaviors from '../Behavior_Buddy_API/controllers/behaviors'

// let behaviorArray = require('../Behavior_Buddy_API/controllers/behaviors')

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here, bub'
}

const behaviorsURL = 'http://localhost:3003/behaviors/'

// const item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// )
// const renderItem = ({ data }) => (
//   <Item title={data.title} />
// )


class App extends Component {

  state = {
    loading: false,
    behaviors: [],
    error: null,
  }


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchBehaviors: '',
  //     behaviorsURL: 'http://localhost:3003/behaviors/',
  //     isLoading: false,
  //     behaviors: [],
  //     baseURL: 'http://localhost:3003/'
  //   };
  //   this.getBehaviors = this.getBehaviors.bind(this)
  // }



  componentDidMount() {
    this.getBehaviors();
  }

  getBehaviors() {
    this.setState({ loading: true })

    axios.get(behaviorsURL).then(res => {
      console.log(res.data)
      this.setState({ behaviors: res.data })
    }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
    });
  }

  renderItemComponent = (itemData) =>
    <TouchableOpacity>
      <Text source={{}}></Text>
    </TouchableOpacity>


  search = (searchText) => {
    this.setState({ searchText: searchText });

    let filteredData = this.state.data.filter(function (item) {
      return item.title.includes(searchText);
    });

    this.setState({ filteredData: filteredData });
  };



  render() {

    const { search } = this.state;

    return (


      <View style={styles.container}>

        <SafeAreaView />

        <Text style={styles.header}>BehaviorBuddy</Text>

        <Text style={styles.searchText}>The App that puts the ABA world into your pocket! What should we learn about today?</Text>

        {/* <TextInput
          data={this.state.behaviors}
          style={styles.input}
          placeholder='enter keyword(s)'
          onChange={this.searchChanged}
          value={this.state.search}
        /> */}

        <SearchBar
          round={true}
          lightTheme={true}
          placeholder='enter keyword(s)'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={this.search}
          value={this.state.searchText}
        />


        <Text style={styles.searchText}>(Results will filter below as you type!)</Text>

        <View style={styles.loadingBar}>
          {this.state.isLoading ?
            <View style={{
              ...StyleSheet.absolutelFill,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ActivityIndicator size='large' color='black' />
            </View>
            : null}
        </View>




        <FlatList
          // data={this.state.behaviors}
          data={this.state.behaviors && this.state.behaviors.length > 0 ? this.state.behaviors : this.state.data}
          keyExtractor={(item) => `item-${item.title}`}
          // keyExtractor={(id, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.indexCards}>
              <Text style={styles.title}>
                {item.title}
              </Text>
              <br />
              <Text style={styles.words}>
                {'Definition:'}
              </Text>
              {' '}
              {item.definition}
              <br />
              <Text style={styles.words}>
                {'Methods:'}
              </Text>
              {' '}
              {item.methods}
              <br />
              <Text style={styles.words}>
                {'Resources:'}
              </Text>
              {' '}
              {item.resources}

            </Text>
          )}
        />



        <StatusBar style="auto" />
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
    fontSize: 36,
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
    // listStyleType: 'none',
    width: 300,

  },
  buttonContainer: {
    padding: 8,
    margin: 16,
    textAlign: 'center',
  },
  searchText: {
    padding: 8,
    margin: 20,
    fontStyle: 'italic',
    maxWidth: 375,
    textAlign: 'center',
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  words: {
    textDecorationLine: 'underline',
  }
});


export default App;