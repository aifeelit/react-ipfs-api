import React, { Component } from 'react';
import Modal from '../Modal';

const columns = ['Key ID', 'Status', 'Info', 'Disable'];

export default class Table extends Component{
  constructor() {
    super();
    this.state = {
      show: false
    };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
      this.setState({ show: true });
    };

    hideModal = () => {
      this.setState({ show: false });
    };

  render() {
    const { data } = this.props;
    return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((header,i) => (
            <th key={`_${i}`}>
              {header}
            </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({key, isActive}, i) => (

            <tr className="flex justify-between">
              <td>{`${key}`}</td>
              <td>{`${isActive}`}</td>
              <td>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <p>Key Info</p>
                </Modal>
                <button type="button" onClick={this.showModal}>
                  <span role="img" aria-label="search-icon">🔎</span>
                </button>
              </td>
              <td>
                <button type="button">
                  <span role="img" aria-label="cross">❌</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
}