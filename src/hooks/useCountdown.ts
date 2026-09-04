import { useState, useEffect } from "react";

interface CountdownValues {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function useCountdown(targetDate: string): CountdownValues {
  const [countdown, setCountdown] = useState<CountdownValues>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculate = () => {
      const target = new Date(targetDate);
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setCountdown({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      let years = target.getFullYear() - now.getFullYear();
      let months = target.getMonth() - now.getMonth();
      let days = target.getDate() - now.getDate();
      let hours = target.getHours() - now.getHours();
      let minutes = target.getMinutes() - now.getMinutes();
      let seconds = target.getSeconds() - now.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setCountdown({
        years: Math.max(0, years),
        months: Math.max(0, months),
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
        isExpired: false,
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}
