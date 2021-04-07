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

let cancel = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here, bub'
}

// const returnObjectData = this.props.data.map(function(data, idx) {
//   return <Text key={idx}>{data.title}</Text>
// })

const behaviorsURL = 'http://localhost:3003/behaviors/'
const behaviorsFind = 'http://localhost:3003/behaviors/find/'

class App extends Component {

  state = {
    query: '',
    results: {},
    loading: false,
    message: '',
    behaviors: [],
  }


  // async componentDidMount() {
  //   const { data: behaviors } = await axios.get(
  //       behaviorsURL
  //   );
  //   this.setState({ behaviors });
  // }


  componentDidMount() {
    this.getBehaviors();
  }


  getBehaviors = () => {
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


  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query, results: {}, message: '' })
    } else {
      this.setState({ query, loading: true, message: '' },
      () => {
        this.getSearchResults(1, query);
      })
    }
  }

  getSearchResults = (updatedPageNo = '', query) => {
    const pageNumber = updatedPageNo ? `${updatedPageNo}` : '';
    const searchURL = `${behaviorsFind}${query}`;

    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    axios
      .get(searchURL, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFoundMsg = !res.data.length ? 'There are no matching search results. Please try again.' : '';
        this.setState({
          results: res.data.map(function(item, i){
            return(
              item.title
            )
          }),
          message: resultNotFoundMsg,
          loading: false,
        })
      }).catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: 'Failed to fetch results. Please check network.'
          })
        }
      })
  }



  render() {

    return (


      <View style={styles.container}>

        <SafeAreaView />

        <Text style={styles.header}>BehaviorBuddy</Text>

        <Text style={styles.searchText}>The App that puts the ABA world into your pocket! What should we learn about today?</Text>

        <TextInput
          // data={this.state.behaviors}
          style={styles.input}
          type='text'
          value={this.state.query}
          id='search-input'
          placeholder='enter keyword(s)'
          onChange={this.handleOnInputChange}
        />
        <Text>
          {this.state.query}
        </Text>

        {/* <SearchBar
          round={true}
          lightTheme={true}
          placeholder='enter keyword(s)'
          autoCapitalize='none'
          autoCorrect={false} */}
        {/* // onChange={this.searchChanged}
          // value={this.state.search}
        // /> */}


        <Text style={styles.searchText}>(Results will filter below as you type!)</Text>



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