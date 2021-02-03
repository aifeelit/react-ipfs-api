import React, { Component } from 'react';
import { getLogs } from '../../services/api';
import PropTypes from 'prop-types';

const RowInfo = ({ info }) => {
  const { timestamp, host } = info;  
  return (
    <div>
      <p>{timestamp} || {host}</p>
      {/* <p>{host}</p> JUSTIFY FLEX HERE PLS*/} 
    </div>
  );
};

export default function LogsInfo({logs}){
  return ( 
    <div className="logsList">
      {logs.map((log,i) => (<RowInfo key={`_${i}`} info={log}/>))}      
    </div>
  );
};