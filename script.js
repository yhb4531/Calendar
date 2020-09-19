//getting Current Date data
const date = new Date();

//to make arrow keys to work to change month
const renderCalender = function(){
    
    //sets the current date to first day of the month
    //then we can find out on which day the month starts
    date.setDate(1);
    const firstDayIndex = date.getDay();
    
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    //selecting days of the month
    const calendarDay = document.querySelector('.days');
    
    //Receiving full date
    //Last argument 0 refers the last day of the previous month
    //So should add 1 on second argument which refers to month to get a last day of current month
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    console.log(lastDayIndex);
    
    const nextDay = 7 - lastDayIndex - 1;
    
    
    
    //Month array to properly select current month
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
        "December"
    ];
    
    //setting month and year to current time
    document.querySelector(".date h1").innerHTML = month[date.getMonth()];
    document.querySelector(".date p").innerHTML = date.getFullYear();
    
    
    //making a day string and adding it to HTML days
    let days = "";
    
    
    //sets previous month days
    for (let i = firstDayIndex; i > 0; i--){
        days += `<div class="prev-date">${prevLastDay - i}</div>`;
    }
    
    //sets current month days
    //check if month and i matches to current month and day, then add highlight style
    for(let i = 1; i <= lastDay; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        }else{
        days += `<div>${i}</div>`;
        }
    }
    
    //sets next month days
    //Should add innerHTML line here, because days string is stacked up until this for loop
    //If statement needed because it would not work when nextDay = 0
    if(nextDay >= 1){
        for(let i = 1; i <= nextDay; i++){
            days += `<div class="next-date">${i}</div>`
            calendarDay.innerHTML = days;
        }
    }else{
        for(let i = 0; i<= nextDay; i++){
            days += `<div class="none">${i}</div>`
            calendarDay.innerHTML = days;
        }
    }
}


document.querySelector(".prev").addEventListener("click", function(){
    date.setMonth(date.getMonth() - 1);
    renderCalender();
})

document.querySelector(".next").addEventListener("click", function(){
    date.setMonth(date.getMonth() + 1)
    renderCalender();
})

renderCalender();