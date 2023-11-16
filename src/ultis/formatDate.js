
  

    export const getLastMessageTime = ({ time, showYear = false }) => {
      console.log("time", time);
      
  
      const timestamp = isNaN(time) ? Date.parse(time) : parseInt(time);
      const sent = new Date(timestamp);
      const now = new Date();
    
      if (
        now.getDate() === sent.getDate() &&
        now.getMonth() === sent.getMonth() &&
        now.getFullYear() === sent.getFullYear()
      ) {
        return sent.toLocaleTimeString();
      }
      
      return showYear
        ? `${sent.getDate()} ${_getMonth(sent)} ${sent.getFullYear()}`
        : `${sent.getDate()} ${_getMonth(sent)}`;
    };
  
   
  
    export const getMessageTime = ({ time }) => {
      const sent = new Date(parseInt(time));
      const now = new Date();
  
      const formattedTime = sent.toLocaleTimeString();
      if (
        now.getDate() === sent.getDate() &&
        now.getMonth() === sent.getMonth() &&
        now.getFullYear() === sent.getFullYear()
      ) {
        return formattedTime;
      }
  
      return now.getFullYear() === sent.getFullYear()
        ? `${formattedTime} - ${sent.getDate()} ${_getMonth(sent)}`
        : `${formattedTime} - ${sent.getDate()} ${_getMonth(sent)} ${sent.getFullYear()}`;
    }
  
    const _getMonth = (date) => {
      console.log(date);
      switch (date.getMonth() + 1) {
        case 1:
          return 'Jan';
        case 2:
          return 'Feb';
        case 3:
          return 'Mar';
        case 4:
          return 'Apr';
        case 5:
          return 'May';
        case 6:
          return 'Jun';
        case 7:
          return 'Jul';
        case 8:
          return 'Aug';
        case 9:
          return 'Sept';
        case 10:
          return 'Oct';
        case 11:
          return 'Nov';
        case 12:
          return 'Dec';
      }
      return 'NA';
    }
  
  
  