export const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Array(new Date(year, month + 1, 0).getDate()).fill(null).map((_, i) => i + 1);
  };
  
  export const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };
  