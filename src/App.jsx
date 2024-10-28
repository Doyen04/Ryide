import './styles/app.css'

import Header from "./component/header";
import Landing from './component/landing';
import Body from './component/body';
import Footer from './component/footer';



function App(){
    return(
        <div className="body">
            <Header/>
            <Landing/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default App;