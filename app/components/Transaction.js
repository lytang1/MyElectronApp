// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table'
import styles from './Transaction.css';
// import 'react-table/react-table.css'
var products = [{
      id: 1,
      name: "Send Money",
      amount: 100,
      fee:1,
      commission:0.30,
      balance:20983
  },{
      id: 2,
      name: "Receive Money",
      amount: 1000,
      fee:0,
      commission:1,
      balance:21983
  }];
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Transaction extends Component {
  priceFormatter(cell, row){
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  }
  render() {
    return (
      <div style={{margin:0}}>
        <div className={styles.container} data-tid="container" >

          <div className="row">
            <div className={`col-xs-6 ${styles.container}`} data-tid="container" >
              <h2 className={`${styles.title}`}>Transaction</h2>
              </div>
              <div className="col-xs-6" style={{position:"absolute", top:40, right:10}}>
                <button className={`btn btn-primary ${styles.addButton}`} style={{borderWidth:1, borderColor:'#009688'}}><i className="fa fa-plus"/> Add</button>
              </div>
            </div>

            <div className="col-xs-10">
              <div className="panel panel-primary">
                <div className="panel-heading">.</div>
                <div className="panel-body ">
                  <BootstrapTable data={products} version='4' striped={true} hover={true}>
                      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                      <TableHeaderColumn dataField="name" dataSort={true}>Service</TableHeaderColumn>
                      <TableHeaderColumn dataField="amount" dataFormat={this.priceFormatter}>Amount</TableHeaderColumn>
                      <TableHeaderColumn dataField="fee" dataFormat={this.priceFormatter}>Fee</TableHeaderColumn>
                      <TableHeaderColumn dataField="commission" dataFormat={this.priceFormatter}>Commission</TableHeaderColumn>
                      <TableHeaderColumn dataField="balance" dataFormat={this.priceFormatter}>Balance</TableHeaderColumn>
                  </BootstrapTable>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
