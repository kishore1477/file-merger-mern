import React,  {useState, useEffect} from 'react'
import axios from 'axios'
import FormData from 'form-data'
import fileDownload  from 'js-file-download';
import useAxios from 'axios-hooks'
import FileDownload from './FileDownload';
const MergePDF = () => {
    const [fileData, setfileData] = useState('')
    const [axiosRes, setaxiosRes] = useState({blogIns: ''})
    const [cond, setcond] = useState(false)
   
    console.log("axios res", axiosRes)
    const handleform = async(e)=>{
      e.preventDefault()
      try {
        const formdata =  new FormData()
        console.log("file is:" , fileData)
        for (let i = 0; i < fileData.length; i++) {
          formdata.append('files', fileData[i])
        }
        { <FileDownload formdata ={formdata}/>}
        // let res = await axios({
          //   method: 'post',
          //   url: 'https://3001-patia2-newswhether-jmrskdztjdx.ws-eu77.gitpod.io/merger',
          //   data: formdata,
          //   responseType: 'blob',
    // });
  //   const [{ data, loading, error }, refetch] = useAxios(
  //     {
  //       method: 'post',
  //       url: 'https://3001-patia2-newswhether-jmrskdztjdx.ws-eu77.gitpod.io/merger',
  //       data: formdata,
  //       responseType: 'blob',
  //     }
  //   )
  //   refetch
  //   if (loading) return <p>Loading...</p>
  // if (error) return <p>Error!</p>
 
    if(res.data){
      setcond(true)
    }else{
      
      setcond(false)
    }
    setaxiosRes({blogIns:data})
    // setaxiosRes({blogIns:res.data})
    fileData('')
    // let data = res.data;
    // fileDownload( data, 'Merged.pdf');
    // fileDownload(res.data, 'kuch.pdf')
 // create file link in browser's memory
//  const href = URL.createObjectURL(res.data);

//  // create "a" HTML element with href to file & click
//  const link = document.createElement('a');
//  link.href = href;
//  link.setAttribute('download', 'file.pdf'); //or any other extension
//  document.body.appendChild(link);
//  link.click();

//  // clean up "a" element & remove ObjectURL
//  document.body.removeChild(link);
//  URL.revokeObjectURL(href);
    
    // setaxiosRes({blogIns:data})
   
    
    // return (<>  <button onClick={()=> fileDownload(data, 'Merged.pdf')}>Download Image</button></>)
  } catch (error) {
    console.log("error",error); // this is the main part. Use the response property from the error object

    // return error.response;
  }

 

    }
    const downloadFile =()=>{
    fileDownload(axiosRes.blogIns, 'Merged.pdf');

      setaxiosRes({blogIns:''})
      console.log("res after ", axiosRes)
    }
  return (
    <body>
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    {axiosRes.blogIns?<>  <div className="flex flex-col text-center w-full mb-12">
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
        </div></>:<>    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       Merger PDFs
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Choose your pdf file from desktop by click the below  choose file button.
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
       
      <form onSubmit={(e)=>handleform(e)}> 
        <div className="p-2 w-full">
          <div className="relative">
         
            <input
            type='file'
              id="message"
              name="files"
              multiple accept='.pdf'
              onChange={(e)=>setfileData(e.target.files)}
              
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
           Merger
          </button>
        </div>
        </form>
       
      </div>
    </div></>}

   
  </div>
</section>
</body>
  )
}

export default MergePDF