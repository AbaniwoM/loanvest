import React, { useContext } from 'react'
import firebaseConfig from '../config';
import { AuthContext } from './Auth';
import {Redirect} from 'react-router';
import styles from '../styles/Dashboard.module.css';
import { DiCodeigniter } from "react-icons/di";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
    const {client} = useContext(AuthContext);
    if(!client){
        return <Redirect to="/"/>
    }
    return (
        <div className={styles.contain}>
         <div className={styles.leftContent}>
            <div className={styles.logo}>
                <div className={styles.icon}>
                    <DiCodeigniter />
                </div>
                <div className={styles.vest}>LoanVest</div>
            </div>
            <div className={styles.Btn}>
            <div className={styles.dashBtn}>
                <h1>Dashboard</h1>
            </div>
            <div className={styles.loanBtn}>
                <h1>Aquire a Loan</h1>
            </div>
            <div className={styles.payBtn}>
                <h1>PayBack Loan</h1>
            </div>
            </div>
         </div>
         <div className={styles.rightContent}>
          <div className={styles.head}>
           <h1>Welcome to LoanVest</h1>
           <button onClick={() => firebaseConfig.auth().signOut()} className={styles.signout}>Sign Out</button>
          </div>
          <div className={styles.dash}>
              <div className={styles.text}>Dashboard</div>
              <div className={styles.content}>
                  <div className={styles.picture}><CgProfile /></div>
                  <div className={styles.username}>username</div>
              </div>
          </div>
          </div>
        </div>
    )
}

export default Dashboard
