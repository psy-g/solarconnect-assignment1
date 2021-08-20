export const useTimer = () => {   
    const week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

    const currentTimer = new Date();

    const dayTimer = () => {
        const dayString = week[currentTimer.getDay()];

        return dayString;
    }

    const dateTimer = () => {
        const dateString = `
        ${month[currentTimer.getMonth()]} 
        ${currentTimer.getDate()}, 
        ${currentTimer.getFullYear()}
        `;

        return dateString;
    }

    return {
        currentTimer,
        dayTimer,
        dateTimer,
    }
}