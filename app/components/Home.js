// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div style={{margin:0}}>
        <div className={styles.container} data-tid="container" >
          <h2 className={`${styles.title}`}>Dashboard</h2>
          <div className="row" style={{marginTop:50, alignItem:'space-between'}}>
            <div className={`col-sm-5 col-xs-12 ${styles.cardview}`} style={{marginRight:5}}>
                <h3>USD</h3>
                <div className="row" style={{marginLeft:0, justifyContent:'space-between'}}>
                  <div className={`small-box bg-aqua ${styles.boxContainer}`}>
                    <div className="inner">
                      <h3>$ 15000.00</h3>
                      <p style={{color:'#fff'}}>Cash On Hand</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>

                  <div className={`small-box bg-aqua ${styles.boxContainer}`}>
                    <div className="inner">
                      <h3>$ 15000.00</h3>
                      <p style={{color:'#fff'}}>Cash In Bank</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>

            </div>

            <div className={`col-sm-5 col-xs-12 ${styles.cardview}`}  style={{marginRight:10}}>
                <h3>RIEL</h3>
                <div className="row" style={{marginLeft:0}}>

                  <div className={`small-box bg-aqua ${styles.boxContainer}`}>
                    <div className="inner">
                      <h3>15000000 ៛</h3>
                      <p style={{color:'#fff'}}>Cash On Hand</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>



                  <div className={`small-box bg-aqua ${styles.boxContainer}`}>
                    <div className="inner">
                      <h3>25000000 ៛</h3>
                      <p style={{color:'#fff'}}>Cash In Bank</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
            </div>

            <div className={`col-sm-5 col-xs-12 ${styles.cardview}`}  style={{marginTop:5, marginRight:5}}>
                <h3>Debit</h3>
                <div className="row" style={{marginLeft:0}}>

                  <div className={`small-box bg-aqua ${styles.boxContainer}`}>
                    <div className="inner">
                      <h3>15000000 ៛</h3>
                      <p style={{color:'#fff'}}>Cash On Hand</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>

                  <div className={`small-box bg-aqua ${styles.boxContainer}`}>
                    <div className="inner">
                      <h3>25000000 ៛</h3>
                      <p style={{color:'#fff'}}>Cash In Bank</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
            </div>

          <div className={`col-sm-5 col-xs-12 ${styles.cardview}`}  style={{marginTop:5}}>
                <h3>Rollback</h3>
                <div className="row" style={{marginLeft:0}}>

                  <div className={`small-box bg-aqua ${styles.boxContainer}`}>
                    <div className="inner">
                      <h3>15000000 ៛</h3>
                      <p style={{color:'#fff'}}>Cash On Hand</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>



                  <div className={`small-box bg-aqua ${styles.boxContainer}`}>
                    <div className="inner">
                      <h3>25000000 ៛</h3>
                      <p style={{color:'#fff'}}>Cash In Bank</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}
