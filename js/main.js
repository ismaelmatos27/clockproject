var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    };
    return i;
};

var timeout1 = {};
var timeout2 = {};
var timeout3 = {};
var timeout4 = {};
var timeout5 = {};
var timeout6 = {};
var timeout7 = {};
var timeout8 = {};


// document.getElementById("choose").textContent="Choose a City!!!"
var display=document.getElementById("actualtime")
var actualtime = document.createElement("h1")
var actualdate = document.createElement("h2")
var actualday = document.createElement("h1")
display.appendChild(actualtime)
display.appendChild(actualdate)
display.appendChild(actualday)



    // Tokio Time

    var tokio = document.getElementById('tokio')
    tokio.onclick=  function(){
      tokioTime()}


    function tokioTime(){
      if(timeout2){
      clearTimeout(timeout2);
      }
      if(timeout3){
      clearTimeout(timeout3);
      }if(timeout4){
      clearTimeout(timeout4);
      }
      if(timeout5){
      clearTimeout(timeout5);
      }
      if(timeout6){
      clearTimeout(timeout6);
      }
      if(timeout7){
      clearTimeout(timeout7);
      }
      if(timeout8){
      clearTimeout(timeout8);
      }
      var currentTime = new Date();
      document.getElementById("choose").textContent=""
      choose.style.paddingTop="20px"
      currentTime.setHours(currentTime.getHours() + 16)


      var hour = currentTime.getHours();
      var minute = currentTime.getMinutes();
      var second = currentTime.getSeconds();
      var date=currentTime.getDate();
      var month=currentTime.getMonth();
      var year=currentTime.getFullYear();
      var day=currentTime.getDay();
      console.log(hour);
         actualday.textContent =days[day]
         if (5<hour&&hour<8){
            document.body.style.backgroundImage ="url(../clockproject/img/sunrises.jpg)"
         }
         if(7<hour&&hour<17){
            document.body.style.backgroundImage ="url(../clockproject/img/tokiosky.jpg)"
         }
         if(16<hour&&hour<19){
            document.body.style.backgroundImage ="url(../clockproject/img/sunset.jpg)"
         }
         if(hour>18 || hour<6){
            document.body.style.backgroundImage ="url(../clockproject/img/night.jpg)"
         }
       console.log(date,month,year);
         if (hour > 12) {
             hour = hour - 12;

         console.log(hour);

         minute = checkTime(minute);
         second = checkTime(second);


         actualtime.textContent=hour + ":" + minute + ":" + second + " " + "PM"

         actualdate.textContent =months[month]+ "/" + date + "/" + year


       }else if( hour == 0){
         hour = 12;
         minute = checkTime(minute);
         second = checkTime(second);
         actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

         actualdate.textContent =months[month]+ "/" + date + "/" + year

       }else if (hour < 12) {
         minute = checkTime(minute);
         second = checkTime(second);
         actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

         actualdate.textContent =months[month]+ "/" + date + "/" + year

       }

      //  display.style.backgroundImage ="url(../clockproject/img/tokiosky.jpg)"
      //  display.setAttribute("backgroundSize","cover")

       timeout1=setTimeout(function(){tokioTime()}, 1000);

     }

    //  SFCO Time
     var sfco=document.getElementById("sanfco")
     sfco.onclick = function(){
        sfcoTime()}

     function sfcoTime(){
       if(timeout1){
       clearTimeout(timeout1);
       }
       if(timeout3){
      clearTimeout(timeout3);
      }
      if(timeout4){
      clearTimeout(timeout4);
      }
      if(timeout5){
      clearTimeout(timeout5);
      }
      if(timeout6){
      clearTimeout(timeout6);
      }
      if(timeout7){
      clearTimeout(timeout7);
      }
      if(timeout8){
      clearTimeout(timeout8);
      }
       var currentTime = new Date();
       document.getElementById("choose").textContent=""
         choose.style.paddingTop="20px"
       var hour = currentTime.getHours();
       var minute = currentTime.getMinutes();
       var second = currentTime.getSeconds();
       var date=currentTime.getDate();
       var month=currentTime.getMonth();
       var year=currentTime.getFullYear();
       var day=currentTime.getDay();
       actualday.textContent = days[day]
       if (5<hour&&hour<8){
          document.body.style.backgroundImage ="url(../clockproject/img/sunrises.jpg)"
       }
       if(7<hour&&hour<17){
          document.body.style.backgroundImage ="url(../clockproject/img/tokiosky.jpg)"
       }
       if(16<hour&&hour<19){
          document.body.style.backgroundImage ="url(../clockproject/img/sunset.jpg)"
       }
       if(hour>18 || hour<6){
          document.body.style.backgroundImage ="url(../clockproject/img/night.jpg)"
       }
          if (hour > 12) {
              hour = hour - 12;

          // console.log(hour);

          minute = checkTime(minute);
          second = checkTime(second);
          actualtime.textContent = hour + ":" + minute + ":" + second + " " + "PM";
          actualdate.textContent = months[month]+ "/" + date + "/" + year;
        }else {
          minute = checkTime(minute);
          second = checkTime(second);
          actualtime.textContent = hour + ":" + minute + ":" + second + " " + "AM";
          actualdate.textContent = months[month]+ "/" + date + "/" + year;
        }

          timeout2=setTimeout(function(){sfcoTime()}, 1000);

        }
