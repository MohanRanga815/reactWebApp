import {Component} from 'react'
import ImageContainer from './components/ImageContainer'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {imagesListItems: [], searchItem: ''}
  }

  componentDidMount() {
    this.getTheListOfImages()
  }

  getTheListOfImages = async () => {
    const response = await fetch('https://reqres.in/api/users?/page=2')

    const fetchedData = await response.json()
    const updatedData = fetchedData.data
    this.setState({imagesListItems: updatedData})
  }

  handlerNameSearch = event => {
    this.setState({searchItem: event.target.value})
  }

  render() {
    const {imagesListItems, searchItem} = this.state

    const filterImages = imagesListItems.filter(eachUser =>
      eachUser.first_name.toLowerCase().includes(searchItem.toLowerCase()),
    )
    return (
      <div className="app-container">
        <input
          type="search"
          className="search-box"
          value={searchItem}
          placeholder="Search by first name"
          onChange={this.handlerNameSearch}
        />
        <ul className="list-items">
          {filterImages.length === 0 ? (
            <p className="error-msg">No Such Results Found</p>
          ) : (
            filterImages.map(eachFilterImage => (
              <ImageContainer
                key={eachFilterImage.id}
                imageDetails={eachFilterImage}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default App
