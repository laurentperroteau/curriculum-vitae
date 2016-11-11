import AppComponent from 'myComponent/app/AppComponent'

const appCtrl = () => {

    const oApp = {
        "fileName": "/home/laurentperroteau/www/cv/web/"
    }        

    const App = new AppComponent('app')

    App.setData( oApp )

    App.initTemplate()
}
export default appCtrl