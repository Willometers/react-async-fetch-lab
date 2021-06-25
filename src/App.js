// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                <p>{this.state.peopleInSpace.map(person => person.name)}</p>
            </div>
        )    
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.name
            })
        })
    }

}

export default App