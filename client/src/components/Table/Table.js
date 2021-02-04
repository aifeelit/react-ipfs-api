import React, { Component } from 'react';
import LogsInfo from '../LogsInfo';
import { getAPIKeys, disableAPIKey, createAPIKey } from '../../services/api';
import { formatKeysData, columnsHeaders } from './utils';
export default class Table extends Component{
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      show: false
    };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        getAPIKeys().then(({ data }) => {
          const keysData = formatKeysData(data);
          this.setState({ data: keysData, isLoaded: true });
        }).catch(error => this.setState({ isLoaded: true, error }));  
    }

    showModal = () => {
      this.setState({ show: true });
    };

    hideModal = () => {
      this.setState({ show: false });
    };

    disableKey = ev => {
      const keyID = ev.currentTarget.value;
      disableAPIKey(keyID).then(() => {
        let updatedKeys = [...this.state.data];
        updatedKeys = updatedKeys.filter(key => key.id !== keyID);
        this.setState({ data: updatedKeys });
      });
    }

    createKey = () => {
      createAPIKey().then(response => {
        const [type, id] = response.data.split(' ');
        const newKey = { id, logs: []};
        const updatedKeys = [newKey, ...this.state.data];
        this.setState({ data: updatedKeys });
      });
    };

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return (<div>Error: {error.message}</div>)
    };
    
    return (
      <div>
        <div>
          <button type="button" onClick={this.createKey}>
            <span role="img" aria-label="new">Create key</span>
          </button>
        </div>
        <div>
      <table>
        <thead>
          <tr>
            {columnsHeaders.map((header,i) => (
            <th key={`_${i}`}>
              {`${header}`}
            </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoaded ? data.map(({id, _status, logs}, i) => (
            <tr key={`_${i}`} className="flex justify-between">
              <td>{`${id}`}</td>
              <td>
                <LogsInfo logs={logs}/>
              </td>
              <td>
                <button type="button" value={id} onClick={this.disableKey}>
                  <span role="img" aria-label="cross">❌</span>
                </button>
              </td>
            </tr>
          )) : <div>Loading data...</div>}
        </tbody>
      </table>
    </div>
  </div>
    );
  }
}