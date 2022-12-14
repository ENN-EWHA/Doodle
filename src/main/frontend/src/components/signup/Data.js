import {useState,useEffect} from 'react'

const useData =(validate)=>{
    const [values, setValues] = useState({
        username:'',
        nickname:'',
        email:'',
        userid:'',
        password:'',
        password2:''
    })
    const [errors, setErrors]=useState({})

    const handleChange = e => {
        const{name, value}=e.target;
        setValues ({
            ...values,
            [name]: value

        });
        };
    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validate(values));
    }

    return{handleChange,values,handleSubmit,errors}
    }
    export default useData;
