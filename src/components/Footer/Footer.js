import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='contact flex w-full px-[25px] pt-4  h-[263px] bg-gray-50'>
        {/* sdt */}
        <div className='w-1/2'>
            <img sixe={24} src="" alt="logo" />
            <div className='text-[#00000099] font-semibold pt-6 text-base'>
              <span className='w-[431px] h-[144px]'>At Luxe, we are a team of passionate architects and designers dedicated to crafting extraordinary spaces.
                 With a focus on elegance and functionality, we create bespoke designs that reflect our clients' unique visions.
                  From residential to commercial projects, our commitment to excellence shines through every detail.</span>
            </div>
        </div>
        <div className='w-1/2 text-right '>
            <span className='block pt-2 pb-6 font-bold text-[#1F1F1F]'>GET IN TOUCH</span>
            <span className='block px-2 text-[#00000099] font-semibold'>+84 123-456</span>
            <span className='block text-[#00000099] font-semibold'>Email: support@example.com</span>
            <span className='block pt-2 text-[#00000099] font-semibold'>45 Tân Lập, Phường Đông Hòa, TP.Dĩ An, Tỉnh Bình Dương</span>
            <div className='pt-4'>
              <a className='px-2' href="">F</a>
              <a href="">F</a>
              <a className='px-2' href="">F</a>
              <a href="">F</a>
            </div>
        </div>
        
      </div>
      <div className='text-center py-4 h-[139px] text-[#00000099] font-semibold bg-gray-50'>
        <span className='block'>© 2023 Luxe Architecture. All rights reserved.</span>
        <span className='block'>Gloria Themes</span>
      </div>
    </div>
  )
}
