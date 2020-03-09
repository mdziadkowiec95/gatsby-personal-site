import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ClickOutside extends PureComponent {
  containerRef = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = event => {
    const { onClickOutside } = this.props;

    if (
      this.containerRef.current &&
      !this.containerRef.current.contains(event.target)
    ) {
      onClickOutside();
    }
  };

  render() {
    const { children } = this.props;

    return (
      <>
        {children({
          containerRef: this.containerRef,
        })}
      </>
    );
  }
}

ClickOutside.propTypes = {
  children: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func.isRequired,
};

export default ClickOutside;
