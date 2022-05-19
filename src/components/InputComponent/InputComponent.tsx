import React, { Fragment } from 'react'
import { Input } from 'antd';

export default function InputComponent(props: any) {
    const { placeholder, fn, label, type} = props
  return (
    <Fragment>
        <Input
        type={type}
        className='mt-2'
        placeholder={placeholder}
        onChange={fn}
      />
      <label>{label}</label>
    </Fragment>
  )
}
