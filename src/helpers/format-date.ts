const formatDate = (date: Date|string = new Date()): string => {
    console.log(date);
    if(typeof date === "string"){
        date = new Date(date);
    }

    const fullMonth = date.getMonth() > 8 ? date.getMonth()+1 : `0${date.getMonth()+1}`;
    return `${date.getDate()}/${fullMonth}/${date.getFullYear()}`;
  }

  export default formatDate;