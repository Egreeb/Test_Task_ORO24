import React from 'react'

const ServiceDetails = ({servDetail}) => {
      if (!servDetail) return null;

    const service = servDetail.Service;
    const features = servDetail.ServiceFeatures || [];
    const images = servDetail.ServiceImages || [];
    return (
        <>
            <div className='hidden md:block box w-full bg-white rounded-md p-5 my-5'>
                <div className='headings flex justify-between my-3'>
                    <h2 className='text-2xl'>{service[0]?.ServiceName}</h2>
                    <h2 className='text-2xl'>{service[0]?.BasePrice}</h2>
                </div>
                <div className="serviceimg">
                    <img  src={`https://o24living.com/api${images[0]?.ImageURL}`}
                     className="w-full h-60 object-cover rounded-md"/>
                </div>
                <div className="desc my-3">
                    <h2 className='text-gray-600 text-lg'>Service Description:</h2>
                    <small className='text-gray-600'>{service[0]?.Description}</small>
                </div>
                <div className="timingduration my-3">
                    <h2 className='text-gray-600 text-lg'>Service Timing & Duration:</h2>
                    <table className="w-full border-collapse my-3">
                        {/* Header */}
                        <thead>
                            <tr className="bg-gray-800 text-white rounded-t-lg">
                                <th className="w-32 py-3 font-normal text-sm px-4 text-left rounded-l-lg">Property Type</th>
                                <th className="w-40 py-3 font-normal text-sm px-4 text-left">Estimated Duration</th>
                                <th className="w-24 py-3 font-normal text-sm px-4 text-left rounded-r-lg">Team Size</th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            <tr className="bg-gray-100">
                                <td style={{wordBreak:'break-word'}} className="w-32 p-2 md:py-3 text-sm md:px-4">{service[0]?.PropertyType}</td>
                                <td style={{wordBreak:'break-word'}} className="w-40 p-2 md:py-3 text-sm md:px-4">{service[0]?.EstimatedDuration}</td>
                                <td style={{wordBreak:'break-word'}} className="w-24 p-2 md:py-3 text-sm md:px-4">{service[0]?.TeamSize} Persons</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="whatinclude my-3">
                    <h2 className='text-gray-600 text-lg'>Whats Include:</h2>
                        <ul className='list-[lower-alpha]'>
                            {features?.map((data)=>(
                                <li key={data.FeatureName} className='text-gray-500 ml-10 my-3'>{data.FeatureName}</li>
                            ))}
                        </ul>
                </div>
                    <button className='py-1 px-3 w-full border-black rounded-lg border'>+ Add</button>
            </div>
        </>
    )
}

export default ServiceDetails