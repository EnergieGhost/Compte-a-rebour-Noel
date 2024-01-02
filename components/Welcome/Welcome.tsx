import { Text, Button, ActionIcon } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './Welcome.module.css';
import { useRouter } from 'next/navigation';
import { IconSettings } from '@tabler/icons-react';

export const Noel = () => {
  const router = useRouter();
  const [day, setDay] = useState<string>('00'); //test
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');
  const [second, setSecond] = useState<string>('00');
  const [noelDate] = useState<Date>(new Date('January 31 , 2024'));

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
      <ActionIcon
        className={classes.settings}
        onClick={() => router.push('/settings')}
        variant="filled"
        color="red"
        size="xl"
        radius="md"
      >
        <IconSettings stroke={1.5} />
      </ActionIcon>
      <div className={classes.container}>
        <h1 className={classes.h1}>Votre compte à rebours personnalisé</h1>
        <div className={classes.miseenform}>
          <div className={classes.formrectangle2}>
            <Text className={classes.label2}> {day} </Text>
            <Text className={classes.label1}> Jours </Text>
          </div>
          <div className={classes.formrectangle2}>
            <Text className={classes.label2}> {hour} </Text>
            <Text className={classes.label1}> Heures </Text>
          </div>
        </div>
        <div className={classes.miseenform}>
          <div className={classes.formrectangle2}>
            <Text className={classes.label2}> {minute} </Text>
            <Text className={classes.label1}> Minutes </Text>
          </div>
          <div className={classes.formrectangle2}>
            <Text className={classes.label2}> {second} </Text>
            <Text className={classes.label1}> Secondes </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
