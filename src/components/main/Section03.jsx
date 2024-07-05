import React from 'react';
import useCountUp from '../../hooks/useCountUp';
import avatar_01 from '../../assets/slider/01.png';
import avatar_02 from '../../assets/slider/02.png';
import avatar_03 from '../../assets/slider/03.png';
import avatar_04 from '../../assets/slider/04.png';
import avatar_05 from '../../assets/slider/05.png';
import avatar_06 from '../../assets/slider/06.png';
import avatar_07 from '../../assets/slider/07.png';
import avatar_08 from '../../assets/slider/08.png';
import avatar_09 from '../../assets/slider/09.png';
import avatar_10 from '../../assets/slider/10.png';
import avatar_11 from '../../assets/slider/11.png';

const Section03 = () => {
  return (
    <div className="w-100 mt-10">
      <div className="h-[800px] bg-gradient">
        <p className="text-4xl font-bold pt-32 text-center">지난 작업 데이터</p>

        <div className="flex justify-center gap-4 w-full mt-[130px]">
          <div className="w-[30%] h-auto">
            <p className="text-center font-bold md:text-5xl text-xl mb-5 " style={{ color: '#6495ed' }}>
              + {useCountUp(20)}
            </p>
            <p className="text-center font-bold md:text-xl text-xs opacity-75" style={{ color: '#6495ed' }}>
              작업
            </p>
          </div>
          <div className="w-[30%] h-auto max-w-[]">
            <p className="text-center font-bold md:text-5xl text-xl mb-5" style={{ color: '#6495ed' }}>
              + {useCountUp(10)}
            </p>
            <p className="text-center font-bold md:text-xl text-xs opacity-75" style={{ color: '#6495ed' }}>
              분석
            </p>
          </div>
          <div className="w-[30%] h-auto max-w-[]">
            <p className="text-center font-bold md:text-5xl text-xl mb-5" style={{ color: '#6495ed' }}>
              + {useCountUp(2)} year
            </p>
            <p className="text-center font-bold md:text-xl text-xs opacity-75" style={{ color: '#6495ed' }}>
              경력
            </p>
          </div>
        </div>
        <div id="slider" className='mt-5'>
          <div className="image-box-left pt-5">
            <img src={avatar_01} className="" alt="Avatar 1" />
            <img src={avatar_02} className="" alt="Avatar 1" />
            <img src={avatar_03} className="" alt="Avatar 1" />
            <img src={avatar_04} className="" alt="Avatar 1" />
            <img src={avatar_05} className="" alt="Avatar 1" />
            <img src={avatar_06} className="" alt="Avatar 1" />
            <img src={avatar_07} className="" alt="Avatar 1" />
            <img src={avatar_08} className="" alt="Avatar 1" />
            <img src={avatar_09} className="" alt="Avatar 1" />
            <img src={avatar_10} className="" alt="Avatar 1" />
            <img src={avatar_11} className="" alt="Avatar 1" />
            <img src={avatar_03} className="" alt="Avatar 1" />
            <img src={avatar_04} className="" alt="Avatar 1" />
            <img src={avatar_05} className="" alt="Avatar 1" />
            <img src={avatar_06} className="" alt="Avatar 1" />
            <img src={avatar_04} className="" alt="Avatar 1" />
            <img src={avatar_05} className="" alt="Avatar 1" />
            <img src={avatar_06} className="" alt="Avatar 1" />
            <img src={avatar_07} className="" alt="Avatar 1" />
            <img src={avatar_08} className="" alt="Avatar 1" />
            <img src={avatar_09} className="" alt="Avatar 1" />
            <img src={avatar_08} className="" alt="Avatar 1" />
            <img src={avatar_09} className="" alt="Avatar 1" />
            <img src={avatar_10} className="" alt="Avatar 1" />
            <img src={avatar_11} className="" alt="Avatar 1" />
            <img src={avatar_03} className="" alt="Avatar 1" />
            <img src={avatar_04} className="" alt="Avatar 1" />
            <img src={avatar_05} className="" alt="Avatar 1" />
            <img src={avatar_06} className="" alt="Avatar 1" />
            <img src={avatar_04} className="" alt="Avatar 1" />
            <img src={avatar_10} className="" alt="Avatar 1" />
          </div>
        </div>
        <div id="slider">
          <div className="image-box-right pt-5">
            <img src={avatar_11} className="" alt="Avatar 1" />
            <img src={avatar_10} className="" alt="Avatar 1" />
            <img src={avatar_09} className="" alt="Avatar 1" />
            <img src={avatar_08} className="" alt="Avatar 1" />
            <img src={avatar_07} className="" alt="Avatar 1" />
            <img src={avatar_06} className="" alt="Avatar 1" />
            <img src={avatar_05} className="" alt="Avatar 1" />
            <img src={avatar_04} className="" alt="Avatar 1" />
            <img src={avatar_03} className="" alt="Avatar 1" />
            <img src={avatar_02} className="" alt="Avatar 1" />
            <img src={avatar_01} className="" alt="Avatar 1" />
            <img src={avatar_10} className="" alt="Avatar 1" />
            <img src={avatar_11} className="" alt="Avatar 1" />
            <img src={avatar_03} className="" alt="Avatar 1" />
            <img src={avatar_04} className="" alt="Avatar 1" />
            <img src={avatar_05} className="" alt="Avatar 1" />
            <img src={avatar_06} className="" alt="Avatar 1" />
            <img src={avatar_04} className="" alt="Avatar 1" />
            <img src={avatar_05} className="" alt="Avatar 1" />
            <img src={avatar_06} className="" alt="Avatar 1" />
            <img src={avatar_07} className="" alt="Avatar 1" />
            <img src={avatar_08} className="" alt="Avatar 1" />
            <img src={avatar_09} className="" alt="Avatar 1" />
            <img src={avatar_01} className="" alt="Avatar 1" />
            <img src={avatar_02} className="" alt="Avatar 1" />
            <img src={avatar_08} className="" alt="Avatar 1" />
            <img src={avatar_09} className="" alt="Avatar 1" />
            <img src={avatar_10} className="" alt="Avatar 1" />
            <img src={avatar_11} className="" alt="Avatar 1" />
            <img src={avatar_10} className="" alt="Avatar 1" />
            <img src={avatar_11} className="" alt="Avatar 1" />
            <img src={avatar_03} className="" alt="Avatar 1" />
            <img src={avatar_04} className="" alt="Avatar 1" />
            <img src={avatar_05} className="" alt="Avatar 1" />
            <img src={avatar_06} className="" alt="Avatar 1" />
            <img src={avatar_03} className="" alt="Avatar 1" />
            <img src={avatar_10} className="" alt="Avatar 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section03;
