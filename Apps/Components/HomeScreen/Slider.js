import {Image, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Slider = ({sliderList}) => {
  return (
    <View className='m-3 '>
        <FlatList
            data={sliderList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <View className='w-[325px] mr-2'>
                    <Image source={{uri:item.url}} className='h-[150px] w-full rounded-lg '/>
                </View>
            )}
        />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})