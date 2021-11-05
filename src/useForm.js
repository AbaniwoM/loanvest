import {useState, useContext} from 'react';
import firebaseConfig from './config';
import { AuthContext } from './components/Auth';
import {Redirect} from 'react-router';

const useForm = validate => {
    const [user, setUser] = useState(null);

    const {client} = useContext(AuthContext);

    // const [values, setValues] = useState ({
    //     username: '',
    //     email: '',
    //     password: '',
    //     password2: ''
    // })
    // const [errors, setErrors] = useState("");
    // const [nameErrors, setNameErrors] = useState("");
    // const [emailErrors, setEmailErrors] = useState("");
    // const [passwordErrors, setPasswordErrors] = useState("");
    // const [password2Errors, setPassword2Errors] = useState("");
   
    

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setValues({
    //         ...values,
    //         [name]: value
    //     });
    // };

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

    // return {  handleSubmit, handleLoginSubmit, nameErrors, emailErrors, passwordErrors, password2Errors};
};

export default useForm;