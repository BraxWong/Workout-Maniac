function Header(){
    return(
        <div>
            <header>
                <nav>
                    <img src = "React-icon.svg.png" width = "50"></img>
                </nav>
            </header>
                <h1>I am excited to learn React.</h1>
                <ol>
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
                </ol>
                <footer>
                    <small>2022 Brax development. All rights reserved lul.</small>
                    </footer>
           
        </div>
        
    )
}
const divroot = document.getElementById('root')

ReactDOM.render(<Header/>,divroot)