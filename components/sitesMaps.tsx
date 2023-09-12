import { Map } from '@/types/maps';
import { Image } from '@nextui-org/react';
import React from 'react';

type SitesMapProps = {
    map: Map;
}

const SitesMap: React.FC<SitesMapProps> = ({ map }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 flex flex-col items-center justify-center h-full'>
            <div className='w-[280px] xs:w-[400px] md:w-[420px] lg:w-full flex mx-auto'>
                <img src={map.displayIcon ? map.displayIcon : ""} alt="Mapa de Valorant" className="max-h-[700px]" />
            </div>
            <div className='w-full text-md'>
                <div className='py-2'><span className='text-purple-500'>Description: </span>{map.narrativeDescription}</div>
                <div className='py-2'><span className='text-purple-500'>Tactical Description: </span>{map.tacticalDescription}</div> 
                <div className='py-2'><span className='text-purple-500'>Coordinates: </span>{map.coordinates}</div> 
                <div className='flex mx-auto'>
                    <Image
                        src={map.splash}
                        alt={map.displayName}
                        className='w-[280px] xs:w-[400px] md:w-[420px] lg:w-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default SitesMap;