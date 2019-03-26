import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete: ${this.props.stream.title} ?`;
  }

  render() {
    const actions = (
      <div>
        <Link
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          to='/'
          className='ui button negative'
        >
          Delete
        </Link>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </div>
    );
    console.log(this.props);

    return (
      <Modal
        title='Delete Stream'
        content={this.renderContent()}
        actions={actions}
        onClick={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
