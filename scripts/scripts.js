const date = new Date();
const rerender = () => {
    const months = [
        "January",
        "Febuary",
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
    let month_year = months[date.getMonth()] +"&nbsp;&nbsp;"+ date.getFullYear();
    document.querySelector(".year p").innerHTML = month_year;

    const prev_Month_last_date = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const Current_Month_Last_date = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    const Current_Month_Start_Index = new Date(date.getFullYear(),date.getMonth(),0).getDay();
    const Current_Month_Last_Index = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

    let next_month = 7-Current_Month_Last_Index-1;

    let days ='';
    for(let i = Current_Month_Start_Index;i>=0;i--){
        if(Current_Month_Start_Index<6){
            days+=`<div class="prev_month">${prev_Month_last_date-i}</div>`;
        }
    }
    for(let j = 1;j<=Current_Month_Last_date;j++){
        if( j === new Date().getDate() && date.getMonth() == new Date().getMonth()){
            days+=`<div class='today'>${j}</div>`;
        }
        else{
            days+=`<div>${j}</div>`;
        }
        
    }
    if(next_month == 0){
        next_month=7;
    }
    else if(next_month<5){
        next_month+=7; 
    }
    for(let k = 1;k<=next_month;k++){
        days+=`<div class="next_month">${k}</div>`
    }
    document.querySelector('.day').innerHTML = days;
};
rerender();


document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    rerender();
});
document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    rerender();
});