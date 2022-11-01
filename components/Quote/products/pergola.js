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

export default function Pergola({ handleAddProduct, handleModifyProduct, modifying, t }) {
    const [type, setType] = useState('');
    const [action, setAction] = useState('');

    return (
        <form onSubmit={modifying ? handleModifyProduct : handleAddProduct} className="space-y-4">
            <input type="text" name="Produs" value="Pergola" className="hidden" readOnly />

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

            {/* Type select */}
            <FormControl fullWidth>
                <InputLabel id="type-select-label">{t('Tip')}</InputLabel>
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
                    {['4 Seasons', 'Bioclimatic', 'Winter Garden'].map((e, i) => (
                        <MenuItem value={e} key={i}>
                            {e}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Action select */}
            <FormControl className="block">
                <FormLabel id="action-label">{t('Actionare')}</FormLabel>
                <RadioGroup
                    aria-labelledby="action-label"
                    name="Actionare"
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                    row
                >
                    <FormControlLabel value="Electric" control={<Radio />} label={t('Electric')} />
                    <FormControlLabel value="Manual" control={<Radio />} label={t('Manual')} />
                </RadioGroup>
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
