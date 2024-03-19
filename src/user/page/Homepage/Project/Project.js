import React from 'react';

export default function Project() {
  const images = [
    { id: 1, src: 'https://demo.gloriathemes.com/luxe/demo/wp-content/uploads/2018/09/project-2-800x800.jpg' },
    { id: 2, src: 'https://demo.gloriathemes.com/luxe/demo/wp-content/uploads/2018/09/project-2-800x800.jpg' },
    { id: 3, src: 'https://demo.gloriathemes.com/luxe/demo/wp-content/uploads/2018/09/project-2-800x800.jpg' },
    { id: 4, src: 'https://demo.gloriathemes.com/luxe/demo/wp-content/uploads/2018/09/project-2-800x800.jpg' },
    { id: 5, src: 'https://demo.gloriathemes.com/luxe/demo/wp-content/uploads/2018/09/project-2-800x800.jpg' },
    { id: 6, src: 'https://demo.gloriathemes.com/luxe/demo/wp-content/uploads/2018/09/project-2-800x800.jpg' }
  ];

  const handleMouseEnter = (event) => {
    event.currentTarget.querySelector('.overlay').classList.add('opacity-100');
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.querySelector('.overlay').classList.remove('opacity-100');
  };

  return (
    <div className='px-5'>
      <div className='text-center mb-3'>
        <span className='font-bold text-[#000000] py-2'>LASTEST PROJECTS</span>
        <h1 className='font-bold text-2xl text-[#000000] pt-2'>Touch modern concepts and designs with Luxe Architecture.</h1>
      </div>

      <div className='flex flex-wrap justify-center items-center'>
        {images.map(image => {
          return (
            <div key={image.id} className='w-1/3 p-2 relative cursor-pointer hover:scale-105 object-cover duration-300'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={image.src} alt={`Image ${image.id}`} className='w-[431px] h-[431px] transform transition-transform border rounded-md' />
              <div className='overlay top-0 left-0 ml-2 mt-2 mb-2 w-[431px] absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity border rounded-md'></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
