import React, { Component } from 'react';
import { getLogs } from '../../services/api';
import PropTypes from 'prop-types';

const RowInfo = ({ info }) => {
  console.log('INFO: ', info);
  const { timestamp, bytes } = info;  
  return (
    <ul>
      <p>{timestamp} - Size: {bytes}</p>
    </ul>
  );
};

export default function LogsInfo({logs}){
  return (
    <div className="logsList">
      {logs.map((log,i) => (<RowInfo key={`_${i}`} info={log}/>))}      
    </div>
  );
};