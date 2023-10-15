const formatDate = (date: Date) => {
    const fullMonth = date.getMonth() > 8 ? date.getMonth()+1 : `0${date.getMonth()+1}`;
    return `${date.getDate()}/${fullMonth}/${date.getFullYear()}`;
  }

  export default formatDate;