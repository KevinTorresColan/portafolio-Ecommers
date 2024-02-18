export const getTodayDate = () => {
  const formatDate = new Date();
  const day = formatDate.toString().split(" ")[2];
  const month = formatDate.getMonth() + 1;
  const year = formatDate.getFullYear();

  return `${year}-${month < 10 ? "0" + month : month}-${
    day.length === 1 ? "0" + day : day
  }`;
};