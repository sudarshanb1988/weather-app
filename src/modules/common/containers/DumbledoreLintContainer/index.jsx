import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class DumbledoreLintContainer extends Component {
  propTypes = {
    errors: PropTypes.node
  };

  constructor(props) {
    super(props);

    this.getGiphy();
  }

  state = {
    image: ''
  };

  getGiphy() {
    const terms = ['keyboard', 'hacker', 'programming', 'error', 'dumbledore'];
    const query = terms[Math.floor(Math.random() * terms.length)];
    const offset = Math.floor(Math.random() * 10);
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=vd0woWQ2Qops0ezBJg4dgzFOt6QtEPdZ&limit=1&offset=${offset}&rating=pg`;

    fetch(url)
      .then(response => response.json())
      .then((json) => {
        const image = json.data[0].images.fixed_height.url;

        if (image) {
          this.setState({ image });
        }
      });
  }

  render() {
    const { image } = this.state;
    const { errors } = this.props;

    return (
      <div className="dumbledore-lint-container">

        <div className="dumbledore-lint-container--error-container">
          <img src={image} alt="" />
          <div className="dumbledore-lint-container--title">
            Dumbledore Lint detected an error with the codebase.Please see the
            error logs below to determine the source of the issue. You will need
            to fix these problems before the build can proceed.
          </div>

          {errors.map(e => (
            <div className="dumbledore-lint-container--files" key={e.filePath}>
              <div className="dumbledore-lint-container--file-path">
                {e.filePath.replace(/.+?(?=client)/, '<PROJECT_ROOT>/')}
:
              </div>
              {e.messages.map(m => (
                <div
                  className="dumbledore-lint-container--errors"
                  key={`${m.line}-${m.column}`}>
                  <div>{m.message}</div>
                  <div>
                    [
                    {m.line}
:
                    {m.column}
]
                    {'  '}
                    <span className="dumbledore-lint-container--source">
                      {m.source}
                    </span>
                  </div>
                  <div>
                    <a href={`http://eslint.org/docs/rules/${m.ruleId}`}>
                      {`http://eslint.org/docs/rules/${m.ruleId}`}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DumbledoreLintContainer;
