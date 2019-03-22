import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          <i className='large middle aligned icon camera' />
          <div className='content'>
            <div className='title'>{stream.title}</div>
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>streams</h2>
        <div className='ui celled list'>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) }; //convert values from objct into elements of an array
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
