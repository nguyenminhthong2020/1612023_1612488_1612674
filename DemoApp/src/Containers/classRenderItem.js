// /* eslint-disable no-alert */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react/jsx-no-undef */
// import React from "react"
// import FastImage from 'react-native-fast-image'


// export default class classRenderItem extends React.PureComponent{
//     constructor(props) {
//         super(props)
//       }

//     render(){
//         <View
//         style={{
//           height: 170,
//           marginHorizontal: '10%',
//           marginBottom: 25,
//           borderWidth: 2,
//           borderColor: 'black',
//         }}
//       >
//         <Pressable onPress={() => alert(`Ảnh ${this.props.index}`)}>
//           {/* <Text style={{ color: 'red' }}>{`${item}?auto=compress&cs=tinysrgb&h=170`}</Text> */}
//           <FastImage
//             style={{ width: '100%', height: 170, borderRadius: 0 }}
//             resizeMode={FastImage.resizeMode.cover}
//             source={{
//               uri: `${this.props.item}?auto=compress&cs=tinysrgb&h=170`,
//               priority: FastImage.priority.normal,
//             }}
//           />
//         </Pressable>
//       </View>
//     }
// }