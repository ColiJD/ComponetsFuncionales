import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function FormSignUp() {
    return <form>
        <TextField
            id='name'
            label='Nombre'
            variant='outlined'
            margin='normal'
            fullWidth
        />
        <TextField
            id='lastname'
            label='Apellido'
            variant='outlined'
            margin='normal'
            fullWidth
        />
        <TextField
            id='email'
            label='Correo'
            variant='outlined'
            type='email'
            margin='normal'
            fullWidth
        />
        <FormGroup>
            <FormControlLabel
                control={<Switch
                    defaultChecked={true}
                />} label="Promociones" />
            <FormControlLabel
                control={<Switch
                    defaultChecked={true}
                />} label="Novedades" />
        </FormGroup>
        <Button variant='contained' type="submit">Registrarse</Button>


    </form>
}

export default FormSignUp