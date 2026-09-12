import React from 'react';
import DarkModeToggleImport from 'react-dark-mode-toggle';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';

// react-dark-mode-toggle is a legacy CJS module; depending on the bundler's
// interop the default import is either the component itself or a { default }
// namespace object. Unwrap defensively so it works under any bundler.
const DarkModeToggle = DarkModeToggleImport.default ?? DarkModeToggleImport;

function ThemeToggler({ onClick = () => {} }) {
  const handleOnChange = (darkMode) => {
    darkMode.toggle();
    onClick();
  };

  return (
    <>
      <AppContext.Consumer>
        {(values) => (
          <div style={{ marginBottom: 8 }}>
            <DarkModeToggle
              onChange={() => handleOnChange(values.darkMode)}
              checked={values.darkMode.value}
              size={50}
            />
          </div>
        )}
      </AppContext.Consumer>
    </>
  );
}

ThemeToggler.propTypes = {
  onClick: PropTypes.func,
};

export default ThemeToggler;
