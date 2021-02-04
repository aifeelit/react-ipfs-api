import './LogsInfo.css';
import React from 'react';

const RowInfo = ({ info }) => {
  const { timestamp, bytes } = info;  
  return (
      <p className="p-logs">{`Date: ${timestamp} - Size: ${bytes}`}</p>
  );
};

export default function LogsInfo({logs}){
  return (
    <div className="logs-list">
      {logs.map((log,i) => (<RowInfo key={`_${i}`} info={log}/>))}      
    </div>
  );
};