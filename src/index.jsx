import React from 'react';
import ReactDOM from 'react-dom';

import DumbledoreLintContainer from 'modules/common/containers/DumbledoreLintContainer';

import App from 'app.jsx';

import lintResult from '../dumbledore-lint.json';

const renderApp = () => {
  if (process.env.NODE_ENV === 'development') {
    const hasLintErrors = lintResult
      && lintResult.messages
      && Object.keys(lintResult.messages).length > 0;

    if (hasLintErrors) {
      return (
        <DumbledoreLintContainer errors={Object.values(lintResult.messages)} />
      );
    }
  }
  return <App />;
};

ReactDOM.render(renderApp(), document.getElementById('app'));
