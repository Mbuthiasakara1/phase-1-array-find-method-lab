// code your solution here
function superbowlWin(record) {
  const winningRecord = record.find(function (element) {
    return element.result === "W";
  });

  if (winningRecord) {
    return winningRecord.year;
  } else {
    return undefined;
  }
}
