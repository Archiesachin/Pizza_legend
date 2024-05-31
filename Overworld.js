class Overworld{
  constructor(config){
    this.element = config.element;
    this.canvas = this.element.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext("2d");
  }

  init(){
    const image = new Image();   //Create a new image
    image.onload =() =>{
      this.ctx.drawImage(image, 0,0) //canvas has a context ctx which allows us to draw on the canvas. 0,0 is the pixels where our image is pasted. 
    }

    image.src='/images/maps/DemoLower.png' //Assign source to the image

    const x = 5; //variables to move the character
    const y = 6;


    const shadow = new Image()
    shadow.onload =() => {
      this.ctx.drawImage(
        shadow, 
        0, //left cut
        0, //top cut
        32, //width of cut
        32, //height of cut
        x * 16 -8,
        y *16 -18,
        32, 
        32
      )
    }
    shadow.src ="/images/characters/shadow.png"




    const hero = new Image();
    hero.onload =() =>{
      this.ctx.drawImage(
        hero, 
        0, //left cut
        0, //top cut
        32, //width of cut
        32, //height of cut
        x * 16 -8,
        y *16 -18,
        32, 
        32
      )
    }

    hero.src = '/images/characters/people/hero.png'
  }
}