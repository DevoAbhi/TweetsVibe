import React from 'react'
import Chart from './Chart';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSearchData } from '../../stateManager/actionCreators';
import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();
  const {searchData} = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(getAllSearchData());
  }, [dispatch]);

  if(searchData) {

    console.log(searchData.searchData);
  }

  return (
    <div className='dashboard'>
      <div className="charts">
        {searchData && searchData.searchData && searchData.searchData.map(searchPayload => (
          <Chart
            key={searchPayload.id}
            dailySentiments = {searchPayload.dailySentiments}
            searchWord = {searchPayload.searchWord}
          />
        ))}
      </div>

    </div>
  )
}

export default Dashboard;