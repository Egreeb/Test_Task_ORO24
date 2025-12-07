import React, { useEffect, useState } from 'react'
import Services from './Services'
import axios from 'axios'


const Dashboard = () => {
 const [serviceMaster, setServiceMaster] = useState([])
 const [selectedCategory, setSelectedCategory] = useState(null);
 const [loading, setLoading] = useState(false)
console.log(serviceMaster)
useEffect(()=>{
    getServiceMaster();
},[])

    const getServiceMaster = async()=>{
    try {
        setLoading(true);
        const api = await axios.get('https://o24living.com/api/public/Services/GetServiceMaster');
        setServiceMaster(api.data)
    } catch (error) {
        console.log(error.message)
    }finally {
      setLoading(false); 
    }
}
  useEffect(() => {
    if (serviceMaster.length > 0) {
      setSelectedCategory(serviceMaster[0].ServiceMasterID);
    }
  }, [serviceMaster]);

    return (
        <>
            {/* // banner section start here */}
            <div className="flex py-16 sm:py-20 md:py-28 lg:py-32 bg-cover bg-center bg-no-repeat text-black px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/src/assets/images/bg.jpg')" }}>
                <div className="w-full flex justify-center items-center">
                    <div className="max-w-7xl w-full">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#323132] font-light leading-tight">Tailored <span className="font-bold">Facility</span> Plans —</h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-[#323132] mt-2">Seamless, Sustainable, and Cost-Effective</p>
                    </div>
                </div>
            </div>
            {/* // services section start here */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <h2 className='text-2xl text-gray-700'>Our Services</h2> <br />
                {loading ? (
                <div className="w-full flex justify-center py-10">
                    <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
                ) : (
                <div className='allboxes flex flex-wrap gap-1 md:gap-5 md:justify-normal justify-center'>
                    {serviceMaster?.map((data)=>(
                        <div key={data.ServiceMasterID} onClick={()=>setSelectedCategory(data.ServiceMasterID)} className={`text-sm md:text-md cursor-pointer hover:border-black cate_box md:h-32  md:w-32 py-1 px-1 md:py-0 md:px-2 text-center rounded-lg flex flex-col items-center justify-center gap-2 border ${selectedCategory === data.ServiceMasterID ? "border-blue-500 bg-black/80 text-white " : "bg-white md:border-gray-300 border-red-700"}`}>
                            <div className='icon hidden md:block'>
                                      <img src={`https://o24living.com/api${data.IconPath}`} alt={data.ServiceMasterName} width={20}/>
                            </div>
                            <p>{data.ServiceMasterName}</p>
                        </div>
                    ))}
                </div>
                )}
                {/* service type start here */}
                <br />
                <Services catId={selectedCategory}/>
            </div>
        </>
    )
}

export default Dashboard