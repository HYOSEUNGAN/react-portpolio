import React from 'react';
import Section01 from '../components/main/Section01';
import Section02 from '../components/main/Section02';
import Solve from '../components/common/Solve';

const Main = () => {
  return (
    <div className='sub-max-width'>
      <Section01 />
      <Section02 />
      {/* <Solve /> */}
    </div>
  );
};

export default Main;
