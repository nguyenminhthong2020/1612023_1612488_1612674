/* eslint-disable */
import React, { useState, useEffect, useMemo } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'
import FastImage from 'react-native-fast-image'

const ImageDetail = props => {
  const [width, setWidth] = useState(100)

  const onZoomIn = () => setWidth(width * 1.2)
  const onZoomOut = () => setWidth(width > 100 ? width / 1.2 : width)

  return (
    <View>
      <View style={{ marginBottom: 25, alignItems: 'center', marginTop: 15}}>
        <Text style={{ marginBottom: 5, fontSize: 18 }}>
          ID: {`${props.route.params.id}`}
        </Text>
        <Text style={{ fontSize: 18 }}>
          Photographer: {`${props.route.params.photographer}`}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}
      >
        <Pressable onPress={onZoomIn}>
          <Feather name="zoom-in" size={35} />
        </Pressable>
        <Pressable onPress={onZoomOut}>
          <Feather name="zoom-out" size={35} />
        </Pressable>
      </View>
      <View style={{ alignItems: 'center' }}>
        <FastImage
          style={{ width: '100%', borderRadius: 0, height: width * 2 }}
          resizeMode={FastImage.resizeMode.contain}
          source={{
            uri: `${props.route.params.uri}?auto=compress&cs=tinysrgb?auto=compress&cs=tinysrgb&w=${width}`, //uri: original
            priority: FastImage.priority.normal,
          }}
        />
      </View>
    </View>
  )
}

export default ImageDetail
