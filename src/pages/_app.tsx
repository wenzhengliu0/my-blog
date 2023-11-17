import { AppProps } from 'next/app'
import '../styles/globals.css' // 导入全局样式
import React from 'react'
import Layout from '../../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  // 这里可以进行全局状态管理或其他逻辑处理
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
