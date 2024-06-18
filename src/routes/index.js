import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main'

const MainRouter = () => {

  // TODO : 추후 GA 적용
  // useEffect(() => {
  //   ReactGA.send({
  //     hitType: 'pageview',
  //     page: location.pathname,
  //     title: location.pathname,
  //   });
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
    </Routes>
  )
}

export default MainRouter