// London Time
var london=document.getElementById("london")
london.onclick = function(){
   londonTime()}

function londonTime(){
  if(timeout1){
  clearTimeout(timeout1);
  }
  if(timeout2){
  clearTimeout(timeout2);
  }
  if(timeout4){
  clearTimeout(timeout4);
  }
  if(timeout5){
  clearTimeout(timeout5);
  }
  if(timeout6){
  clearTimeout(timeout6);
  }
  if(timeout7){
  clearTimeout(timeout7);
  }
  if(timeout8){
  clearTimeout(timeout8);
  }
  var currentTime = new Date();
  currentTime.setHours(currentTime.getHours() + 8)
  document.getElementById("choose").textContent=""
    choose.style.paddingTop="20px"
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();
  var date=currentTime.getDate();
  var month=currentTime.getMonth();
  var year=currentTime.getFullYear();
  var day=currentTime.getDay();
  actualday.textContent = days[day]
  if (5<hour&&hour<8){
     document.body.style.backgroundImage ="url(../clockproject/img/sunrises.jpg)"
  }
  if(7<hour&&hour<17){
     document.body.style.backgroundImage ="url(../clockproject/img/tokiosky.jpg)"
  }
  if(16<hour&&hour<19){
     document.body.style.backgroundImage ="url(../clockproject/img/sunset.jpg)"
  }
  if(hour>18 || hour<6){
     document.body.style.backgroundImage ="url(../clockproject/img/night.jpg)"
  }
     if (hour > 12) {
         hour = hour - 12;

     // console.log(hour);

     minute = checkTime(minute);
     second = checkTime(second);
     actualtime.textContent = hour + ":" + minute + ":" + second + " " + "PM";
     actualdate.textContent = months[month]+ "/" + date + "/" + year;
   }else if( hour == 0){
     hour = 12;
     minute = checkTime(minute);
     second = checkTime(second);
     actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

     actualdate.textContent =months[month]+ "/" + date + "/" + year

   }else if (hour < 12) {
     minute = checkTime(minute);
     second = checkTime(second);
     actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

     actualdate.textContent =months[month]+ "/" + date + "/" + year

   }

     timeout3=setTimeout(function(){londonTime()}, 1000);

   }

