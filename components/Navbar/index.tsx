import { NextPage } from 'next'
import React from 'react'
import styles from './index.module.scss'
import navs from './config'
import Link from 'next/link'

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
      </div>
    </>
  )
}

export default Navbar
