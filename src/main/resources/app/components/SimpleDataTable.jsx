import React from 'react';
import { Table } from 'react-bootstrap';

export default class SimpleDataTable extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    let tableHeader = [];

    for (let fieldName in this.props.fields) {
      tableHeader.push((
        <td key={fieldName}>{this.props.fields[fieldName]}</td>
      ));
    }

    let tableRows = [];
    if (this.props.data) {
      //for (let i in this.props.data) {
      for(let i=0; i<this.props.data.size; i++) {
        //let row = this.props.data[i];
        let row = this.props.data.get(i);
        let pkStr = i;  // default key
        if (this.props.keys) {
            // primary key object
            let pk = {};
            for (let keyInx in this.props.keys) {
              let keyField = this.props.keys[keyInx];
              pk[keyField] = row[keyField];
            }
    
            // primary key as a string
            pkStr = JSON.stringify(pk);
        }
             
        let rowObj = [];

        for (let fieldName in this.props.fields) {
          rowObj.push((
            <td key={fieldName}>{row.get(fieldName)}</td>
          ));
        }

        tableRows.push((
          <tr key={pkStr} onClick={
            (event) => {
              if (this.props.onClick) {
                this.props.onClick(pk);
              }
            }
          }>
            {rowObj}
          </tr>
        ));
      }
    }

    let overflowStyle = {
      width: '100%'
    };

    return (
      <div style={overflowStyle}>
        <Table bordered condensed hover>
          <thead>
            <tr>
              {tableHeader}
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>
      </div>
    );
  }
}
