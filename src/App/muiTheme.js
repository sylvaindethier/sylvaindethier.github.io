import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  blueGrey500, blueGrey700,
  lightBlueA200
} from 'material-ui/styles/colors'

// customise docs:
// http://www.material-ui.com/#/customization/themes
// https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    accent1Color: lightBlueA200
  }
})
export default muiTheme
