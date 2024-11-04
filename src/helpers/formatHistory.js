const formatHistory = (date) => {
  const now = new Date();
  const updatedDate = new Date(date);
  const diffInSeconds = Math.floor((now - updatedDate) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} hari yang lalu`;
  } else if (hours > 0) {
    return `${hours} jam yang lalu`;
  } else if (minutes > 0) {
    return `${minutes} menit yang lalu`;
  } else {
    return `Baru saja`;
  }
};

export default formatHistory;
