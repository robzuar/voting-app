"use strict";function createVotes(t){for(var e=0;e<t.length;e++){var o="vote-"+e,a=document.createElement("input"),l=document.createElement("label"),n=document.createElement("div"),i=document.createElement("li");a.classList.add("vote"),a.setAttribute("type","radio"),a.setAttribute("name","vote"),a.setAttribute("id",o),a.setAttribute("value",e),0===e&&a.setAttribute("checked",!0),l.setAttribute("for",o),l.classList.add("votelabel"),l.innerHTML=t[e].optionName,n.classList.add("check"),i.classList.add("optionlistval"),i.appendChild(a),i.appendChild(l),i.appendChild(n),document.getElementById("optionlist").appendChild(i)}}var a=document.getElementsByClassName("allcharts")[0],i=a.getAttribute("id");qwest.get("/polls/getone/"+i).then(function(t,e){e.error&&(window.location="/404"),createCharts(e.poll,a,!0,!0),createVotes(e.poll[0].options)}).catch(function(t){console.log(t)}),console.log(localStorage);