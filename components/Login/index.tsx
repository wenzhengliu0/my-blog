import { NextPage } from 'next'
import React from 'react'

interface IProps {
  isShow: boolean
  onClose?: () => void
}

const Login = (props: IProps) => {
  return (
    <>
      <div>{props.isShow.toString()}</div>
    </>
  )
}

export default Login
