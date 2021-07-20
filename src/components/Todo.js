/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {addtodo, deletetodo, removetodo} from '../actions/index';

const Todo = () => {
  const my_state = useSelector(state => state.todoReducers);

  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.input}>{item.data}</Text>
        <TouchableOpacity
          onPress={() => dispatch(deletetodo(item.id))}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}>
          <View>
            <Icon name="close" size={20} color="#4285F4" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const myKeyExtractor = item => {
    return item.id;
  };

  const [inputData, setInputData] = useState('');

  return (
    <View style={styles.container}>
      <View style={{marginTop: 100, flexDirection: 'row'}}>
        <TextInput
          style={styles.input}
          value={inputData}
          onChangeText={text => setInputData(text)}
          placeholder={'Add to do'}
          placeholderTextColor={'#000'}
        />
        <TouchableOpacity
          onPress={() => dispatch(addtodo(inputData), setInputData(''))}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}>
          <View>
            <Icon name="plus" size={20} color="#4285F4" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(removetodo())}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}>
          <View>
            <Icon name="close" size={20} color="#4285F4" />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={my_state.list}
        renderItem={renderItem}
        keyExtractor={myKeyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    color: '#000',
  },
});

export default Todo;
