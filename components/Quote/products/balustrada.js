import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function Balustrada({ handleAddProduct, handleModifyProduct, modifying, t }) {
    const [type, setType] = useState('');

    return (
        <form onSubmit={modifying ? handleModifyProduct : handleAddProduct} className="space-y-4">
            <input type="text" name="Produs" value="Balustrada" className="hidden" readOnly />

            {/* Width & height */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <FormControl>
                    <InputLabel htmlFor="latime">{t('Latime')}</InputLabel>
                    <Input
                        id="latime"
                        name="Latime"
                        type="number"
                        variant="standard"
                        endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                        fullWidth
                        required
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="inaltime">{t('Inaltime')}</InputLabel>
                    <Input
                        id="inaltime"
                        name="Inaltime"
                        type="number"
                        variant="standard"
                        endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                        fullWidth
                        required
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="lungime">{t('Lungime')}</InputLabel>
                    <Input
                        id="lungime"
                        name="Lungime"
                        type="number"
                        variant="standard"
                        endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                        fullWidth
                        required
                    />
                </FormControl>
            </div>

            {/* Model select */}
            <FormControl className="block">
                <FormLabel id="balustrada-label">{t('Model')}</FormLabel>
                <RadioGroup aria-labelledby="balustrada-label" name="Model" row required>
                    <FormControlLabel
                        value="Balustrada Aluminiu"
                        control={<Radio />}
                        label={t('Balustrada Aluminiu')}
                    />
                    <FormControlLabel value="Balustrada Sticla" control={<Radio />} label={t('Balustrada Sticla')} />
                    <FormControlLabel
                        value="Balustrada Traforata"
                        control={<Radio />}
                        label={t('Balustrada Traforata')}
                    />
                </RadioGroup>
            </FormControl>

            {/* Type select */}
            <FormControl fullWidth>
                <InputLabel id="profile-select-label">{t('Tip')}</InputLabel>
                <Select
                    name="Tip"
                    id="type-select"
                    labelId="type-select-label"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    MenuProps={{ disableScrollLock: true }}
                    variant="standard"
                    required
                >
                    {['Stalp', 'Prindere laterala', 'Sina', 'Spighoti'].map((e, i) => (
                        <MenuItem value={e} key={i}>
                            {t(e)}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField name="Cantitate" label={t('Cantitate')} type="number" variant="standard" fullWidth required />

            <TextField name="Mesaj" label={t('Mesaj')} variant="standard" rows={5} multiline fullWidth />
            {modifying ? (
                <button className="theme-button2 block w-fit mx-auto" type="submit">
                    {t('modifica')}
                </button>
            ) : (
                <button className="theme-button2 block w-fit mx-auto" type="submit">
                    {t('adauga')}
                </button>
            )}
        </form>
    );
}
