// import { Text, StyleSheet } from "react-native";
// export  function ProductsImage(props) {

//     return (
//         <Image 
//         style={styles.image}    
//         source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3nsTgTB_eUZc0j-Xn-R1Ow&ust=1673488052122000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPDM3PuyvvwCFQAAAAAdAAAAABAE'}}></Image>
//         )
// }
// export default function ProductText(props) {
//     const name = props.name;
//     const dest = props.dest;
//     return (
//         <>
//             <Text style={styles.text}>{props.name}</Text>
//             <Text>{dest ? desc : 'Updating'}</Text>
//         </>
//     );
// }

// const styles = StyleSheet.create({
//     text: { 
//         fontSize: 30,
//         fontStyle: 'italic',
//         color: 'blue'
//     },
//    image:{
//     width:200,
//     height:200,
//    }

// });
// Mong muốn tạo ra 1 phần chức năng hiển thị thông tin
// Dùng chung được ở nhiều chỗ để đồng bộ về giao diện

// => Tạo ra 1 phần Text có style chung nhưng nội dung
// có thể thay đổi tuỳ chỗ sử dụng
