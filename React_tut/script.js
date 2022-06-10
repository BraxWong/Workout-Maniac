function mainComponenet() {
    return (
        <p>Hello! This is a mainComponenet created from a js function</p>
    )
}
const divRoot = document.getElementById('root')
const page = <div>
    <h1>Hello! This is a mainComponenet created from a js function</h1>
    <p>Hello darkness my old friend!</p>
</div>

const navBar = (
    <nav>
        <h1>
            Straw-Pool.IO
        </h1>
        <ul>
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
)

ReactDOM.render(navBar,divRoot)


const newH1 = document.createElement('h1')
newH1.textContent = "Hello Darkness my old friend"
newH1.className = "Header"
divRoot.append(newH1)

