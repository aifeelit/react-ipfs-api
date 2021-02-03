import React, { useState, useEffect } from 'react';
import { getAPIKeys } from '../../services/api';
import Table from '../../components/Table';

const mockData = [
  { key: 'dwight_schrute', isActive: false },
  { key: 'michael_scott', isActive: true },
  { key: 'dundler_miffin', isActive: true },
  { key: 'stratton_branch', isActive: false },
];

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAPIKeys();
      console.log('response: ', response);
      setData(response);
    })();
  }, []);

  return (
    <div>
      <Table data={mockData} />
    </div>
  );
};