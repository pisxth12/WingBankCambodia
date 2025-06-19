const image = document.getElementById('img');
const back = document.getElementById('btn-left')
const next = document.getElementById('btn-right')

const imgList = ['../../img/Web-Slider-Desktop-KH.jpg',
                 '../../img/Free-Cash-Out-English-6.jpg',
                 '../../img/Save-for-goal-Web-Slider-ENG.jpg'
                ];   
                
let item = 0;
image.src = imgList[item]
 setInterval(()=> {
            item = (item+1) % imgList.length;
            image.src=imgList[item]
        },3000);

next.addEventListener('click', function(){  
    item = (item+1) % imgList.length;
    image.src = imgList[item];

    if(!autoSlide){
        autoSlide = true;
        setInterval(()=> {
            item = (item+1) % imgList.length;
            image.src=imgList[item]
        },5000);
    }
    
})

back.addEventListener('click', function(){
    item = (item -1 +imgList.length) %imgList.length;
    image.src = imgList[item]

})
