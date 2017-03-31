import React, { Component } from "react";
// import withRouter from "react-router-dom/withRouter";
import Link from "react-router-dom/Link";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

const languages = [
  { code: "fr", name: "Français" },
  { code: "en", name: "English" }
];
// const menuItems = languages.map(({ code, name }) => (
//   <MenuItem
//     key={code}
//     value={code}
//     primaryText={
//       <Link to={`/${code}`} className="menu-item-link">
//         {name}
//       </Link>
//     }
//   />
// ));

// const { PropTypes } = React;

class LanguageSelector extends Component {
  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // };

  state = { value: languages[0].code };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem
          value="fr"
          primaryText={
            <Link to="/fr" className="menu-item-link">Français</Link>
          }
        />
        <MenuItem
          value="en"
          primaryText="English"
          secondaryText="Coming soon!"
          disabled
        />
      </DropDownMenu>
    );
  }
}

// const LanguageSelectorWithRouter = withRouter(LanguageSelector);
// export default LanguageSelectorWithRouter;
export default LanguageSelector;
