import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function TamplarieLemn({ handleAddProduct, handleModifyProduct, modifying, t }) {
    const [color, setColor] = useState('');
    const [plating, setPlating] = useState('');

    return (
        <form onSubmit={modifying ? handleModifyProduct : handleAddProduct} className="space-y-4">
            <input type="text" name="Produs" value="Tamplarie Lemn" className="hidden" readOnly />

            {/* Width & height */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
            </div>

            {/* Vitrage select */}
            <FormControl className="block">
                <FormLabel id="vitrage-label">{t('Vitrare')}</FormLabel>
                <RadioGroup aria-labelledby="vitrage-label" name="Vitrare" row required>
                    <FormControlLabel value="Termopan" control={<Radio />} label={t('Termopan')} />
                    <FormControlLabel value="Tripan" control={<Radio />} label={t('Tripan')} />
                    <FormControlLabel value="Panel" control={<Radio />} label={t('Panel')} />
                    <FormControlLabel value="Fara sticla" control={<Radio />} label={t('Fara sticla')} />
                </RadioGroup>
            </FormControl>

            {/* Color select */}
            <FormControl className="block">
                <FormLabel id="color-label">{t('Culoare')}</FormLabel>
                <RadioGroup
                    aria-labelledby="color-label"
                    name="Culoare"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    row
                >
                    <FormControlLabel value="Oak" control={<Radio />} label={t('Oak')} />
                    <FormControlLabel value="Northern Pine" control={<Radio />} label={t('Northern Pine')} />
                </RadioGroup>
            </FormControl>

            {/* Plating select */}
            <FormControl className="block">
                <FormLabel id="plating-label">{t('Placare cu Aluminiu')}</FormLabel>
                <RadioGroup
                    aria-labelledby="plating-label"
                    name="Placare cu Aluminiu"
                    value={plating}
                    onChange={(e) => setPlating(e.target.value)}
                    row
                >
                    <FormControlLabel value="Da" control={<Radio />} label={t('Da')} />
                    <FormControlLabel value="Nu" control={<Radio />} label={t('Nu')} />
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
