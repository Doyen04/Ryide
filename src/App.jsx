import './styles/app.css'

import Header from "./component/header";
import Landing from './component/landing';



function App(){
    return(
        <div className="body">
            <Header/>
            <Landing/>
        </div>
    )
}

export default App;