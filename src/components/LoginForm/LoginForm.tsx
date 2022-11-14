import React from 'react';
// 1.
import { useForm } from 'react-hook-form';
import { Typography, TextField, Button, Card } from '@mui/material';
import { RegisterFormData } from '../../helpers/interfaces';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app, auth, database } from '../../firebaseConfig'
import { LoginFormData } from '../../helpers/interfaces';

const LoginForm = () => {
    const { register, handleSubmit } = useForm<LoginFormData>();

    const logUserIn = ({ email, password }: LoginFormData) => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            console.log('logged in');
    }).catch((err) => console.error(err.message)) };


    // const registerUser = ({ email, password, password2 }: RegisterFormData) => {
    //     if (password === password2) {
    //         createUserWithEmailAndPassword(auth, email, password).then(() => console.log('Succesfully registered a user')).catch((err) => console.error(err.message));
    //     } else {
    //         alert('Passwords are not equal!')
    //     }
    // }

    return (
        <Card>
            LoginForm
            {/* 2. */}
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(logUserIn)}>
                {/* 3. */}
                <TextField variant='outlined' type='email' placeholder='email' sx={{ display: 'block', my: '.5rem', mx: 'auto' }} {...register('email', { required: true })} ></TextField>
                {/* 4. */}
                <TextField variant='outlined' type='password' placeholder='password' sx={{ display: 'block', my: '.8rem', mx: 'auto' }} {...register('password', { required: true })} ></TextField>
                {/* 5. */}
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ display: 'block', mx: 'auto', mb: '1rem' }}>
                    Log in
                </Button>
            </form>
        </Card>
    );
}

export default LoginForm;

// zad. 1
// treść
// STYLE do wszystkiego co nie jest z MUI, SX do elementow z MUI
// 1. Import i wywołanie useForm (tak jak w poprzednim przykładzie)
// W JSX:
// 2. Element <form> (zwykły htmlowy), w atrybucie style: display flex, flexDirection column. onSubmit zgodnie z poprzednim przykładem z useForm
// W <form>:
// 3. TextField (z MUI) variant outlined, type email, placeholder email, w sx'ach: display block, my .5rem, mx auto. Zarejestruj input (funkcja register z useForm)
// 4. TextField (z MUI) variant outlined, type password, placeholder password, w sx'ach: display block, my .8rem, mx auto. Zarejestruj input (funkcja register z useForm)
// 5. Button (z MUI) type submit, variant contained, w sx'ach: mb 1rem, display block, mx auto. TextContent: Log in
// KONIEC FORMA
// 6. Stwórz interface dla danych z formularza
// 7. Stwórz funkcję logUserIn (to będzie nasza funkcja która trafi jako argument do handleSubmit).
// W tej funkcji:
// 8. Wywołaj funkcję signInWithEmailAndPassword (z Firebase) z odpowiednimi argumentami
// 9. Podepnij pod funkcje z pkt 8 thena z console.log('success') i catcha gdzie wyswietlisz blad w konsoli
