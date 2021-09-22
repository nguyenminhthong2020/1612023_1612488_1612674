import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'

const Demo = () => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text>{t('welcome')}</Text>
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
