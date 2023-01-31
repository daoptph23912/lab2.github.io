import { FlatList, Text, StyleSheet } from "react-native";
export default function ProductList(props) {
    const productList = [
        { id: 1, name: 'Phạm Thành Đạo', lop: 'CP17302', Msv:23912 },
       
     
    ];



    return (
        <FlatList data={productList}
            renderItem={({ item }) => (
                <>
                    <Text>Tên: {item.name}</Text>
                    <Text>Lớp :{item.lop} </Text>
                    <Text>Mã sinh viên :{item.Msv}</Text>
                </>
            )}
            //
            keyExtractor={(item) => item.id}
        />


    )


}
const styles = StyleSheet.create({
    text: {
        // tên của phần thay đổi giao diện
        color: "red",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 30,
      },
});

