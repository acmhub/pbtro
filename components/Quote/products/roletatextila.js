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
import { zebraData, roleteData, jaluzeleData } from '../../Products/Rolete';

export default function RoletaTextila({ handleAddProduct, handleModifyProduct, modifying, t }) {
    const [model, setModel] = useState('');
    const [action, setAction] = useState('');

    return (
        <form onSubmit={modifying ? handleModifyProduct : handleAddProduct} className="space-y-4">
            <input type="text" name="Produs" value="Roleta Textila" className="hidden" readOnly />

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
                    <FormControlLabel value="Zebra" control={<Radio />} label="Zebra" />
                    <FormControlLabel value="Rolete" control={<Radio />} label={t('common:product.roletatextila')} />
                    <FormControlLabel value="Jaluzele" control={<Radio />} label={t('Jaluzele')} />
                </RadioGroup>
            </FormControl>

            {model === 'Zebra' || model === 'Rolete' || model === 'Jaluzele' ? (
                <FormControl fullWidth>
                    <InputLabel id="modelname-select-label">{model}</InputLabel>
                    <Select
                        name="Model"
                        id="modelname-select"
                        labelId="modelname-select-label"
                        MenuProps={{ disableScrollLock: true }}
                        variant="standard"
                    >
                        {model === 'Zebra' &&
                            zebraData.map((e, i) => (
                                <MenuItem value={e.name} key={i}>
                                    <div className="flex items-center space-x-2">
                                        <div className="relative h-8 w-16">
                                            <Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
                                        </div>
                                        <div>{e.name}</div>
                                    </div>
                                </MenuItem>
                            ))}
                        {model === 'Rolete' &&
                            roleteData.map((e, i) => (
                                <MenuItem value={e.name} key={i}>
                                    <div className="flex items-center space-x-2">
                                        <div className="relative h-8 w-16">
                                            <Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
                                        </div>
                                        <div>{e.name}</div>
                                    </div>
                                </MenuItem>
                            ))}
                        {model === 'Jaluzele' &&
                            jaluzeleData.map((e, i) => (
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
