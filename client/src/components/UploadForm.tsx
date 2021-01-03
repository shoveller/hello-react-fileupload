import React, { FormEventHandler, PropsWithChildren } from 'react'

export interface IUploadFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>
}

export const UploadForm = (props: PropsWithChildren<IUploadFormProps>) => {
  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}
