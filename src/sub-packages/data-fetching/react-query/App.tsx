import { View } from '@tarojs/components'
import type { FC } from 'react'
import { request } from '@tarojs/taro'
import { useQuery } from '@tanstack/react-query'
import './App.css'

const url = 'https://api.github.com/repos/tannerlinsley/react-query'

export const App: FC = () => {
  const { isLoading, error, data } = useQuery<any, TaroGeneral.CallbackResult>(['repoData'], () =>
    request({ url }).then((res) => res.data),
  )

  if (isLoading) {
    return <View className="flex h-screen flex-col items-center justify-center">Loading...</View>
  }

  if (error) {
    return (
      <View className="flex h-screen flex-col items-center justify-center">
        <View>An error has occurred:</View>
        <View>{error.errMsg}</View>
      </View>
    )
  }

  return (
    <View className="flex h-screen flex-col items-center justify-center">
      <View>{data.name}</View>
      <View>{data.description}</View>
      <View>👀 {data.subscribers_count}</View>
      <View>✨ {data.stargazers_count}</View>
      <View>🍴 {data.forks_count}</View>
    </View>
  )
}
