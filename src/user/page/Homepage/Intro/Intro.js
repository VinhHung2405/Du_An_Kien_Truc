
import React from 'react'

export default function Intro() {

  return (

    <div >
      <div className="flex bg-slate-100 gt-page-heading " >
        <div className="text-center" style={{ width: "100%" }}>
          <div className="vc_empty_space" style={{ height: 80 }}><span className="vc_empty_space_inner" /></div>
          <span style={{ marginBottom: '16px' }}>Our team</span>
          <div className="vc_empty_space" style={{ height: 40 }}><span className="vc_empty_space_inner" /></div>
          <div className=" flex ">
            <div className='flex justify-center' style={{ margin: "0 10px 10px 50px" }} >
              <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2">
                <li>
                  <div className="flex items-center gap-x-6">
                    <img style={{ borderRadius: "50%", width: "50%", marginTop: "20px", marginBottom: "20px" }} alt="example" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />

                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img style={{ borderRadius: "50%", width: "50%", marginTop: "20px", marginBottom: "20px" }} alt="example" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />

                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img style={{ borderRadius: "50%", width: "50%", marginTop: "20px", marginBottom: "20px" }} alt="example" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />

                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img style={{ borderRadius: "50%", width: "50%", marginTop: "20px", marginBottom: "20px" }} alt="example" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />

                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <div style={{ width: "50%" }}>
            </div> */}
            <div className="vc_empty_space" style={{ height: 80 }}><span className="vc_empty_space_inner" /></div>

          </div>
        </div>
      </div>

    </div >
  )
}

