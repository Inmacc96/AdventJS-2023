function calculateTime(deliveries) {
  const totalTimeSeconds = deliveries.reduce((acum, time) => {
    const [hours, minutes, seconds] = time.split(":");

    acum += (+hours * 60 + +minutes) * 60 + +seconds;
    return acum;
  }, 0);
  const maxTimeSeconds = 60 * 60 * 7;
  const diff = maxTimeSeconds - totalTimeSeconds;
  const absoluteDiff = Math.abs(diff);

  const hour = Math.floor(absoluteDiff / 3600);
  const minute = Math.floor((absoluteDiff % 3600) / 60);
  const seconds = absoluteDiff - hour * 3600 - minute * 60;

  const hourString = hour.toString().padStart(2, "0");
  const minuteString = minute.toString().padStart(2, "0");
  const secondsString = seconds.toString().padStart(2, "0");

  return `${diff > 0 ? "-" : ""}${hourString}:${minuteString}:${secondsString}`;
}