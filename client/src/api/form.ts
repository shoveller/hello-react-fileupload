import axios from 'axios'

export interface IProgressEvent {
  loaded: number,
  total: number
}

export const axiosApi = (onUploadProgress: (progressEvent: IProgressEvent) => void) => axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  method: 'post',
  onUploadProgress
})
