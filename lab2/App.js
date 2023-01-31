import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';
import { useState } from 'react';
import ProductList from './screens/ProductList';
export default function App() {
  // const [tên_biến_state, tên_pt_thay_đổi_gt_state] = useState(gt_mặc định);
  const [countState, setCountState] = useState(0);
  const [showStatus, setShowStatus] = useState(true);
  const [mota,setmota] = useState('');
  // Phần code logic:
  let name = "Phạm Thành Đạo";
  let age = 20;

  if (age > 20) {
    name = 'PDT-Người lơn';
  } else {
    name = 'Phạm Thành Đạo - Trẻ em';
  }
  // Hàm hiển thị nội dung theo mong muốn
  function showData (label = '', value = '') {
    return label + ': ' + value;
  }
  // arrow function
  const arrowShowData = (label = '', value = '') => {
    return label + ': ' + value;
  };
  const arrowMiniShowData = (label = '', value = '') => (label + ': ' + value);

  // Ví dụ về tăng biến count
  let count = 0;
  const tangCount = () => count++;

  return (
    <View style={styles.container}> 
    <ProductList />
      <Button
        title={'Bấm để Ẩn Hiện giao diện'}
        onPress={() => setShowStatus(!showStatus)}
      />
      {
        showStatus
          ? <>
              <ProductList
                onPress={() => tangCount()}
              />
            </>
          : null
      }
      <Button
        title={'Thêm Mới '}
        onPress={() => setCountState(countState + 1)}
      />
      

      <Button
      title='Bấm Để Hiện '
      onPress={() => setShowStatus(!showStatus)}
      />
      <Button 
        title='Thêm mới'
        onPress={() => setShowStatus(!showStatus)}
        />
        {
        showStatus
        ?
        <>
        <TextInput
        onChangeText={(txt) => setname(txt)}
        value = {name}
        placeholder = 'Nhập name'
        />
        <TextInput
        onChangeText={(txt) => setmota(txt)}
        value = {mota}
        placeholder = 'Nhập mô tả'
        />
<Button
        title='Lưu'
        onPress={() => setShowStatus(false)}
        />
        </>
        : null
        }

      
      <TextInput style={styles.text}>Tên:</TextInput>
      <TextInput style={styles.text}>Mô tả:</TextInput>
      <TextInput style={styles.text}>Link:</TextInput>
      <Button 
      title='Them'

      
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontSize:50,
    flex: 0,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding:30
  },
  text: {
    // tên của phần thay đổi giao diện
    color: "green",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
  },
  button:{
    color:"red",
    fontSize:30
  }
});
