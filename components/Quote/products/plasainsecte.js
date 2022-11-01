import React, { useState } from 'react';
import Image from 'next/image';
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
import { woodImitation } from '../../Products/WoodImitations';
import { RALColors } from '../../Products/RALColors';

export default function PlasaInsecte({ handleAddProduct, handleModifyProduct, modifying, t }) {
    const [color, setColor] = useState('');
    const [type, setType] = useState('');

    return (
        <form onSubmit={modifying ? handleModifyProduct : handleAddProduct} className="space-y-4">
            <input type="text" name="Produs" value="Plasa Insecte" className="hidden" readOnly />

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
                    <FormControlLabel value="Alb" control={<Radio />} label={t('Alb')} />
                    <FormControlLabel value="Imitatie Lemn" control={<Radio />} label={t('Imitatie Lemn')} />
                    <FormControlLabel value="RAL" control={<Radio />} label="RAL" />
                </RadioGroup>
            </FormControl>

            {color === 'Imitatie Lemn' || color === 'RAL' ? (
                <FormControl fullWidth>
                    <InputLabel id="colortype-select-label">
                        {color === 'Imitatie Lemn' ? t('Imitatie Lemn') : color === 'RAL' && 'RAL'}
                    </InputLabel>
                    <Select
                        name="Culoare"
                        id="colortype-select"
                        labelId="colortype-select-label"
                        MenuProps={{ disableScrollLock: true }}
                        variant="standard"
                    >
                        {color === 'Imitatie Lemn' &&
                            woodImitation.map((e, i) => (
                                <MenuItem value={e.name} key={i}>
                                    <div className="flex items-center space-x-2">
                                        <div className="relative h-8 w-16">
                                            <Image src={e.source} alt={e.name} layout="fill" objectFit="cover" />
                                        </div>
                                        <div>{e.name}</div>
                                    </div>
                                </MenuItem>
                            ))}
                        {color === 'RAL' &&
                            RALColors.map((e, i) => (
                                <MenuItem value={e.RAL} key={i}>
                                    <div className="flex items-center space-x-2">
                                        <div className="relative h-8 w-16" style={{ backgroundColor: e.HEX }} />
                                        <div>{e.RAL + ' - ' + e.English}</div>
                                    </div>
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
            ) : null}

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
                    <FormControlLabel value="Plisse" control={<Radio />} label="Plisse" />
                    <FormControlLabel value="Rulou" control={<Radio />} label={t('Rulou')} />
                    <FormControlLabel value="Balamale" control={<Radio />} label={t('Balamale')} />
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
