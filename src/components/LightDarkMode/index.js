// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeLightColor = () => {
    this.setState(prevLight => ({isDarkMode: !prevLight.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonTxt = isDarkMode ? 'light Mode' : 'Dark Mode'

    return (
      <div className="light-back-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="l-d-head">Click to Change Mode</h1>
          <button
            className="button"
            type="button"
            onClick={this.changeLightColor}
          >
            {buttonTxt}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
