let nElem

const treeCtrl = () => {

    const aTree =  [
        {
            isFile: false,
            name: "components",
            level1: [
                {
                    isFile: false,
                    name: "debug",
                    level2: [
                        {
                            isFile: true,
                            "name": "debug.js"
                        }
                    ]
                },
                {
                    isFile: false,
                    name: "log",
                    level2: [
                        {
                            isFile: true,
                            "name": "log.js"
                        }
                    ]
                }
            ]
        },
        {
            name: "app"
        }
    ]       

    const oTree = {
        "title": "Curriculum Vitae",
        "tree": aTree
    }        

    console.log( oTree );

    const template = require('./tree.html')

    const html = template( oTree )

    require('./tree.css')

    if( nElem === undefined ) {
        nElem = document.getElementById('jsTree')
    }

    nElem.innerHTML = html
}
export default treeCtrl