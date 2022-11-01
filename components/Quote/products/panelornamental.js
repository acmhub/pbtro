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
import { aluminiuData, inoxData } from '../../Products/PanelOrnamental';

export default function PanelOrnamental({ handleAddProduct, handleModifyProduct, modifying, t }) {
    const [model, setModel] = useState('');

    return (
        <form onSubmit={modifying ? handleModifyProduct : handleAddProduct} className="space-y-4">
            <input type="text" name="Produs" value="Panel Ornamental" className="hidden" readOnly />

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

            {/* Model select */}
            <FormControl className="block">
                <FormLabel id="model-label">{t('Model')}</FormLabel>
                <RadioGroup
                    aria-labelledby="Model-label"
                    name="Model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    row
                >
                    <FormControlLabel value="Aluminiu" control={<Radio />} label="Aluminiu" />
                    <FormControlLabel value="Inox" control={<Radio />} label="Inox" />
                </RadioGroup>
            </FormControl>

            {model === 'Aluminiu' || model === 'Inox' ? (
                <FormControl fullWidth>
                    <InputLabel id="modelname-select-label">{model}</InputLabel>
                    <Select
                        name="Model"
                        id="modelname-select"
                        labelId="modelname-select-label"
                        MenuProps={{ disableScrollLock: true }}
                        variant="standard"
                    >
                        {model === 'Aluminiu' &&
                            aluminiuData.map((e, i) => (
                                <MenuItem value={e.name} key={i}>
                                    <div className="flex items-center space-x-2">
                                        <div className="relative h-8 w-16">
                                            <Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
                                        </div>
                                        <div>{e.name}</div>
                                    </div>
                                </MenuItem>
                            ))}
                        {model === 'Inox' &&
                            inoxData.map((e, i) => (
                                <MenuItem value={e.name} key={i}>
                                    <div className="flex items-center space-x-2">
                                        <div className="relative h-8 w-16">
                                            <Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
                                        </div>
                                        <div>{e.name}</div>
                                    </div>
                                </MenuItem>
                            ))}
                    </Select>
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
