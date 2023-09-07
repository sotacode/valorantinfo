import { CardAgent } from '@/components/cardAgent'
import { DetailAgent } from '@/components/detailAgent';
import { LanguageContext } from '@/context/language/LanguageContext';
import { Agent, ResponseAgents } from '@/types/agent';
import { insertCharAtIndex } from '@/utils/common';
import React, { useContext, useEffect, useState } from 'react';
import { PiArrowFatLeftFill } from "react-icons/pi";


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
      }
    };

    fetchData();
  }, [language]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">

      {showAllAgents ?
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent) => {
            return <div key={agent.uuid}>
              <CardAgent agent={agent} handleSelectedCard={handleSelectedCard}/>
            </div>
          })}
        </div>
        :
        <div className=''>
          <div className='absolute flex items-center justify-center w-[50px] h-[50px]'>
            <PiArrowFatLeftFill onClick={handleBackToAgents} className='absolute group text-3xl hover:text-4xl z-30 hover:transition-all'/>
          </div>
          {selectedAgent && <DetailAgent agent={selectedAgent} />}
        </div>
      }


    </section>
  )
}
