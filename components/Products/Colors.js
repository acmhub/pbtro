import React, { useState } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import { woodImitation } from './WoodImitations';
import { RALColors } from './RALColors';

const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
    ({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.primary.main
        },
        [`& .${tooltipClasses.tooltip}`]: {
            fontSize: '16px',
            backgroundColor: theme.palette.primary.main
        }
    })
);

export default function Colors({ t }) {
    const [wood, setWood] = useState(false);
    const [ral, setRAL] = useState(false);
    const [woodOpen, setWoodOpen] = useState({ state: false, index: null });

    return (
        <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="col-span-1 lg:col-span-8 space-y-8 my-auto">
                    <h2>Gamă excepţională de culori</h2>
                    <p>
                        Putem furniza profile de interior şi exterior în aproape orice culoare pe care v-o puteţi
                        imagina. Sunt disponibile peste 450 de nuanțe și finisaje diferite: culori metalice sau
                        anodizate, mate sau RAL lucioase, sau chiar și o vopsea coatex specială rezistență la zgârieturi
                        și cu o îngrijire minimă.
                    </p>

                    <div className="flex space-x-8">
                        <button className="theme-button1" onClick={() => setWood(true)}>
                            Imitatii Lemn
                        </button>
                        <Modal
                            open={wood}
                            onClose={() => setWood(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 lg:w-[600px] bg-white shadow space-y-4 p-2">
                                <div className="flex items-center justify-between">
                                    <h4>Imitatii Lemn</h4>

                                    <span
                                        className="material-symbols-outlined cursor-pointer"
                                        onClick={() => setWood(false)}
                                    >
                                        close
                                    </span>
                                </div>

                                <div className="relative h-[75vh] overflow-y-scroll scrollbar-thin grid grid-cols-2 gap-1">
                                    {woodImitation.map((e, i) => (
                                        <div className="col-span-1 cursor-zoom-in" key={i}>
                                            <CustomTooltip className="text-2xl" title={e.name} placement="top" arrow>
                                                <div>
                                                    <div
                                                        className="relative h-16 w-full"
                                                        onClick={() => setWoodOpen({ state: true, index: i })}
                                                    >
                                                        <Image
                                                            src={e.source}
                                                            alt={e.name}
                                                            layout="fill"
                                                            objectFit="cover"
                                                        />
                                                    </div>

                                                    <Modal
                                                        open={woodOpen.index === i ? true : false}
                                                        onClose={() => setWoodOpen({ state: false, index: null })}
                                                        aria-labelledby="wood-color"
                                                        aria-describedby="wood-color-details"
                                                    >
                                                        <div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 lg:w-[600px] bg-white shadow space-y-2 p-2">
                                                            <div className="relative h-96 w-full">
                                                                <Image
                                                                    src={e.source}
                                                                    alt={e.name}
                                                                    layout="fill"
                                                                    objectFit="cover"
                                                                />
                                                            </div>
                                                            <h5>{e.name}</h5>
                                                        </div>
                                                    </Modal>
                                                </div>
                                            </CustomTooltip>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Modal>

                        <button className="theme-button1" onClick={() => setRAL(true)}>
                            Paletar RAL
                        </button>
                        <Modal
                            open={ral}
                            onClose={() => setRAL(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 lg:w-[600px] bg-white shadow space-y-4 p-2">
                                <div className="flex items-center justify-between">
                                    <h4>Paletar RAL</h4>

                                    <span
                                        className="material-symbols-outlined cursor-pointer"
                                        onClick={() => setRAL(false)}
                                    >
                                        close
                                    </span>
                                </div>

                                <div className="relative h-[75vh] overflow-y-scroll scrollbar-thin grid grid-cols-2 gap-1">
                                    {RALColors.map((e, i) => (
                                        <div className="ral-card py-2" style={{ backgroundColor: e.HEX }} key={i}>
                                            <div className="text-center mix-blend-difference text-white">
                                                <h6>{e.RAL}</h6>
                                                <h6>{e.English}</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-4 order-first lg:order-none">
                    <div className="relative h-72 w-full">
                        <Image
                            src="/images/colors/colors-profile.png"
                            alt="Multicolor"
                            layout="fill"
                            objectFit="contain"
                            className="-scale-x-100"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
