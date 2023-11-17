import { NextPage } from 'next'
import React from 'react'
import styles from './index.module.scss'
import navs from './config'
import Link from 'next/link'
import { Button } from 'antd'
import Login from '../Login'

const Navbar: NextPage = () => {
  return (
    <>
      <div className={styles.navbar}>
        <section className={styles.logoArea}>BLOG</section>
        <section className={styles.linkArea}>
          {navs?.map((nav, index) => (
            <Link key={nav.lable} href={nav.value} legacyBehavior>
              <a>{nav.lable}</a>
            </Link>
          ))}
        </section>
        <section className={styles.operationArea}>
          <Button type="primary">写文章</Button>
          <Button>登录</Button>
          <Button>注册</Button>
          <Login isShow={false}></Login>
        </section>
      </div>
    </>
  )
}

export default Navbar
