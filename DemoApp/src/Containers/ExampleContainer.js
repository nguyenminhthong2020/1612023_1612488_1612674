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
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated'
import { getImagesAsync, testDispatch} from '@/Store/Images'
import FastImage from 'react-native-fast-image';

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.theme.darkMode)

  useEffect(() => {
     dispatch(getImagesAsync({
       per_page: 8,
       page:1
     }))
  }, [])
  const listImages = useSelector(state => state.images);
  const arrUri = listImages.map(i => i.src.original);
  //alert(listImages[0].src.original);
  // list image
  const showListImage = () => {
    return arrUri.map((i, index) =>
      <View key={index} style={{marginHorizontal: '10%', marginBottom: 15, borderWidth: 2, borderColor: isDarkMode?'yellow':'black'}}>
      <Pressable onPress={()=>alert(`Ảnh thứ ${index}`)}>
      <FastImage 
              style={{width: '100%', height: 200, borderRadius: 0}}
              resizeMode={FastImage.resizeMode.cover}
              source={{
                uri: i,
                priority: FastImage.priority.normal,
              }}
            />
            </Pressable>
            </View>)
    {/* <Text style={{color: 'red'}}>{`${i.src.original}?auto=compress&cs=tinysrgb&h=180`}
    </Text>) */}
  }

  const [userId, setUserId] = useState('9')
  const [
    fetchOne,
    { data, isSuccess, isLoading, isFetching, error },
  ] = useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <ScrollView
      // style={Layout.fill}
      // contentContainerStyle={[
      //   Layout.fill,
      //   Layout.colCenter,
      //   Gutters.smallHPadding,
      // ]}
    >
      {/* <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
        {(isLoading || isFetching) && <ActivityIndicator />}
        {!isSuccess ? (
          <Text style={Fonts.textRegular}>{error}</Text>
        ) : (
          <Text style={Fonts.textRegular}>
            {t('example.helloUser', { name: data?.name })}
          </Text>
        )}
      </View> */}
      {/* <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >
        <Text style={[Layout.fill, Fonts.textCenter, Fonts.textSmall]}>
          {t('example.labels.userId')}
        </Text>
        <TextInput
          onChangeText={setUserId}
          editable={!isLoading}
          keyboardType={'number-pad'}
          maxLength={1}
          value={userId}
          selectTextOnFocus
          style={[Layout.fill, Common.textInput]}
        />
      </View> */}
      <Text style={[Fonts.textRegular, Gutters.smallBMargin, {marginTop: 1, marginLeft: '10%'}]}>DarkMode :</Text>
      <View style={{flexDirection: 'row', marginLeft: '10%'}}>
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
      <View style={{flexDirection: 'column', marginTop: 15}}>
      {showListImage()}
      </View>
     </ScrollView>
  )
}

export default ExampleContainer
