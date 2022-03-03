import React from 'react'
import './Rightbar.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Rightbar() {
  return (
    <div className='rightBar'>
      <div className='searchInput'>
      <div className='magnify'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
      <input placeholder='트위터 검색' ></input>
      </div>

      <div className='trendSection'>
          <h2>나를 위한 트랜드</h2>
          <h6>대한민국에서 트렌드 중..</h6>
          <h4>트렌드</h4>
          <h6>대한민국에서 트렌드 중..</h6>
          <h4>트렌드</h4>
          <h6>대한민국에서 트렌드 중..</h6>
          <h4>트렌드</h4>
          <h6>대한민국에서 트렌드 중..</h6>
          <h4>트렌드</h4>
          <h6>대한민국에서 트렌드 중..</h6>
          <h4>트렌드</h4>
          <h6>대한민국에서 트렌드 중..</h6>
          <h4>트렌드</h4>
      </div>
      <div className='recommendFollow'>
        <h2>팔로우 추천</h2>
        <div className='userPhoto'><div>pic </div><span>userId</span><div>follow</div>follow 버튼</div>
        <div className='userPhoto'><div>pic </div><span>userId</span><div>follow</div>follow 버튼</div>
        <div className='userPhoto'><div>pic </div><span>userId</span><div>follow</div>follow 버튼</div>
        <div className='userPhoto'><div>pic </div><span>userId</span><div>follow</div>follow 버튼</div>
        
      </div>
    </div>
  )
}

export default Rightbar