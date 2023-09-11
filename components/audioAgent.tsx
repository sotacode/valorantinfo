import React, { useRef, useEffect, useState } from 'react';
import { BiPauseCircle, BiPlayCircle } from 'react-icons/bi';
import { Button, Progress } from '@nextui-org/react';

interface AudioAgentProps {
  initialAudioUrl: string | undefined;
}

const AudioAgent: React.FC<AudioAgentProps> = ({ initialAudioUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [switchPlay, setSwitchPlay] = useState<boolean>(true);
  const [loadedData, setLoadedData] = useState<boolean>(false)

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentTimeFormated, setCurrentTimeFormated] = useState<string>('0:00');
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    setSwitchPlay(true);
    setLoadedData(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); // Recarga el audio para que utilice la nueva URL
    }

    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      if (audioElement) {
        setCurrentTime(audioElement.currentTime * 100 / audioElement.duration);
        setCurrentTimeFormated(formatTime(audioElement.currentTime));
      }
    };

    const handleLoadedMetadata = () => {
      if (audioElement) {
        setDuration(audioElement.duration);
        setCurrentTimeFormated(formatTime(audioElement.currentTime)); // Actualiza el tiempo formateado aquí
        setLoadedData(true)
      }
    };

    const handleEnded = () => {
      audioRef.current?.pause();
      setSwitchPlay(true);
    };

    if (audioElement) {
      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.addEventListener('ended', handleEnded);

      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [initialAudioUrl]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return formattedTime;
  };

  const handlePlayAudio = () => {
    if (switchPlay) audioRef.current?.play();
    else audioRef.current?.pause();
    setSwitchPlay(!switchPlay);
  };

  return (
    <> {
      initialAudioUrl != undefined &&
      <>
        <div className="flex flex-col mt-3 gap-1">
          <Progress
            aria-label="Music progress"
            classNames={{
              indicator: 'bg-default-800 dark:bg-white',
              track: 'bg-default-500/30',
            }}
            color="secondary"
            size="sm"
            value={currentTime}
          />
          <div className="flex justify-between">
            <p className="text-small">{currentTimeFormated}</p>
            <p className="text-small text-foreground/50">{formatTime(duration)}</p>
          </div>
        </div>

        <audio ref={audioRef} controls className="hidden">
          <source src={initialAudioUrl} type="audio/wav" />
          Tu navegador no admite la reproducción de audio.
        </audio>

        <div className="flex w-full items-center justify-center">
          <Button
            isIconOnly
            className="w-auto h-auto data-[hover]:bg-foreground/10 hover:cursor-pointer"
            radius="full"
            variant="light"
            onClick={handlePlayAudio}
            disabled={!loadedData}
          >
            {switchPlay ? <BiPlayCircle className="text-5xl" /> : <BiPauseCircle className="text-5xl" />}
          </Button>
        </div>
      </>
    }
    </>
  );
};

export default AudioAgent;