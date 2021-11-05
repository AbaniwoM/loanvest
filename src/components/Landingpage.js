import React, { useState } from 'react'
import styles from '../styles/Landingpage.module.css'
import { DiCodeigniter } from "react-icons/di";
import modalImg from '../images/welcome.svg';
import useForm from '../useForm';
import { AuthContext } from './Auth';
import firebaseConfig from '../config';
import {Redirect} from 'react-router';



const Landingpage = () => {
    const{ client } = React.useContext(AuthContext);
    const [modal, setModal] = useState(false);

    const [user, setUser] = useState(null);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    const [modal2, setModal2] = useState(false);

    const toggleModal2 = () => {
        setModal2(!modal2)
    }

    if(modal2) {
        document.body.classList.add('active-modal2')
    } else {
        document.body.classList.remove('active-modal2')
    }


    // const { values, handleSubmit, handleLoginSubmit, nameErrors, emailErrors, passwordErrors, password2Errors } = useForm(validate);

    const handleLoginSubmit = async e => {
        e.preventDefault();
        const {email, password} = e.target.elements
        try{
         await firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        }
        catch(error) {
             console.log(error.code);
         }
     }
 
     const handleSubmit = async e => {
         e.preventDefault();
         const {username, email, password, password2} = e.target.elements
         // setErrors(validate(values));
         console.log(username.value);
         if(username.value === "" || email.value === "" || password.value === "" || password2.value === "") {
         //    setNameErrors("Fill in your correct username!");
         //    setEmailErrors("Fill in your email address!");
         //    setPasswordErrors("Fill in your correct password!");
         //    setPassword2Errors("Fill in your correct password!");
            return
         }
         try{
             await firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
             setUser(true);
         }
         catch(error) {
             console.log(error.code);
         }
     }

     if(client){
        return <Redirect to="/dashboard"/>
    }
 

    
  return (
    <div className={styles.container}>
        {client ? (<p>You're logged in. Go to Dashboard</p>) : ( <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.icon}>
                    <DiCodeigniter />
                </div>
                <div className={styles.vest}>LoanVest</div>
            </div>
            <div className={styles.nav}>
                <div className={styles.about}>About Us</div>
                <button className={styles.login} onClick={toggleModal2}>Login</button>
                <button className={styles.signup} onClick={toggleModal}>Sign Up</button>
            </div>
        </div>
        <div className={styles.hero}>
            <div className={styles.text}>
                <h1>LoanVest</h1>
                <p>We bring you fast paced loans that you can pay back at your convenience. Sign Up with us today...</p>
            <div className={styles.button}>
            <button onClick={toggleModal} className={styles.mainBtn}>Get Started</button>
            </div>
            </div>
        </div>
        <div className={styles.footer}>
            <h3>&copy; 2021 codedr</h3>
        </div>

        {/* Sign up Modal */}
        {modal && (
          <div className={styles.modal} id="modal" >
              <div className={styles.overlay} onClick={toggleModal}></div>
                <div className={styles.modalContent}>
                    <button className={styles.closeModal} onClick={toggleModal}>X</button>
                    <div className={styles.modalContentLeft}>
                        <img src={modalImg} alt="modalImg" className={styles.modalImg} />
                    </div>
                    <div className={styles.modalContentRight}>
                          <form action="/" method="GET" className={styles.modalForm} id="form" onSubmit={handleSubmit}>
                            <div className={styles.logo2}>
                            <div className={styles.icon2}>
                                <DiCodeigniter />
                            </div>
                            <div className={styles.vest2}>LoanVest</div>
                            </div>
                            <div className={styles.formHead}>Get started with us today! Create your account by filling the information below...</div>
                            
                            <div className={styles.formValidation}>
                                <input type="text" className={styles.modalInput} name="username" id="username" placeholder="Enter your username"  />
                            </div>
                            {/* {nameErrors && <p>{nameErrors}</p>} */}
                            <div className={styles.formValidation}>
                                <input type="email" className={styles.modalInput} name="email" id="email" placeholder="Enter your Email"/>
                            </div>
                            {/* {emailErrors && <p>{emailErrors}</p>} */}
                            <div className={styles.formValidation}>
                                <input type="password" className={styles.modalInput} name="password" id="password" placeholder="Enter your Password" />
                            </div>
                            {/* {passwordErrors && <p>{passwordErrors}</p>} */}
                            <div className={styles.formValidation}>
                                <input type="password" className={styles.modalInput} name="password2" id="password2" placeholder="Confirm your Password"  />
                            </div>
                            {/* {password2Errors && <p>{password2Errors}</p>} */}
                            <input type="submit" className={styles.modalInputBtn} value="Sign Up" />
                            <span className={styles.modalInputLogin}>Already have an account? Login <a href="#modal2" onClick={toggleModal2}>here</a></span>
                        </form>
                    </div>
                </div>
            </div>
        )}

        {/* Login Modal */}
        {modal2 && (
          <div className={styles.modal} id="modal2" >
              <div className={styles.overlay} onClick={toggleModal2}></div>
                <div className={styles.modalContent}>
                    <button className={styles.closeModal} onClick={toggleModal2}>X</button>
                    <div className={styles.modalContentLeft}>
                        <img src={modalImg} alt="modalImg" className={styles.modalImg} />
                    </div>
                    <div className={styles.modalContentRight}>
                        <form action="/" method="GET" className={styles.modalForm} id="form" onSubmit={handleLoginSubmit}>
                            <div className={styles.logo2}>
                            <div className={styles.icon2}>
                                <DiCodeigniter />
                            </div>
                            <div className={styles.vest2}>LoanVest</div>
                            </div>
                            <div className={styles.formHead}>Get started with us today! Create your account by filling the information below...</div>
                            <div className={styles.formValidation}>
                                <input type="email" className={styles.modalInput} id="email" name="email" placeholder="Enter your Email" />
                                <p>Error Message</p>
                            </div>
                            <div className={styles.formValidation}>
                                <input type="password" className={styles.modalInput} id="password" name="password" placeholder="Enter your Password" />
                                <p>Error Message</p>
                            </div>
                            <input type="submit" className={styles.modalInputBtn} value="Login" />
                            <span className={styles.modalInputLogin2}>Don't have an account? Signup <a href="#modal" onClick={toggleModal}>here</a></span>
                        </form>
                    </div>
                </div>
            </div>
        )}
        </div>)} 
    </div>
  );
}

export default Landingpage;
