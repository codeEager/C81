canvas = document.getElementById("myCanvas");
cgc = canvas.getContext("2d");

// red //
canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = "#DF0024";
canvas.getContext("2d").lineWidth = 5;
canvas.getContext("2d").arc(580,100,40,0, 2* Math.PI);
canvas.getContext("2d").stroke();

// green //
cgc.beginPath();
cgc.strokeStyle = "#009F3D";
cgc.lineWidth = 5;
cgc.arc(535,150,40,0, 2* Math.PI);
cgc.stroke();

//black//
cgc.beginPath();
cgc.strokeStyle = "#000000";
cgc.lineWidth = 5;
cgc.arc(490,100,40,0, 2* Math.PI);
cgc.stroke();

// yellow //
cgc.beginPath();
cgc.strokeStyle = "#F4C300";
cgc.lineWidth = 5;
cgc.arc(445,150,40,0, 2* Math.PI);
cgc.stroke();

// blue //
cgc.beginPath();
cgc.strokeStyle = "#0085C7";
cgc.lineWidth = 5;
cgc.arc(400,100,40,0, 2* Math.PI);
cgc.stroke();