import React, { Component } from 'react';

import EditWrisx from './EditWrisx';
import Wrisx from './Wrisx';

import api from '../api';

class Wrisxs extends Component {
  constructor() {
    super();

    this.state = {
      wrisxs: [],
      creatingWrisx: false
    };

    this.handleEnableAddMode = this.handleEnableAddMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    api.get().then(json => this.setState({ wrisxs: json }));
  }

  handleSelect(wrisx) {
    this.setState({ selectedWrisx: wrisx });
  }

  handleDelete(event, wrisx) {
    event.stopPropagation();

    api.destroy(wrisx).then(() => {
      let wrisxs = this.state.wrisxs;
      wrisxs = wrisxs.filter(h => h !== wrisx);
      this.setState({ wrisxs: wrisxs });

      if (this.selectedWrisx === wrisx) {
        this.setState({ selectedWrisx: null });
      }
    });
  }

  handleEnableAddMode() {
    this.setState({
      addingWrisx: true,
      selectedWrisx: { id: '', title: '', details: '' }
    });
  }

  handleCancel() {
    this.setState({ addingWrisx: false, selectedWrisx: null });
  }

  handleSave() {
    let wrisxs = this.state.wrisxs;

    if (this.state.addingWrisx) {
      api
        .create(this.state.selectedWrisx)
        .then(result => {
          console.log('Successfully created!');

          wrisxs.push(this.state.selectedWrisx);
          this.setState({
            wrisxs: wrisxs,
            selectedWrisx: null,
            addingWrisx: false
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .update(this.state.selectedWrisx)
        .then(() => {
          this.setState({ selectedWrisx: null });
        })
        .catch(err => {});
    }
  }

  handleOnChange(event) {
    let selectedWrisx = this.state.selectedWrisx;
    selectedWrisx[event.target.name] = event.target.value;
    this.setState({ selectedWrisx: selectedWrisx });
  }

  render() {
    return (
      <div>
        <ul className="wrisxs">
          {this.state.wrisxs.map(wrisx => {
            return (
              <Wrisx
                key={wrisx.id}
                wrisx={wrisx}
                onSelect={this.handleSelect}
                onDelete={this.handleDelete}
                selectedWrisx={this.state.selectedWrisx}
              />
            );
          })}
        </ul>
        <div className="editarea">
          <button onClick={this.handleEnableAddMode}>Add New Wrisx</button>
          <EditWrisx
            addingWrisx={this.state.addingWrisx}
            onChange={this.handleOnChange}
            selectedWrisx={this.state.selectedWrisx}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
          />
        </div>
      </div>
    );
  }
}

export default Wrisxs;
