import { FlatList, Text, StyleSheet } from "react-native";
export default function ProductList(props) {
    const productList = [
        { id: 1, name: 'iphone 12', price: 10000000 },
        { id: 2, name: 'iphone 11', price: 20000000 },
     
    ];


    return (
        <FlatList data={productList}
            renderItem={({ item }) => (
                <>
                    <Text>Tên: {item.name}</Text>
                    <Text>Giá :{item.price} VND</Text>
                </>
            )}
            //
            keyExtractor={(item) => item.id}
        />


    )


}
const styles = StyleSheet.create({});
