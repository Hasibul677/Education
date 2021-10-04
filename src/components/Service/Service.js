import React from 'react';

const Service = (props) => {
    const{id , name, fee, startDate, endDate, img, teacher,discription} = props.course;
    return (
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <img className='w-full h-80 mt-5 rounded-2xl' src={img} alt="" />
        <span className="inline-block py-1 px-2 rounded bg-white text-indigo-900 text-xl font-bold tracking-widest uppercase my-10">{name}</span>
        <p className="leading-relaxed mb-8">{discription}</p>
        
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
          <a className="text-indigo-400 inline-flex items-center">Learn More <i className="mx-2 fas fa-long-arrow-alt-right"></i>
          </a>
          <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
          <i className="mx-2 fas fa-eye"></i>1.2K
          </span>
          <span className="text-gray-500 inline-flex items-center leading-none text-sm">
          <i className="mx-2 far fa-comment"></i> 6
          </span>
        </div>
        <a className="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-white">Alper Kamu</span>
            <span className="text-gray-500 text-xs tracking-widest mt-0.5">DESIGNER</span>
          </span>
        </a>
      </div>
    );
};

export default Service;