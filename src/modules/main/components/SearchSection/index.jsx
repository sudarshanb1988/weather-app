import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead';
import cities from 'modules/common/apis/cities';

class SearchSection extends Component {
  propTypes = {
    onCitySelection: PropTypes.function,
  }

  render() {
    const { onCitySelection } = this.props;

    return (
      <div className="search-section">
        <div>
          <Typeahead
            onChange={option => onCitySelection(option)}
            labelKey="city"
            placeholder="Choose a city..."
            options={cities} />
        </div>
      </div>
    );
  }
}

export default SearchSection;
