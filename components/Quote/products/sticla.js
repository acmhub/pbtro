import React from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function Sticla({ handleAddProduct, handleModifyProduct, modifying, t }) {
    return (
        <form onSubmit={modifying ? handleModifyProduct : handleAddProduct} className="space-y-4">
            <input type="text" name="Produs" value="Sticla" className="hidden" readOnly />

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
                </RadioGroup>
            </FormControl>

            {/* Vitrage select */}
            <FormControl className="block">
                <FormLabel id="vitrage-label">{t('type')}</FormLabel>
                <RadioGroup aria-labelledby="vitrage-label" name="Tip Vitrare" row required>
                    <FormControlLabel value="Control Termic" control={<Radio />} label={t('Control Termic')} />
                    <FormControlLabel value="Control Solar" control={<Radio />} label={t('Control Solar')} />
                    <FormControlLabel value="Opac" control={<Radio />} label={t('Opac')} />
                    <FormControlLabel value="Decorativ" control={<Radio />} label={t('Decorativ')} />
                    <FormControlLabel value="Ornamental" control={<Radio />} label={t('Ornamental')} />
                </RadioGroup>
            </FormControl>

            {/* Thickness select */}
            <FormControl className="block">
                <InputLabel htmlFor="grosime">{t('Grosime')}</InputLabel>
                <Input
                    id="grosime"
                    name="Grosime"
                    type="number"
                    variant="standard"
                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                    fullWidth
                    required
                />
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
