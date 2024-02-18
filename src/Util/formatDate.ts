export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-');
  const date: Date = new Date(Number(year), Number(month) - 1, Number(day));
  
  const formattedDay: string = String(date.getDate()).padStart(2, '0');
  const formattedMonth: string = String(date.getMonth() + 1).padStart(2, '0');
  const formattedYear: string = String(date.getFullYear());
  
  return formattedDay + '/' + formattedMonth + '/' + formattedYear;
};