import React from 'react'
import './styles.scss'

export default opts => {
  const Layout = Component => class extends React.Component {
    render() {
      return (
        <main>
          <Component {...this.props} />
        </main>
      )
    }
  };

  if (typeof opts === 'function') {
    return Layout(opts);
  }

  return Component => Layout(Component);
}
