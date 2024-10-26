import './styles/app.css'

import Header from "./component/header";
import Landing from './component/landing';
import Body from './component/body';



function App(){
    return(
        <div className="body">
            <Header/>
            <Landing/>
            <Body/>
        </div>
    )
}

export default App;