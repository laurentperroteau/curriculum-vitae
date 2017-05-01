export interface Tree {
  isFolder: boolean,
  name    : string,
  children: any,
}

export const TREE_DATA: Tree = {
    "isFolder": true,
    "name": "",
    "children": [
        {
            "fullPath": "./app.js",
            "isFolder": false,
            "name": "app.js"
        },
        {
            "fullPath": "./content",
            "isFolder": true,
            "name": "content",
            "children": [
                {
                    "fullPath": "./content/demo.js",
                    "isFolder": false,
                    "name": "demo.js"
                },
                {
                    "fullPath": "./content/RESUME.md",
                    "isFolder": false,
                    "name": "RESUME.md"
                }
            ]
        },
        {
            "fullPath": "./webpack.config.js",
            "isFolder": false,
            "name": "webpack.config.js"
        },
        {
            "fullPath": "./README-fr.md",
            "isFolder": false,
            "name": "README-fr.md"
        },
        {
            "fullPath": "./config",
            "isFolder": true,
            "name": "config",
            "children": [
                {
                    "fullPath": "./config/global.config.js",
                    "isFolder": false,
                    "name": "global.config.js"
                },
                {
                    "fullPath": "./config/webpack.resolve.js",
                    "isFolder": false,
                    "name": "webpack.resolve.js"
                },
                {
                    "fullPath": "./config/webpack.module.js",
                    "isFolder": false,
                    "name": "webpack.module.js"
                },
                {
                    "fullPath": "./config/webpack.karma.js",
                    "isFolder": false,
                    "name": "webpack.karma.js"
                }
            ]
        },
        {
            "fullPath": "./service",
            "isFolder": true,
            "name": "service",
            "children": [
                {
                    "fullPath": "./service/support",
                    "isFolder": true,
                    "name": "support",
                    "children": [
                        {
                            "fullPath": "./service/support/promise.js",
                            "isFolder": false,
                            "name": "promise.js"
                        }
                    ]
                },
                {
                    "fullPath": "./service/log",
                    "isFolder": true,
                    "name": "log",
                    "children": [
                        {
                            "fullPath": "./service/log/log.js",
                            "isFolder": false,
                            "name": "log.js"
                        },
                        {
                            "fullPath": "./service/log/displayLog.js",
                            "isFolder": false,
                            "name": "displayLog.js"
                        }
                    ]
                },
                {
                    "fullPath": "./service/linkedIn",
                    "isFolder": true,
                    "name": "linkedIn",
                    "children": [
                        {
                            "fullPath": "./service/linkedIn/LinkedInCtrl.js",
                            "isFolder": false,
                            "name": "LinkedInCtrl.js"
                        },
                        {
                            "fullPath": "./service/linkedIn/LinkedInClass.js",
                            "isFolder": false,
                            "name": "LinkedInClass.js"
                        }
                    ]
                },
                {
                    "fullPath": "./service/write",
                    "isFolder": true,
                    "name": "write",
                    "children": [
                        {
                            "fullPath": "./service/write/WriteClass.js",
                            "isFolder": false,
                            "name": "WriteClass.js"
                        },
                        {
                            "fullPath": "./service/write/writeChar.js",
                            "isFolder": false,
                            "name": "writeChar.js"
                        }
                    ]
                },
                {
                    "fullPath": "./service/async",
                    "isFolder": true,
                    "name": "async",
                    "children": [
                        {
                            "fullPath": "./service/async/http.js",
                            "isFolder": false,
                            "name": "http.js"
                        }
                    ]
                },
                {
                    "fullPath": "./service/localStorage",
                    "isFolder": true,
                    "name": "localStorage",
                    "children": [
                        {
                            "fullPath": "./service/localStorage/store.js",
                            "isFolder": false,
                            "name": "store.js"
                        }
                    ]
                }
            ]
        },
        {
            "fullPath": "./package.json",
            "isFolder": false,
            "name": "package.json"
        },
        {
            "fullPath": "./server.js",
            "isFolder": false,
            "name": "server.js"
        },
        {
            "fullPath": "./component",
            "isFolder": true,
            "name": "component",
            "children": [
                {
                    "fullPath": "./component/tab",
                    "isFolder": true,
                    "name": "tab",
                    "children": [
                        {
                            "fullPath": "./component/tab/tabCtrl.js",
                            "isFolder": false,
                            "name": "tabCtrl.js"
                        },
                        {
                            "fullPath": "./component/tab/TabComponent.js",
                            "isFolder": false,
                            "name": "TabComponent.js"
                        },
                        {
                            "fullPath": "./component/tab/tab-test.js",
                            "isFolder": false,
                            "name": "tab-test.js"
                        },
                        {
                            "fullPath": "./component/tab/tab.css",
                            "isFolder": false,
                            "name": "tab.css"
                        },
                        {
                            "fullPath": "./component/tab/TabComponent2.js",
                            "isFolder": false,
                            "name": "TabComponent2.js"
                        },
                        {
                            "fullPath": "./component/tab/tab.html",
                            "isFolder": false,
                            "name": "tab.html"
                        }
                    ]
                },
                {
                    "fullPath": "./component/gutter",
                    "isFolder": true,
                    "name": "gutter",
                    "children": [
                        {
                            "fullPath": "./component/gutter/GutterComponent.js",
                            "isFolder": false,
                            "name": "GutterComponent.js"
                        },
                        {
                            "fullPath": "./component/gutter/gutter.html",
                            "isFolder": false,
                            "name": "gutter.html"
                        },
                        {
                            "fullPath": "./component/gutter/gutter.css",
                            "isFolder": false,
                            "name": "gutter.css"
                        },
                        {
                            "fullPath": "./component/gutter/gutterCtrl.js",
                            "isFolder": false,
                            "name": "gutterCtrl.js"
                        }
                    ]
                },
                {
                    "fullPath": "./component/editor",
                    "isFolder": true,
                    "name": "editor",
                    "children": [
                        {
                            "fullPath": "./component/editor/editor-test.js",
                            "isFolder": false,
                            "name": "editor-test.js"
                        },
                        {
                            "fullPath": "./component/editor/EditorClass.js",
                            "isFolder": false,
                            "name": "EditorClass.js"
                        },
                        {
                            "fullPath": "./component/editor/editor.html",
                            "isFolder": false,
                            "name": "editor.html"
                        },
                        {
                            "fullPath": "./component/editor/editorCtrl.js",
                            "isFolder": false,
                            "name": "editorCtrl.js"
                        },
                        {
                            "fullPath": "./component/editor/editor.css",
                            "isFolder": false,
                            "name": "editor.css"
                        }
                    ]
                },
                {
                    "fullPath": "./component/app",
                    "isFolder": true,
                    "name": "app",
                    "children": [
                        {
                            "fullPath": "./component/app/appCtrl.js",
                            "isFolder": false,
                            "name": "appCtrl.js"
                        },
                        {
                            "fullPath": "./component/app/app-test.js",
                            "isFolder": false,
                            "name": "app-test.js"
                        },
                        {
                            "fullPath": "./component/app/app.css",
                            "isFolder": false,
                            "name": "app.css"
                        },
                        {
                            "fullPath": "./component/app/AppComponent.js",
                            "isFolder": false,
                            "name": "AppComponent.js"
                        },
                        {
                            "fullPath": "./component/app/app.html",
                            "isFolder": false,
                            "name": "app.html"
                        }
                    ]
                }
            ]
        },
        {
            "fullPath": "./index.html",
            "isFolder": false,
            "name": "index.html"
        },
        {
            "fullPath": "./util",
            "isFolder": true,
            "name": "util",
            "children": [
                {
                    "fullPath": "./util/CreateComponent.js",
                    "isFolder": false,
                    "name": "CreateComponent.js"
                },
                {
                    "fullPath": "./util/CreateComponent2.js",
                    "isFolder": false,
                    "name": "CreateComponent2.js"
                }
            ]
        }
    ]
}
