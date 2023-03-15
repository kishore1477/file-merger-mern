import React from 'react'
import fileDownload  from 'js-file-download';
import useAxios from 'axios-hooks'
import FormData from 'form-data'

const FileDownload = (props) => {
    const {fileData, setcond} = props
   
    // console.log("my name is",name)
    // console.log("my fileData is",fileData)

    const formdata =  new FormData()
    console.log("file is:" , fileData)
    for (let i = 0; i < fileData.length; i++) {
      formdata.append('files', fileData[i])
    }
    const [{ data, loading, error }, refetch] = useAxios(
        {
          method: 'post',
          url: 'https://dead-ruby-viper-gear.cyclic.app/merger',
          data: formdata,
          responseType: 'blob',
        }
      )
      refetch()
      if (loading) return ( <p>Loading...</p>)
    if (error) return ( <p>Error!</p>)
    console.log("my data is",data)

    const downloadFile =()=>{
        fileDownload(data, 'Merged.pdf');

    console.log("Download completed")
    setcond(false)
          
        }

  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">

  <div className="flex flex-col text-center w-full mb-12">
     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      Merged file is ready for PDFs
     </h1>
     <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      down files
     </p>
   </div>
    <div className="p-2 w-full">
          <button  onClick={downloadFile} className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
           download
          </button>
        </div>
  </div>
  </section>
  )
}

export default FileDownload