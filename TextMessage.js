class TextMessage{
  constructor({text, onComplete}){
    this.text = text; 
    this.onComplete = onComplete
    this.element = null;
  }

  createElement(){

  }

  init(container){
    this.createElement()
  }
}