// NYC Time
    var nyc=document.getElementById("nyc")
    nyc.onclick = function(){
       nycTime()}

    function nycTime(){
      if(timeout1){
      clearTimeout(timeout1);
      }
      if(timeout2){
      clearTimeout(timeout2);
      }
      if(timeout3){
      clearTimeout(timeout3);
      }
      if(timeout5){
      clearTimeout(timeout5);
      }
      if(timeout6){
      clearTimeout(timeout6);
      }
      if(timeout7){
      clearTimeout(timeout7);
      }
      if(timeout8){
      clearTimeout(timeout8);
      }
      var currentTime = new Date();
      currentTime.setHours(currentTime.getHours() + 3)
      document.getElementById("choose").textContent=""
        choose.style.paddingTop="20px"
      var hour = currentTime.getHours();
      var minute = currentTime.getMinutes();
      var second = currentTime.getSeconds();
      var date=currentTime.getDate();
      var month=currentTime.getMonth();
      var year=currentTime.getFullYear();
      var day=currentTime.getDay();
      actualday.textContent = days[day]
      if (5<hour&&hour<8){
         document.body.style.backgroundImage ="url(../clockproject/img/sunrises.jpg)"
      }
      if(7<hour&&hour<17){
         document.body.style.backgroundImage ="url(../clockproject/img/tokiosky.jpg)"
      }
      if(16<hour&&hour<19){
         document.body.style.backgroundImage ="url(../clockproject/img/sunset.jpg)"
      }
      if(hour>18 || hour<6){
         document.body.style.backgroundImage ="url(../clockproject/img/night.jpg)"
      }
         if (hour > 12) {
             hour = hour - 12;

         // console.log(hour);

         minute = checkTime(minute);
         second = checkTime(second);
         actualtime.textContent = hour + ":" + minute + ":" + second + " " + "PM";
         actualdate.textContent = months[month]+ "/" + date + "/" + year;
       }else if( hour == 0){
         hour = 12;
         minute = checkTime(minute);
         second = checkTime(second);
         actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

         actualdate.textContent =months[month]+ "/" + date + "/" + year

       }else if (hour < 12) {
         minute = checkTime(minute);
         second = checkTime(second);
         actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

         actualdate.textContent =months[month]+ "/" + date + "/" + year

       }

         timeout4=setTimeout(function(){nycTime()}, 1000);

       }

// Paris Time
var paris=document.getElementById("paris")
paris.onclick = function(){
   parisTime()}

