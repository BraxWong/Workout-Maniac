function MainComponents() {
    return (
        <h1>Main component</h1>
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