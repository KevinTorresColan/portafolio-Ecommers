export const formatNumber = (number: number) => {
  let newNumber = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return 'S/ ' + newNumber;
}