function parisTime(){
  if(timeout1){
  clearTimeout(timeout1);
  }
  if(timeout2){
  clearTimeout(timeout2);
  }
  if(timeout3){
  clearTimeout(timeout3);
  }
  if(timeout4){
  clearTimeout(timeout4);
  }
  if(timeout6){
  clearTimeout(timeout6);
  }
  if(timeout7){
  clearTimeout(timeout7);
  }
  if(timeout8){
  clearTimeout(timeout8);
  }
  var currentTime = new Date();
  currentTime.setHours(currentTime.getHours() + 9)
  document.getElementById("choose").textContent=""
    choose.style.paddingTop="20px"
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();
  var date=currentTime.getDate();
  var month=currentTime.getMonth();
  var year=currentTime.getFullYear();
  var day=currentTime.getDay();
  actualday.textContent = days[day]
  if (5<hour&&hour<8){
     document.body.style.backgroundImage ="url(../clockproject/img/sunrises.jpg)"
  }
  if(7<hour&&hour<17){
     document.body.style.backgroundImage ="url(../clockproject/img/tokiosky.jpg)"
  }
  if(16<hour&&hour<19){
     document.body.style.backgroundImage ="url(../clockproject/img/sunset.jpg)"
  }
  if(hour>18 || hour<6){
     document.body.style.backgroundImage ="url(../clockproject/img/night.jpg)"
  }
     if (hour > 12) {
         hour = hour - 12;

     // console.log(hour);

     minute = checkTime(minute);
     second = checkTime(second);
     actualtime.textContent = hour + ":" + minute + ":" + second + " " + "PM";
     actualdate.textContent = months[month]+ "/" + date + "/" + year;
   }else if( hour == 0){
     hour = 12;
     minute = checkTime(minute);
     second = checkTime(second);
     actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

     actualdate.textContent =months[month]+ "/" + date + "/" + year

   }else if (hour < 12) {
     minute = checkTime(minute);
     second = checkTime(second);
     actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

     actualdate.textContent =months[month]+ "/" + date + "/" + year

   }

     timeout5=setTimeout(function(){parisTime()}, 1000);

   }



   // MoscowTime
   var moscow=document.getElementById("moscow")
   moscow.onclick = function(){
      moscowTime()}

   function moscowTime(){
     if(timeout1){
     clearTimeout(timeout1);
     }
     if(timeout2){
     clearTimeout(timeout2);
     }
     if(timeout3){
     clearTimeout(timeout3);
     }
     if(timeout4){
     clearTimeout(timeout4);
     }
     if(timeout5){
     clearTimeout(timeout5);
     }
     if(timeout7){
     clearTimeout(timeout7);
     }
     if(timeout8){
     clearTimeout(timeout8);
     }
     var currentTime = new Date();
     currentTime.setHours(currentTime.getHours() + 10)
     document.getElementById("choose").textContent=""
       choose.style.paddingTop="20px"
     var hour = currentTime.getHours();
     var minute = currentTime.getMinutes();
     var second = currentTime.getSeconds();
     var date=currentTime.getDate();
     var month=currentTime.getMonth();
     var year=currentTime.getFullYear();
     var day=currentTime.getDay();
     actualday.textContent = days[day]
     if (5<hour&&hour<8){
        document.body.style.backgroundImage ="url(../clockproject/img/sunrises.jpg)"
     }
     if(7<hour&&hour<17){
        document.body.style.backgroundImage ="url(../clockproject/img/tokiosky.jpg)"
     }
     if(16<hour&&hour<19){
        document.body.style.backgroundImage ="url(../clockproject/img/sunset.jpg)"
     }
     if(hour>18 || hour<6){
        document.body.style.backgroundImage ="url(../clockproject/img/night.jpg)"
     }
        if (hour > 12) {
            hour = hour - 12;

        // console.log(hour);

        minute = checkTime(minute);
        second = checkTime(second);
        actualtime.textContent = hour + ":" + minute + ":" + second + " " + "PM";
        actualdate.textContent = months[month]+ "/" + date + "/" + year;
      }else if( hour == 0){
        hour = 12;
        minute = checkTime(minute);
        second = checkTime(second);
        actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

        actualdate.textContent =months[month]+ "/" + date + "/" + year

      }else if (hour < 12) {
        minute = checkTime(minute);
        second = checkTime(second);
        actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

        actualdate.textContent =months[month]+ "/" + date + "/" + year

      }

        timeout6=setTimeout(function(){moscowTime()}, 1000);

      }



      // Dubai Time
      var dubai=document.getElementById("dubai")
      dubai.onclick = function(){
         dubaiTime()}

      function dubaiTime(){
        if(timeout1){
        clearTimeout(timeout1);
        }
        if(timeout2){
        clearTimeout(timeout2);
        }
        if(timeout3){
        clearTimeout(timeout3);
        }
        if(timeout4){
        clearTimeout(timeout4);
        }
        if(timeout5){
        clearTimeout(timeout5);
        }
        if(timeout6){
        clearTimeout(timeout6);
        }
        if(timeout8){
        clearTimeout(timeout8);
        }
        var currentTime = new Date();
        currentTime.setHours(currentTime.getHours() + 11)
        document.getElementById("choose").textContent=""
          choose.style.paddingTop="20px"
        var hour = currentTime.getHours();
        var minute = currentTime.getMinutes();
        var second = currentTime.getSeconds();
        var date=currentTime.getDate();
        var month=currentTime.getMonth();
        var year=currentTime.getFullYear();
        var day=currentTime.getDay();
        actualday.textContent = days[day]
        if (5<hour&&hour<8){
           document.body.style.backgroundImage ="url(../clockproject/img/sunrises.jpg)"
        }
        if(7<hour&&hour<17){
           document.body.style.backgroundImage ="url(../clockproject/img/tokiosky.jpg)"
        }
        if(16<hour&&hour<19){
           document.body.style.backgroundImage ="url(../clockproject/img/sunset.jpg)"
        }
        if(hour>18 || hour<6){
           document.body.style.backgroundImage ="url(../clockproject/img/night.jpg)"
        }
           if (hour > 12) {
               hour = hour - 12;

           // console.log(hour);

           minute = checkTime(minute);
           second = checkTime(second);
           actualtime.textContent = hour + ":" + minute + ":" + second + " " + "PM";
           actualdate.textContent = months[month]+ "/" + date + "/" + year;
         }else if( hour == 0){
           hour = 12;
           minute = checkTime(minute);
           second = checkTime(second);
           actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

           actualdate.textContent =months[month]+ "/" + date + "/" + year

         }else if (hour < 12) {
           minute = checkTime(minute);
           second = checkTime(second);
           actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

           actualdate.textContent =months[month]+ "/" + date + "/" + year

         }

           timeout7=setTimeout(function(){dubaiTime()}, 1000);

         }


         // Rio Time
         var rio=document.getElementById("rio")
         rio.onclick = function(){
            rioTime()}

         function rioTime(){
           if(timeout1){
           clearTimeout(timeout1);
           }
           if(timeout2){
           clearTimeout(timeout2);
           }
           if(timeout3){
           clearTimeout(timeout3);
           }
           if(timeout4){
           clearTimeout(timeout4);
           }
           if(timeout5){
           clearTimeout(timeout5);
           }
           if(timeout6){
           clearTimeout(timeout6);
           }
           if(timeout7){
           clearTimeout(timeout7);
           }
           var currentTime = new Date();
           currentTime.setHours(currentTime.getHours() + 4)
           document.getElementById("choose").textContent=""
             choose.style.paddingTop="20px"
           var hour = currentTime.getHours();
           var minute = currentTime.getMinutes();
           var second = currentTime.getSeconds();
           var date=currentTime.getDate();
           var month=currentTime.getMonth();
           var year=currentTime.getFullYear();
           var day=currentTime.getDay();
           actualday.textContent = days[day]
           if (5<hour&&hour<8){
              document.body.style.backgroundImage ="url(../clockproject/img/sunrises.jpg)"
           }
           if(7<hour&&hour<17){
              document.body.style.backgroundImage ="url(../clockproject/img/tokiosky.jpg)"
           }
           if(16<hour&&hour<19){
              document.body.style.backgroundImage ="url(../clockproject/img/sunset.jpg)"
           }
           if(hour>18 || hour<6){
              document.body.style.backgroundImage ="url(../clockproject/img/night.jpg)"
           }
              if (hour > 12) {
                  hour = hour - 12;

              // console.log(hour);

              minute = checkTime(minute);
              second = checkTime(second);
              actualtime.textContent = hour + ":" + minute + ":" + second + " " + "PM";
              actualdate.textContent = months[month]+ "/" + date + "/" + year;
            }else if( hour == 0){
              hour = 12;
              minute = checkTime(minute);
              second = checkTime(second);
              actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

              actualdate.textContent =months[month]+ "/" + date + "/" + year

            }else if (hour < 12) {
              minute = checkTime(minute);
              second = checkTime(second);
              actualtime.textContent= hour + ":" + minute + ":" + second + " " + "AM"

              actualdate.textContent =months[month]+ "/" + date + "/" + year

            }

              timeout8=setTimeout(function(){rioTime()}, 1000);

            }
