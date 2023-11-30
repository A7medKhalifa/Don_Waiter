import * as Yup from 'yup';

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email('E-mail must be valid').trim().min(8, 'Enter a valid e-mail').required('Please Enter your E-mail ').matches(EmailReg, 'Invalid e-mail'),
    password: Yup.string().required('Please Enter your Password ').min(8, 'Password must be at least 8 numbers'),
})


export const PriceSchema = Yup.object().shape({
    Totalprice: Yup.string().trim().required('Please Enter your price'),
})