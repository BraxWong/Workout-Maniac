function Footer() {
    return (
        <footer>
            2022 Brax Development. All rights reserved.
        </footer>
    )
}
function MainContent() {
    return (
        <div>
            <h1>Fun Facts about React</h1>
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
                    Powers thousands of enterprise apps, including mobile apps.
                </li>
            </ol>
        </div>
    )
}
function Page() {
    return(
        <div>
            <Footer/>
            <MainContent/>
        </div>
    )
}

const divroot = document.getElementById('root')
ReactDOM.render(<Page/>,divroot)