import { FileInput } from 'components/FileInput'
import { ProgressBar } from 'components/ProgressBar'
import { SubmitButton } from 'components/SubmitButton'
import { UploadForm } from 'components/UploadForm'
import { DynamicRoutes } from 'DynamicRoutes'
import React, { useCallback, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { axiosApi, IProgressEvent } from './api/form'
import './App.css'

const Loading = () => <div>Loading...</div>

function App() {
  const [progress, setProgress] = useState<IProgressEvent>({
    loaded: 0,
    total: 100,
  })
  const onUpload = useCallback((e: IProgressEvent) => {
    setProgress(e)
  }, [])
  const api = axiosApi(onUpload)

  const onSubmit = useCallback(async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    try {
      await api.post('/upload_file', formData)
    } catch (err) {
      const {code} = err?.response?.data
      alert(code)
    }
  }, [api])

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <DynamicRoutes Loading={<Loading />} />
          <ProgressBar total={progress.total} loaded={progress.loaded} />
          <UploadForm onSubmit={onSubmit}>
            <div>
              <FileInput />
              <SubmitButton />
            </div>
          </UploadForm>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
