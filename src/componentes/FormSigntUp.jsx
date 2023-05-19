import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function FormSignUp(props) {
    const { HandleSubmit } = props;
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nove, setNove] = useState(false);
    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "Tienen que ser al menos tres caracteres"
        },
    });

    function validarNombre(Nombre) {
        if (Nombre.length >= 3) {
            return { name: { error: false, message: "" } }
        } else {
            return { name: { error: true, message: "Tienen que ser al menos tres caracteres" } }
        }
    }

    return <form onSubmit={(e) => {
        e.preventDefault()
        HandleSubmit({
            name,
            lastName,
            email,
            prom,
            nove
        })
    }}>
        <TextField
            id='name'
            label='Nombre'
            variant='outlined'
            margin='normal'
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name.error}
            helperText={errors.name.error ? errors.name.message : ""}
            onBlur={(e) => setErrors(validarNombre(e.target.value))}
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