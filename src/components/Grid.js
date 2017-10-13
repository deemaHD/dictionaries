import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from 'react-redux';
import { getDataAction, deleteRowAction } from '../actions/apiActions';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Grid extends React.Component {
  fetchData = (state, instance) => {
    this.props.getDataAction(state.pageSize, state.page * state.pageSize, state.filtered, state.sorted);
  };

  deleteRow = (row) => {
    this.props.deleteRowAction(row.original.id);
  };

  render() {
    const { data, pages, loading, structure } = this.props;

    if (structure.length && structure[structure.length - 1].accessor !== 'actions') {
      structure.push({
        Header: <span><i className='fa-tasks'/> Actions</span>,
        accessor: 'actions',
        filterable: false,
        Cell: row => {
          return (
            <span>
              <button>Edit</button>
              <button onClick={() => this.deleteRow(row)}>Delete</button>
            </span>
          )
        }
      });
    }

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
          defaultPageSize={this.props.defaultPageSize}
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
