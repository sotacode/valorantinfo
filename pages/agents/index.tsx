import { CardAgent } from '@/components/cardAgent'
import { DetailAgent } from '@/components/detailAgent';
import { LanguageContext } from '@/context/language/LanguageContext';
import { Agent, ResponseAgents } from '@/types/agent';
import { insertCharAtIndex } from '@/utils/common';
import React, { useContext, useEffect, useState, Suspense } from 'react';
import { PiArrowFatLeftFill } from "react-icons/pi";
import dynamic from 'next/dynamic';
import { Card, CardFooter } from '@nextui-org/react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingSpinner = () => (
  <motion.svg 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="animate-spin h-64 w-64" 
    viewBox="0 0 24 24"
  >
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="4"
      fill="none"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </motion.svg>
);

const LoadingCard = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card
      isFooterBlurred
      radius="none" 
      shadow='none'
      className="border-none max-w-[300px] overflow-x-hidden flex justify-center items-center bg-transparent animate-pulse"
    >
      <svg className="w-full h-[500px] flex items-center justify-center" viewBox="0 0 300 500">
        <rect 
          x="0" 
          y="0" 
          width="300" 
          height="500" 
          className="fill-current text-violet-500/20"
        />
        
        {/* Bullet reload animation */}
        <g transform="translate(150, 250)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <circle
              key={i}
              r="8"
              cx={Math.cos((angle * Math.PI) / 180) * 30}
              cy={Math.sin((angle * Math.PI) / 180) * 30}
              className="fill-current text-violet-500"
            >
              <animate
                attributeName="opacity"
                values="0.2;1;0.2"
                dur="1s"
                begin={`${i * 0.125}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="4;8;4"
                dur="1s"
                begin={`${i * 0.125}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
      <CardFooter className="flex justify-center items-center before:bg-white/10 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-lg">
        <div className="h-8 w-32 bg-violet-500/20 rounded animate-pulse"></div>
      </CardFooter>
    </Card>
  </motion.div>
);

// Add artificial delay to test loading states


const DynamicCardAgent = dynamic(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('@/components/cardAgent'))
    }, 2000) // 1.5 second delay
  }).then((mod: any) => mod.CardAgent)
}, {
  loading: () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4 p-4"
    >
      <LoadingCard />
    </motion.div>
  ),
  ssr: false
});

async function getDataAgents() {
  const res = await fetch('https://valorant-api.com/v1/agents')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

export default function Agents() {
  const { language } = useContext(LanguageContext);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent>();
  const [showAllAgents, setShowAllAgents] = useState<Boolean>(true);
  const [isLoading, setIsLoading] = useState(true);

  const handleSelectedCard = (agent: Agent) => {
    setSelectedAgent(agent);
    setShowAllAgents(false);
  }

  const handleBackToAgents = () => {
    setShowAllAgents(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const languageFormated = insertCharAtIndex(language, "-", 2);
        const response = await fetch(`https://valorant-api.com/v1/agents?language=${languageFormated}&isPlayableCharacter=true`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la información');
        }
        const data = await response.json();
        setAgents(data.data);
        if(!selectedAgent){ 
          setSelectedAgent(data.data[0])
        }else{
          data.data.map((agent: Agent)=>{
            if(agent.uuid==selectedAgent.uuid) setSelectedAgent(agent);
            return
          })
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [language]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">
      <AnimatePresence mode="wait">
        <Suspense>
          {showAllAgents ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
            >
              {agents.map((agent) => (
                <div key={agent.uuid}>
                  {/* @ts-expect-error Server Component */}
                  <DynamicCardAgent agent={agent} handleSelectedCard={handleSelectedCard}/>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=''
            >
              <div className='absolute flex items-center justify-center w-[50px] h-[50px]'>
                <PiArrowFatLeftFill onClick={handleBackToAgents} className='absolute group text-3xl hover:text-4xl z-30 hover:transition-all hover:cursor-pointer'/>
              </div>
              {selectedAgent && <DetailAgent agent={selectedAgent} />}
            </motion.div>
          )}
        </Suspense>
      </AnimatePresence>
    </section>
  )
}
