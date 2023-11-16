import React, { useEffect, useState } from 'react'
import { Button, TextInput, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';




export const Layout01 = () => {
    const [dataMap, setDataMap] = useState([]);
    const [userName, setUserName] = useState('userName1');
    const [password, setPassword] = useState('password1');
    const navigator = useNavigation();

    useEffect(() => {
      const renderData = async () => {
        const dataRender = await axios.get(`https://6555ca1284b36e3a431e58cc.mockapi.io/api/users`)
        setDataMap(dataRender.data)
      }
      renderData();
    },[])

    const checkLogin = (a, u, p) => {
      if (dataMap.length === 0) {
          console.log('Data is empty');
          return;
      }
  
      const found = dataMap.some((item) => {
          return item.userName === u && item.password === p;
      });
  
      if (found) {
          navigator.navigate('Layout03');
      } else {
          // Xử lý trường hợp không tìm thấy
          console.log('Invalid username or password');
      }
  };


  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
    <Text style={{fontSize: 20, marginVertical: 20, fontFamily:'bold'}}>Đăng nhập</Text>
    <View style={{flexDirection: 'row'}}>
      <Text>User name: </Text>
      <TextInput value={userName} onChangeText={setUserName} placeholder='Enter User name'></TextInput>
    </View>
    <View style={{flexDirection: 'row'}}>
      <Text>Password: </Text>
      <TextInput value={password} onChangeText={setPassword} placeholder='Enter Password'></TextInput>
    </View>
    <View style={{flexDirection: 'row', gap: 50}}>
      <TouchableOpacity>
        <Button 
         onPress={() => navigator.navigate('Layout02')}
          title='Đăng ký'
        ></Button>
      </TouchableOpacity>
      <TouchableOpacity>
        <Button 
        onPress={() => checkLogin(dataMap, userName, password)}
          title='Đăng nhập'
        ></Button>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text style={{color: 'blue', marginVertical: 20}}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}
