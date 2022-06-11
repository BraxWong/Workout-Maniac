function Header() {
    return(
        <div>
            <header>
                <nav className = "Navigation">
                    <img className = "logo" src = "React-icon.svg.png" >
                    </img>
                        <ul className = "nav-items">
                            <li>
                                Pricing
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                </nav>
            </header>
        </div>
    )
}

function MainContent() {
    return(
        <div>
            <Header/>
            <h1 className="header">Reasons I'm excited to learn React</h1>
            <ol>
                <li>
                    <b>
                        It's a popular library, so I'll be able to fit in with the cool kids!
                    </b>
                </li>
                <li>
                    <b>
                        I'm likely to get a job as a developer if I know React
                    </b>
                </li>
            </ol>
            <footer className = "footer">
                2022 Brax Development. All rights reserved.
            </footer>
        </div>
    )
   
}

const divroot = document.getElementById('root')
ReactDOM.render(<MainContent/>,divroot)