import React from 'react'
import main_02 from '../..//assets/main-01.jpeg';

const Section01 = () => {
  return (
    <section>
          <div className=" flex py-[64px] px-[32px] md:flex-row flex-col ">
      <div className="flex-1 my-auto sm:m-auto ">
        <p className="text-4xl font-bold my-3">"누구에게나"</p>
        <p className="text-4xl font-bold">사용자의 가치로움을 찾는 방법</p>
        <br />
        <p className="text-base font-medium text-slate-500">UI / UX, 프론트 개발, 구글 애널리틱스 솔루션까지</p>
      </div>
      <div className="flex-1 ">
        <img className="rounded-lg" src={main_02}></img>
      </div>
    </div>
    </section>
  )
}

export default Section01
