import React, { useState } from 'react';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const FormStyles = styled.div`
    .MuiInputBase-root,
    label {
        color: white;
    }

    .MuiInputBase-root:hover::before,
    .MuiInputBase-root::before {
        border-color: white;
    }

    .MuiInputBase-root::after {
        border: none;
    }

    .MuiCheckbox-root {
        color: white;

        &.Mui-checked {
            color: var(--theme1);
        }
    }

    .Mui-focused {
        color: white;
    }
`;

export default function Contact({ t }) {
    let name = 'Username';
    const [consent, setConsent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success(
            <div>
                Iti multumim, {name}! <br />
                Te vom contacta in cel mai scurt timp posibil.
            </div>,
            {}
        );
    };

    return (
        <div className="container-padding space-y-10">
            <h1>{t('common:contact')}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="col-span-1 lg:col-span-4">
                    <FormStyles>
                        <form onSubmit={handleSubmit} className="card bg-theme2 text-white space-y-6">
                            <TextField name="name" label="Nume" variant="standard" fullWidth />

                            <TextField name="email" label="Email" variant="standard" fullWidth />
                            <TextField name="phone_number" label="Numar de telefon" variant="standard" fullWidth />

                            <TextField name="subject" label="Subiect" variant="standard" fullWidth />
                            <TextField name="message" label="Mesaj" variant="standard" rows={5} multiline fullWidth />

                            <div className="flex items-center justify-between space-x-4 pt-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        value={consent}
                                        onChange={(e) => setConsent(e.target.checked)}
                                        className="p-0"
                                    />
                                    <div>
                                        Sunt de acord cu{' '}
                                        <Link href="/" passHref>
                                            <a className="text-sky-400 underline opacity-100 hover:opacity-75">
                                                politica de confidentialitate.
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className={`theme-button1 ${!consent && 'opacity-50 cursor-not-allowed'}`}
                                    disabled={!consent}
                                >
                                    Trimite
                                </button>
                            </div>
                        </form>
                    </FormStyles>
                </div>

                <div className="col-span-1 lg:col-span-8 space-y-10 my-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="bg-theme2 w-fit p-2">
                                    <span className="material-symbols-outlined text-white">phone_in_talk</span>
                                </div>
                                <h4>Sună-ne</h4>
                            </div>

                            <a
                                href="tel:+40786422450"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-fit opacity-100 hover:opacity-75"
                            >
                                <p>+40 786 422 450 - Claudiu Miron</p>
                            </a>
                            <a
                                href="tel:+40723391843"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-fit opacity-100 hover:opacity-75"
                            >
                                <p>+40 723 391 843 - Ionut Nita</p>
                            </a>
                        </div>

                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="bg-theme2 w-fit p-2">
                                    <span className="material-symbols-outlined text-white">mail</span>
                                </div>
                                <h4>Trimite-ne un mail</h4>
                            </div>

                            <a
                                href="mailto:pbtromania@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-fit opacity-100 hover:opacity-75"
                            >
                                <p>pbtromania@gmail.com</p>
                            </a>
                            <a
                                href="mailto:ofertare@pbtromania.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-fit opacity-100 hover:opacity-75"
                            >
                                <p>ofertare@pbtromania.com</p>
                            </a>
                        </div>

                        <div>
                            <div className="flex items-center space-x-2">
                                <div className="bg-theme2 w-fit p-2 mb-2">
                                    <span className="material-symbols-outlined text-white">map</span>
                                </div>
                                <h4>Vizitează-ne</h4>
                            </div>

                            <a
                                href="https://goo.gl/maps/MsJhkRS4S4CgE8zNA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-fit opacity-100 hover:opacity-75"
                            >
                                <p>Soseaua Tudor Vladimirescu 393</p>
                                <p>Domnesti, Ilfov</p>
                            </a>
                        </div>
                    </div>

                    <iframe
                        title="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.3339008248113!2d25.97047921552232!3d44.40579357910266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200fc0e10d997%3A0x6ae5655545a9990d!2sDistribuitor%20Ferestre%20si%20Usi%20-%20Promotion%20Business%20Team!5e0!3m2!1sro!2sro!4v1644401679264!5m2!1sro!2sro"
                        className="block h-64 w-full"
                    />
                </div>
            </div>
        </div>
    );
}
