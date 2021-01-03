import React, { PropsWithChildren } from 'react'

export interface IProgressBarProps {
  total: number;
  loaded: number
}

export const ProgressBar = (props: PropsWithChildren<IProgressBarProps>) => {
  const value = Math.round((100 * props.loaded) / props.total)

  return (
    <progress max={100} value={value}/>
  )
}
