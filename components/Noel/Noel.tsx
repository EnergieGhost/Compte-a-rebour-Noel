import { Text } from '@mantine/core';
import classes from './Noel.module.css';
import { useEffect, useState } from 'react';

export const Noel = () => {
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');
  const [second, setSecond] = useState<string>('00');

  const calcul = () => {
    const date = new Date().toTimeString().split(' ');
    const time = date[0].split(':');
    setHour(time[0]);
    setMinute(time[1]);
    setSecond(time[2]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      calcul();
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={classes.body}>
      <h1 className={classes.titre}>Compte à rebours avant Noel</h1>
      <Text className={classes.label}>
        {hour}:{minute}:{second}
      </Text>
    </div>
  );
};
