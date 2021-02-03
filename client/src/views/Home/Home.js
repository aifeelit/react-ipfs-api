import React, { useState, useEffect } from 'react';
import { getAPIKeys } from '../../services/api';
import Table from '../../components/Table';

export default function Home() {

  return (
    <div>
      <Table />
    </div>
  );
};