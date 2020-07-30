
function calcDay(days){
    //전달받은 값을 밀리세컨드로 변환해야한다.
    var anni = days*24*60*60*1000 // 일을 밀리세컨드로 변경
    var passDay2 = start + anni;
    //밀리세컨드를 Date객체로 다시 만들어주어야함 > 년월일을 구하기 위해서 
    var someDate = new Date(passDay2);

    var year = someDate.getFullYear();
    var month = someDate.getMonth()+1;
    var date = someDate.getDate();

    console.log(year + " " + month + " " +date);

    //월을 2자리로 만드는 방법 1월이 아니라 01월 이런식으로 변경
    var month2 ="";
    var day2 ="";
    if(month < 10){
        month2 = "0" + month;
    }else
    month2 = month;

    if(date<10){
        day2 = "0" + date;
    }else{
        day2 = date
    }

    document.querySelector("#date"+ days).innerHTML = year + " " + month2 + " " +day2;
}

var start;
function setAnniDay(){
    var anni_day = document.querySelector('#anni_day').value;

    if(anni_day == 0){
        alert('Please select Date')
    }

    var now = new Date();
    var firstDate = new Date('2019-12-25');
    console.log(anni_day);
    console.log(firstDate);
    console.log(now);
    console.log(firstDate.toLocaleString());
    console.log(now.toLocaleString());
    start = firstDate.getTime();
    var end = now.getTime();

    var pass = end-start;
    var pass_day = Math.floor(pass/1000/60/60/24);
    document.querySelector('#passday').innerHTML = pass_day;

    console.log(pass/1000+ "ms")



    calcDay(100);
    calcDay(200);
    calcDay(365);
    calcDay(500);
    calcDay(730);
    calcDay(1000);
}
