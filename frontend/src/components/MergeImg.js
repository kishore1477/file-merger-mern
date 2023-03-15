import React,  {useState, useEffect} from 'react'
 
const MergeImg = () => {
    const [fileData, setfileData] = useState('')
    const [cond, setcond] = useState(false)
   
    const handleform = async(e)=>{
      e.preventDefault()
      setcond(true)
    }
  return (
 <>   <section className="text-gray-600 body-font relative">

    <div className="container px-5 py-24 mx-auto">
     
          
           <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
         Merger Images
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Choose your images from desktop by click the below  choose file button.
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
         
        <form onSubmit={(e)=>handleform(e)}> 
          <div className="p-2 w-full">
            <div className="relative">
           
              <input required
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
             Merger Images
            </button>
          </div>
          </form>
         
        </div>
      </div> 
  
     
    </div>
  </section>  
  </>
 
  )
}

export default MergeImg