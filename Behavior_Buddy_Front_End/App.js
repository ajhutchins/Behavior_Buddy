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
// import { ListItem } from 'react-native-elements'
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
    behaviors: [],
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

  async componentDidMount() {
    this.getBehaviors();
  }


  getBehaviors() {
    axios.get(behaviorsURL).then(res => {
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

  // clickHandler = () => {
  //   // search through behaviors
  // }

  // pressHandler = (key) => {
  //   console.log(key)
  // }


  render() {
    return (
      <View style={styles.container}>

        <SafeAreaView />

        <Text style={styles.header}>BehaviorBuddy</Text>

        <Text style={styles.searchText}>The App that puts the ABA world into your pocket! What should we learn about today?</Text>

        <TextInput
          data={this.state.behaviors}
          style={styles.input}
          placeholder='enter keyword(s)'
        // onChangeText={(val) => searchIndexCards(val)}
        />

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


        <View>
          {this.state.behaviors.map(data => (
            <Text key={data.id} style={styles.indexCards}>
              {' ------------------------------ '}
              <br />
              <Text style={styles.title}>{data.title}
              </Text>
              <br />
              {data.definition}
              <br />
              {data.methods}
              <br />
              {data.resources}
              <br />
              {' ------------------------------ '}
            </Text>
          ))}
        </View>


        {/* <SafeAreaView style={styles.container2}>
          <FlatList
            data={this.state.behaviors}
            renderItem={renderItem}
            keyExtractor={data => data.id}
          />
        </SafeAreaView> */}

        {/* <View> */}

        {/* <FlatList
          data={this.state.behaviors.map(data =>)}
          keyExtractor={(item, index) => index.toString}
          renderItem={({ item }) => {
            return ( */}
        {/* // <ListItem */}
        {/* //   title={`${item.title}`}
              //   onPress={() => { }}
              // />
            // )
          // }}
        // ListEmptyComponent={() => ( */}
        {/* //   <View style={{ marginTop: 50 }}>
        //   <Text style={styles.listText}>No result(s) found...</Text>
        //   </View>
        // )}
        // /> */}

        {/* // </View> */}




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
  }
});


export default App;