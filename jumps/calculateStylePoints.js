const calculateStylePoints = styleNotes => {
  const minNote = Math.min(...styleNotes),
    minIndex = styleNotes.indexOf(minNote);
  styleNotes.splice(minIndex, 1);

  const maxNote = Math.max(...styleNotes),
    maxIndex = styleNotes.indexOf(maxNote);
  styleNotes.splice(maxIndex, 1);

  return Number(styleNotes.reduce((prevVal, val) => prevVal + val).toFixed(1));
};

module.exports = calculateStylePoints;
