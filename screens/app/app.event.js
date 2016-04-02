


const nMenuItem = document.querySelectorAll('.jsEventMenuItem')

for (var i = nMenuItem.length - 1; i >= 0; i--) {
    
    // Without param
    nMenuItem[i].addEventListener('click', this.sayHello);
    
    // With param
    // nMenuItem[i].addEventListener('click', evt => this.sayHello(evt));  
}