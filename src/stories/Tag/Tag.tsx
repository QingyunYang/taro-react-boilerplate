import { FC } from 'react'
import { Text, TextProps } from '@tarojs/components'

interface TagProps extends TextProps {
  label: string
}

export const Tag: FC<TagProps> = ({ label, ...props }) => {
  return <Text {...props}>{label}</Text>
}
