function MainComponents() {
    return (
        <div className="body_div">
            <br></br><br></br>
            <h1 className ="header">Fun facts about React</h1>
            <br></br>
            <ul className="list">
            <li>
                Was first released in 2013
            </li>
            <li>
                Was originally created by Jordan Walke
            </li>
            <li>
                Has well over 100K stars on Github
            </li>
            <li>
                Is maintained by Facebook
            </li>
            <li>
                Powers thousands of enterprise apps, including mobile apps
            </li>
        </ul>
        </div>
        
    )
}
function NavBar() {
    return (
        <div>
            <nav className = "navigation">
                <img src = "/React_tut/React-icon.svg.png" width = "40px"></img>
                <h1 className = "title" >ReactFacts </h1>
                <h2 className = "react_course">React Course - Project 1</h2>
            </nav>
        </div>
    )
}
function App() {
    return(
        <div className = "container">
            <NavBar/>
            <MainComponents/>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'))