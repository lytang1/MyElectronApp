// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { Link } from 'react-router-dom';
import 'react-table/react-table.css'
import Styles from '../components/App.css';


export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div className="row" style={{flexDirection:'row', margin:0, backgroundColor:'#fff', color:'black'}}>
        <aside className="main-sidebar col-xs-2" style={{height:window.innerHeight}}>
          <nav className="sidebar-menu navbar-toggleable-md navbar-light" id="sidebar">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className={`sidebar-menu ${Styles.sidebarWidth}`}>
                <li className={`nav-item ${Styles.navHover} ${Styles.navItem}`}>
                  <Link className={`${Styles.navHover} ${Styles.navItem}` } to="/">Dashboard</Link>
                </li>
                <li>
                <Link className={`${Styles.navHover} ${Styles.navItem}`} to="/transaction">Transaction</Link>
                </li>
                <li>
                  <Link className={`${Styles.navHover} ${Styles.navItem}`} to="/counter">Rollback</Link>
                </li>
                <li className="treeview nav-item">
                  <Link className={Styles.navItem} to="#" >Debit</Link>
                  <ul className="treeview-menu">
                    <li>
                      <Link className={`${Styles.navHover} ${Styles.navItem}`} to="/counter">Owe others</Link>
                    </li>
                    <li>
                      <Link className={`${Styles.navHover} ${Styles.navItem}`} to="/counter">Lend others</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className={`${Styles.navHover} ${Styles.navItem}`} to="/counter">Report</Link>
                </li>
                <li>
                  <Link className={`${Styles.navHover} ${Styles.navItem}`} to="/counter">Setting</Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
          <div className={`col-10 content-wrapper ${Styles.content}`} style={{backgroundColor:'#fff', height:window.innerHeight,}}>
              {this.props.children}
          </div>
      </div>
    );
  }
}
