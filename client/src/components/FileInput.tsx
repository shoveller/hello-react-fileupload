import React, { PropsWithChildren } from 'react'

export interface IFileInputProps {
}

export const FileInput = (props: PropsWithChildren<IFileInputProps>) => {
  return (
    <input id="file" name="file" type="file" />
  )
}
