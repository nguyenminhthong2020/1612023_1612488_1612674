/* eslint-disable */
import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { color } from 'react-native-reanimated'
import { getImagesAsync } from '@/Store/Images'
import FastImage from 'react-native-fast-image'

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.theme.darkMode)
  const [currentPage, setCurrentPage] = useState(1)

  const listImages = useSelector(state => state.images)
  const arrUri = listImages.map(i => i.src.original)
  // console.log(arrUri);
  console.log('currentPage ' + currentPage)

  useEffect(() => {
    dispatch(
      getImagesAsync({
        per_page: 10,
        page: 1,
      }),
    )
  }, [])

  useEffect(() => {
    dispatch(
      getImagesAsync({
        per_page: 10 * currentPage,
        page: 1,
      }),
    )
  }, [currentPage, dispatch])

  const [userId, setUserId] = useState('9')
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  const loadMoreItem = () => {
    console.log('mới nè: ', currentPage + 1)
    setCurrentPage(currentPage + 1)
  }

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          height: 170,
          marginHorizontal: '10%',
          marginBottom: 25,
          borderWidth: 2,
          borderColor: isDarkMode ? 'yellow' : 'black',
        }}
      >
        <Pressable onPress={() => alert(`Ảnh ${item}`)}>
          {/* <Text style={{ color: 'red' }}>{`${item}?auto=compress&cs=tinysrgb&h=170`}</Text> */}
          <FastImage
            style={{ width: '100%', height: 170, borderRadius: 0 }}
            resizeMode={FastImage.resizeMode.cover}
            source={{
              uri: `${item}?auto=compress&cs=tinysrgb&h=170`,
              priority: FastImage.priority.normal,
            }}
          />
        </Pressable>
      </View>
    )
  }

  const renderFooter = () => {
    return (
      <View style={{ marginVertical: 16 }}>
        <ActivityIndicator size="large" color="aaa" />
      </View>
    )
  }

  const showListImage = () => {
    return (
      <FlatList
        getItemLayout={(_, index) => ({
          length: 200,
          offset: 200 * index,
          index,
        })}
        removeClippedSubviews={true}
        windowSize={5}
        style={{ marginBottom: 120, marginTop: 10 }}
        showsVerticalScrollIndicator={true}
        initialNumToRender={10}
        data={arrUri}
        keyExtractor={i => i}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReached={() => loadMoreItem()}
        onEndReachedThreshold={0.5}
      />
    )
  }

  return (
    <View>
      <Text
        style={[
          Fonts.textRegular,
          Gutters.smallBMargin,
          { marginTop: 1, marginLeft: '10%' },
        ]}
      >
        DarkMode :
      </Text>
      <View style={{ flexDirection: 'row', marginLeft: '10%' }}>
        <TouchableOpacity
          style={[Common.button.rounded, Gutters.regularBMargin]}
          onPress={() => onChangeTheme({ darkMode: null })}
        >
          <Text style={Fonts.textRegular}>Auto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Common.button.outlineRounded, Gutters.regularBMargin]}
          onPress={() => onChangeTheme({ darkMode: true })}
        >
          <Text style={Fonts.textRegular}>Dark</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Common.button.outline, Gutters.regularBMargin]}
          onPress={() => onChangeTheme({ darkMode: false })}
        >
          <Text style={Fonts.textRegular}>Light</Text>
        </TouchableOpacity>
      </View>
      {showListImage()}
    </View>
  )
}

export default ExampleContainer
