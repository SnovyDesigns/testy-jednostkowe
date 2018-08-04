const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let startPoints;
  switch (hillSize) {
    case 'normal':
    case 'big':
      startPoints = 60;
      break;

    case 'mamut':
      startPoints = 120;
      break;
  }

  let finalDistance = distance - kPoint,
    additionalPoints;

  if (finalDistance >= 1 || finalDistance <= 1) {
    switch (hillSize) {
      case 'normal':
        additionalPoints = finalDistance * 2;
        break;
      case 'big':
        additionalPoints = finalDistance * 1.8;
        break;
      case 'mamut':
        additionalPoints = finalDistance * 1.2;
        break;
    }
  } else {
    additionalPoints = 0;
  }

  return startPoints + additionalPoints;
};

module.exports = calculateDistancePoints;
