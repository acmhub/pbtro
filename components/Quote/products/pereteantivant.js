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

export default function PereteAntivant({ handleAddProduct, handleModifyProduct, modifying, t }) {
    const [type, setType] = useState('');
    const [action, setAction] = useState('');

    return (
        <form onSubmit={modifying ? handleModifyProduct : handleAddProduct} className="space-y-4">
            <input type="text" name="Produs" value="Perete Antivant" className="hidden" readOnly />

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

            {/* Type select */}
            <FormControl className="block">
                <FormLabel id="type-label">{t('Tip')}</FormLabel>
                <RadioGroup
                    aria-labelledby="type-label"
                    name="Tip"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    row
                >
                    <FormControlLabel value="Necasetat" control={<Radio />} label={t('Necasetat')} />
                    <FormControlLabel value="Casetat" control={<Radio />} label={t('Casetat')} />
                    <FormControlLabel value="Capse si bride" control={<Radio />} label={t('Capse si bride')} />
                </RadioGroup>
            </FormControl>

            {/* Action select */}
            {type === 'Necasetat' || type === 'Casetat' ? (
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
            ) : null}

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
