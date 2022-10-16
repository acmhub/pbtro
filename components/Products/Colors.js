import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
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

export default function Colors() {
    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-3 lg:grid-cols-8 gap-1">
                {woodImitation.map((e, i) => (
                    <div className="col-span-1" key={i}>
                        <CustomTooltip className="text-2xl" title={e.name} placement="top" arrow>
                            <div className="relative h-16 w-full">
                                <Image src={e.source} alt={e.name} layout="fill" objectFit="cover" />
                            </div>
                        </CustomTooltip>
                    </div>
                ))}
            </div>

            <div className="relative overflow-y-scroll h-[340px] scrollbar-thin">
                {RALColors.map((e, i) => (
                    <div className="ral-card py-2" style={{ backgroundColor: e.HEX }} key={i}>
                        <h6 className="text-center mixblendmode-difference text-white">
                            {e.RAL} - {e.English}
                        </h6>
                    </div>
                ))}
            </div>
        </div>
    );
}
