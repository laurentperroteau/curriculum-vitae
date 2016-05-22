import AppClass from 'myScreens/app/AppClass'

const appCtrl = () => {

    const oApp = {
        "fileName": "/home/laurentperroteau/www/cv/web/"
    }        

    const App = new AppClass('app')

    App.setData( oApp )

    App.initTemplate()
}
export default appCtrl