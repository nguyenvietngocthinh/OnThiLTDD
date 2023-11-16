import React, { useState } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { Text, View, TextInput } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export const Layout02 = () => {
  const navigator = useNavigation();
  const [newUserName, setNewUserName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Gửi yêu cầu POST để thêm tài khoản mới
      const response = await axios.post('https://6555ca1284b36e3a431e58cc.mockapi.io/api/users', {
        userName: newUserName,
        password: newPassword,
      });

      // Giữ lại chỉ các trường mong muốn từ dữ liệu trả về
      const { userName, password, id } = response.data;

      // Sử dụng dữ liệu mong muốn (userName, password, id) để thực hiện các hành động khác
      console.log({ userName, password, id });

      // Điều hướng về màn hình đăng nhập hoặc trang chủ
      navigator.navigate('Layout01');
    } catch (error) {
      console.error('Error registering:', error.message);
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ fontSize: 20, marginVertical: 20, fontFamily: 'bold' }}>Đăng ký</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text>User name: </Text>
        <TextInput
          placeholder="Enter User name"
          value={newUserName}
          onChangeText={(text) => setNewUserName(text)}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Password: </Text>
        <TextInput
          placeholder="Enter Password"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
      </View>
      <View style={{ flexDirection: 'row', gap: 50 }}>
        <TouchableOpacity>
          <Button onPress={() => navigator.goBack()} title="Trở về" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button onPress={handleRegister} title="Xác nhận" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
