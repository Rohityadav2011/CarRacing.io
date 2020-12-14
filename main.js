canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
nasa_mars_images_array=[];
random_number=Math.floor(Math.random()*4);
car1_width=120;
car1_height=70;
background_image=nasa_mars_images_array[random_number];
car_image="car";
car_x=10;
car_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,0,0,car1_width,car1_height)
}