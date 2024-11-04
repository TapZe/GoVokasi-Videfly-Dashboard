const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const formatNumber = (num) => (num < 10 ? "0" + num : num.toString());

  return `${formatNumber(mins)}:${formatNumber(secs)}`;
};

export default formatDuration;

