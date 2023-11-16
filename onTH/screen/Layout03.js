import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export const Layout03 = () => {
  const [listJobs, setListJobs] = useState([]);
  const navigator = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6555ca1284b36e3a431e58cc.mockapi.io/api/listJobs');
        setListJobs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Gửi yêu cầu DELETE để xóa công việc
      await axios.delete(`https://6555ca1284b36e3a431e58cc.mockapi.io/api/listJobs/${id}`);

      // Cập nhật danh sách công việc sau khi xóa
      const updatedList = listJobs.filter((job) => job.id !== id);
      setListJobs(updatedList);
    } catch (error) {
      console.error('Error deleting data:', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{flexDirection: 'row'}}>
        <Button 
        title='Trở về' 
        onPress={() => navigator.goBack()}></Button>
        <Text style={{ fontSize: 20, marginVertical: 20, fontFamily: 'bold' }}>Danh sách công việc</Text>
      </View>
      <FlatList
        data={listJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{`ID: ${item.id}`}</Text>
            <Text>{`Tên công việc: ${item.jobName}`}</Text>
            <Text>{`Mô tả: ${item.discription}`}</Text>
            <View style={{flexDirection:'row', gap: 50}}>
            <TouchableOpacity >
              <Button 
              onPress={() => handleDelete(item.id)}
              title="Xóa công việc" />
            </TouchableOpacity>

            <TouchableOpacity >
              <Button 
              onPress={() => navigator.navigate('Layout04')}
              title="Cập nhật công việc" />
            </TouchableOpacity>
            </View>
            
          </View>
        )}
      />
    </View>
  );
};
