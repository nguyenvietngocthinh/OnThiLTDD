import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export const Layout04 = ({ route }) => {
  const [newJobName, setNewJobName] = useState('');
  const [newDiscription, setNewDiscription] = useState('');
  const [jobId, setJobId] = useState('');
  const navigator = useNavigation();

  useEffect(() => {
    // Kiểm tra xem route.params có tồn tại và có chứa 'jobName' không
    if (route.params && route.params.jobName) {
      // Lấy dữ liệu công việc từ màn hình trước
      const { jobName, discription, id } = route.params;
      setNewJobName(jobName);
      setNewDiscription(discription);
      setJobId(id);
    }
  }, [route.params]);

  const handleUpdate = async () => {
    try {
      // Gửi yêu cầu PUT để cập nhật công việc
      await axios.put(`https://6555ca1284b36e3a431e58cc.mockapi.io/api/listJobs/${jobId}`, {
        jobName: newJobName,
        discription: newDiscription,
      });

      // Điều hướng về màn hình danh sách công việc sau khi cập nhật
      navigator.navigate('Layout03');
    } catch (error) {
      console.error('Error updating data:', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginVertical: 20, fontFamily: 'bold' }}>Cập nhật công việc</Text>
      <View>
        <Text>Tên công việc:</Text>
        <TextInput
          value={newJobName}
          onChangeText={(text) => setNewJobName(text)}
          placeholder="Nhập tên công việc mới"
        />
        <Text>Mô tả:</Text>
        <TextInput
          value={newDiscription}
          onChangeText={(text) => setNewDiscription(text)}
          placeholder="Nhập mô tả mới"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button onPress={handleUpdate} title="Cập nhật công việc" />
      </View>
    </View>
  );
};
