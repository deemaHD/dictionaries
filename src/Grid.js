import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from 'react-redux';
import { getDataAction, deleteRowAction } from './actions/api';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      structure: [],
      pages: null,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(state, instance) {
    this.props.getDataAction(state.pageSize, state.page * state.pageSize, state.filtered, state.sorted);
  }

  deleteRow = (row) => {
    this.props.deleteRowAction(row.original.id);
  }

  render() {
    const { data, pages, loading, structure } = this.props;

    structure.push({
      Header: () => <span><i className='fa-tasks' /> Actions</span>,
      accessor: 'actions',
      filterable: false,
      Cell: row => {
        return (
          <span>
          <button>Edit</button>
          <button onClick={() => this.deleteRow(row)}>Delete</button>
        </span>
        )}
    });

    return (
      <div>
        <ReactTable
          columns={structure}
          manual
          data={data}
          pages={pages}
          loading={loading}
          onFetchData={this.fetchData}
          filterable
          defaultPageSize={10}
          noDataText="Ooops!"
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default connect(
  state => state.grid,
  dispatch => bindActionCreators({ getDataAction, deleteRowAction }, dispatch),
)(Grid);
