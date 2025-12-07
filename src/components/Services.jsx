import axios from 'axios'
import React, { useEffect, useState } from 'react'
import deFaultImg from '../assets/images/null.jpg'
import ServiceDetails from './ServiceDetails'
import Dirham from '../assets/images/dirham.png'
const Services = ({ catId }) => {
  const [Services, setServices] = useState([])
  const [selectedService, setSelectedService] = useState(null);
  const [seletedser, setseletedser] = useState(null);
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1);
  const pageSize = 3; 
  console.log(Services)

  useEffect(() => {
    if (catId) {
      getServicesByCat(catId, page)
    }
  }, [catId,page])

  const getServicesByCat = async (id, pageNum = 1) => {
    try {
      setLoading(true);
      const api = await axios.post('https://o24living.com/api/public/Services/GetServices', {
        ServiceMasterID: id,
        PageNumber: pageNum,
        PageSize: pageSize
      })
      setServices(api.data)
      if (api.data.length > 0) {
        const firstServiceId = api.data[0].ServiceID;

        setseletedser(firstServiceId);   // highlight
        getServiceDetails(firstServiceId); // load details
      }
    } catch (error) {
      console.log(error.message)
    }finally {
      setLoading(false); 
    }
  }
  const getServiceDetails = async (serviceId) => {
    try {
      const api = await axios.post('https://o24living.com/api/public/Services/GetServiceDetails', {
        ServiceID: serviceId
      })
      setSelectedService(api.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <h2 className='text-2xl text-gray-700'>Service Type</h2> <br />
      <div className='grid grid-cols-12 gap-5'>
        {loading ? (
        <div className="col-span-12 justify-center grid py-10">
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
        ) : (
        <div className="col-span-12 md:col-span-6">
        {Services.length === 0 && (
        <p className="text-gray-500 text-center py-6 text-red-600">There are no services available at the moment. Please check back later.</p>
        )}
          {Services.map((data) => {
            const ImgURl = data.PrimaryImage ? data.PrimaryImage : deFaultImg
            return (              
              <div key={data.ServiceID} onClick={() => {
                getServiceDetails(data.ServiceID);
                setseletedser(data.ServiceID)

              }} className={`box w-full rounded-md p-5 my-5 ${seletedser === data.ServiceID ? "border-blue-500 bg-blue-100" : "bg-white border-gray-300"}`}>
                <div className='flex flex-col md:flex-row gap-2 md:gap-5 py-1 md:py-5'>
                  <img src={ImgURl} alt="" className='md:w-28 w-full' />
                  <div className='w-full flex justify-between items-center'>
                    <div className='left-section w-[70%]'>
                      <button className='rounded-full px-2 text-xs bg-yellow-600 hover:bg-yellow-500 text-white '>Premium</button>
                      <p>{data.ServiceName}</p>
                      <small>{data.Description}</small>
                    </div>
                    <div className='right-section'>
                      <small>From Only*</small>
                      <h2 className='text-2xl pb-2 flex items-center gap-1'> <img src={Dirham} alt="" width={15} /> {data.BasePrice}</h2>
                      <button className='hidden md:block py-1 px-3 border-black rounded-lg border'>+ Add</button>
                    </div>
                  </div>
                </div>
                <button className='block md:hidden py-1 px-3 text-md w-full border-black rounded-lg border'>+ Add</button>
                <hr />
                <ul className='flex gap-2 pt-5 md:justify-normal justify-center'>
                  <li className='bg-gray-200 rounded-full text-xs py-2 px-2'>Duration: {data.EstimatedDuration}</li>
                  <li className='bg-gray-200 rounded-full text-xs py-2 px-2'>{data.TeamSize} Persons</li>
                  <li className='bg-gray-200 rounded-full text-xs py-2 px-2'>{data.PropertyType}</li>
                </ul>
              </div>
            )
          }
          )}
          {/* paingation */}
        {Services.length === 0 ? (
          <p className="text-gray-500 text-center py-6"></p>
        ):
          <div className="flex justify-center gap-2 items-center mt-5">
            <button
              onClick={() => setPage(prev => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-2 py-1 hover:bg-orange-400 bg-orange-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-md">Page {page}</span>
            <button
              onClick={() => {
                if (Services.length === pageSize) {
                  setPage(prev => prev + 1);
                }
              }}
              disabled={Services.length < pageSize}
              className="px-2 py-1 hover:bg-orange-400 bg-orange-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        }
        </div>

        )}
        <div className="col-span-12 md:col-span-6">
        {Services.length === 0 ? (
        <p className="text-gray-500 text-center py-6"></p>
        ):
          <ServiceDetails servDetail={selectedService} />
          }          
        </div>
      </div>
    </>
  )
}

export default Services