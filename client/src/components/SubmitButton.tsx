import React, { PropsWithChildren } from 'react'

export interface ISubmitButtonProps {
}

export const SubmitButton = (props: PropsWithChildren<ISubmitButtonProps>) => {
  return (
    <button type="submit">업로드</button>
  )
}
