import { Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './Noel.module.css';

export const Noel = () => {
  const [day, setDay] = useState<string>('00');
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');
  const [second, setSecond] = useState<string>('00');
  const [noelDate] = useState<Date>(new Date('December 25 , 2023'));

  const formatValue = (value: number): string => {
    if (value < 10) {
      return `0${value}`;
    }
    return value.toString();
  };

  const calcul = () => {
    const today = new Date();
    const difference = noelDate.getTime() - today.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setDay(formatValue(days));
    setHour(formatValue(hours));
    setMinute(formatValue(minutes));
    setSecond(formatValue(seconds));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      calcul();
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <h1 className={classes.h1}>Compte à rebours avant Noel</h1>
        <Text className={classes.label}>
          {day} Jour et {hour}:{minute}:{second}
        </Text>
        <h2 className={classes.h1}>Dev by Twelve57 and Thomas00D</h2>
      </div>
    </div>
  );
};
