import React from 'react'

const Order = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
        <div className="mb-8 border-2 rounded-lg border-accent p-6 flex flex-col justify-start items-center gap-5">
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
          <img className="rounded-2xl w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] crop" src={`/storage/${item.image}`} alt="" />
          <h3 className="text-2xl font-semibold capitalize mb-3">
          Rp. <span className="text-justify">{item.price.toLocaleString('id-ID')}</span>
          </h3>
          {/* <a href={item.href} className="py-2 px-4 bg-accent text-white rounded-lg"> Go to Website</a> */}
        </div>

      </div>
  )
}

export default Order