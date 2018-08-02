const formatDate = timeInSeconds => {
  if (timeInSeconds === undefined) {
    return '0s';
  }

  let seconds = timeInSeconds % 60,
    minutes = Math.floor(timeInSeconds / 60) % 60,
    hours = 0;
  if (timeInSeconds >= 3600) {
    hours = Math.floor(timeInSeconds / 3600);
  }

  let formattedTimeArray = [];

  if (hours > 0) {
    formattedTimeArray.push(`${hours}h`);
  }
  if (minutes > 0) {
    formattedTimeArray.push(`${minutes}m`);
  }
  if (seconds > 0) {
    formattedTimeArray.push(`${seconds}s`);
  }

  return formattedTimeArray.join(' ');
};

module.exports = formatDate;