// tokioTime()
// var tokio = document.getElementById('tokio')
// tokio.onclick=  function(){
//
//   tokioTime()
//
//
//
//
//   function tokioTime() {
//     var currentTime = new Date();
//     currentTime.setHours(currentTime.getHours() + 16)
//
//   console.log(currentTime)
//
//     var hour = currentTime.getHours();
//     var minute = currentTime.getMinutes();
//     var second = currentTime.getSeconds();
//     var date=currentTime.getDate();
//     var month=currentTime.getMonth();
//     var year=currentTime.getFullYear();
//     var day=currentTime.getDay();
//
//   console.log(day,month,year);
//     if (hour > 12) {
//         hour = hour - 12;
//
//     console.log(hour);
//
//     minute = checkTime(minute);
//     second = checkTime(second);
//     document.getElementById('actualtime').textContent = hour + ":" + minute + ":" + second + " " + "PM";
//     document.getElementById('actualdate').textContent = months[month]+ "/" + date + "/" + year;
//   }else {
//     minute = checkTime(minute);
//     second = checkTime(second);
//     document.getElementById('actualtime').textContent = hour + ":" + minute + ":" + second + " " + "AM";
//     document.getElementById('actualdate').textContent = months[month]+ "/" + date + "/" + year;
//   }
//   document.getElementById("actualday").textContent = days[day]
//
//
//     setTimeout(function() {
//
//     tokioTime()}, 1000);
//
//   }
// }


// var tokio = document.getElementById('tokio')
// tokio.click(function()){
//   this.data("clicked",true)
// }
// tokio.addEventListener('click', tokioTime, false);
