import type { FC } from 'react'
import { View, Text, Navigator } from '@tarojs/components'

export const SectionItem: FC<{
  links: { url: string; title: string }[]
  title: string
  description?: string
}> = ({ links, title, description }) => (
  <View className="mb-2 flex flex-col rounded-xl bg-white shadow">
    <View className="p-4 md:p-5">
      <View className="text-lg font-bold text-gray-800">
        <Text>{title}</Text>
      </View>

      {description ? (
        <View className="mt-2 text-gray-800">
          <Text>{description}</Text>
        </View>
      ) : null}

      <View className="mt-3">
        {links.map((item) => (
          <Navigator
            key={`${item.title}${item.url}`}
            url={item.url}
            className="gap-2 text-sm font-medium text-blue-500"
          >
            <View className="p-1">
              <Text>{item.title}</Text>
            </View>
          </Navigator>
        ))}
      </View>
    </View>
  </View>
)
