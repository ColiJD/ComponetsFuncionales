import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function FormSignUp() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nove, setNove] = useState(false);

    return <form onSubmit={(e) => {
        e.preventDefault()
        console.log({name, lastName, email, prom, nove})
    }}>
        <TextField
            id='name'
            label='Nombre'
            variant='outlined'
            margin='normal'
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <TextField
            id='lastname'
            label='Apellido'
            variant='outlined'
            margin='normal'
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
            id='email'
            label='Correo'
            variant='outlined'
            type='email'
            margin='normal'
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <FormGroup>
            <FormControlLabel
                control={<Switch
                    checked={prom}
                />} label="Promociones"
                onChange={(e) => setProm(e.target.checked)}
            />
            <FormControlLabel
                control={<Switch
                    checked={nove}
                />} label="Novedades"
                onChange={(e) => setNove(e.target.checked)
                }
                
            />
        </FormGroup>
        <Button variant='contained' type='submit'>Registrarse</Button>


    </form>
}

export default FormSignUp