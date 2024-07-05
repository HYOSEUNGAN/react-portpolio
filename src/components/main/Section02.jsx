import React from 'react';
import avatar_01 from '../../assets/avatar_01.jpg';
import avatar_02 from '../../assets/avatar_02.jpg';
import avatar_03 from '../../assets/avatar_03.jpg';

const Section02 = () => {
  return (
    <section className="sub-max-width">
      <p className="text-4xl font-bold pt-32 text-center">이런 고민이 있다면 저를 찾아주세요!</p>
      <div className="flex justify-center gap-4 w-full">
        <div className='w-[30%] h-auto'>
          <img src={avatar_01} className="" alt="Avatar 1" />
          <p className="text-center font-bold md:text-xl text-xs">프론트엔드 작업이 필요해요!</p>
        </div>
        <div className='w-[30%] h-auto max-w-[]'>
          <img src={avatar_02} className="" alt="Avatar 2" />
          <p className="text-center font-bold md:text-xl text-xs">소개 페이지가 필요해요!</p>
        </div>
        <div className='w-[30%] h-auto max-w-[]'>
          <img src={avatar_03} className="" alt="Avatar 3" />
          <p className="text-center font-bold md:text-xl text-xs">유지보수 인력이 필요해요!</p>
        </div>
      </div>
      <div>
      </div>
      <div className="text-end text-gray-500 mt-3">
        출처{' '}
        <a href="https://kr.freepik.com/free-vector/hand-drawn-people-avatar-pack_4077135.htm#query=%EC%82%AC%EB%9E%8C%20%EC%95%84%EB%B0%94%ED%83%80&position=0&from_view=keyword&track=ais_user&uuid=e192ae53-dd0a-4f3e-a2e3-8412b83313fb">
          Freepik
        </a>
      </div>
    </section>
  );
};

export default Section02;
// 출처 <a href="https://kr.freepik.com/free-vector/hand-drawn-people-avatar-pack_4077135.htm#query=%EC%82%AC%EB%9E%8C%20%EC%95%84%EB%B0%94%ED%83%80&position=0&from_view=keyword&track=ais_user&uuid=e192ae53-dd0a-4f3e-a2e3-8412b83313fb">Freepik</a>
