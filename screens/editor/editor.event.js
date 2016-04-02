


const nTabItem = document.querySelectorAll('.jsEventTabItem')

const nTabItemClose = document.querySelectorAll('.jsEventTabItemClose')

for (var i = nTabItemClose.length - 1; i >= 0; i--) {
    
    // Without param
    nTabItemClose[i].addEventListener('click', this.sayHello);
    
    // With param
    // nMenuItem[i].addEventListener('click', evt => this.sayHello(evt));  
}