import React, {Component} from 'react';
import {APP_CONSTANTS} from '../constants/appConstants';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
// import BootstrapTable from 'react-bootstrap-table-next';
// import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';

export default class UserComponent extends Component{
    render(){
        // const column = [{dataField: 'id', text:'Name', filter: textFilter(), sort: true},
        //     {dataField:'name', text: 'Email', hidden: false},
        //     {dataField:'username', text: 'Phone', hidden: false}
        //     ];
        //
        // const selectRow = {
        //     mode: 'checkbox',
        //     clickToSelect: true,
        //     bgColor: '#00BFFF'
        // };
        const options = {
      page: 2,  // which page you want to show as default
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }], // you can change the dropdown list for size per page
      sizePerPage: 5,  // which size per page you want to locate as default
      pageStartIndex: 0, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
      paginationPosition: 'bottom'  // default is bottom, top and both is all available
    };
        const {onHandleGetUser, data, error} = this.props;
        console.log('data',data);
        return(<div>
            <input type='submit' value={APP_CONSTANTS.GET_DETAILS} onClick={onHandleGetUser} /><br/><br/>
            {!!data ? (
                // <BootstrapTable keyField='id' data={data} columns={column} filter={filterFactory}
                // selectRow={selectRow} />
                <div className = "col-xs-12">
                  <div className="panel panel-info mar-t-10px">
                    <div className="panel-heading">Display Details</div>
                      <div className="panel-body">
                        <BootstrapTable data={data} pagination={ true } options={ options }>
                          <TableHeaderColumn dataField='id' isKey={ true } filter={ { type: 'TextFilter'} }>ID</TableHeaderColumn>
                          <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter'} }>Name</TableHeaderColumn>
                          <TableHeaderColumn dataField='username' filter={ { type: 'TextFilter'} }>Username</TableHeaderColumn>
                          <TableHeaderColumn dataField='email' filter={ { type: 'TextFilter'} }>Email Id</TableHeaderColumn>
                        </BootstrapTable>
                      </div>
                  </div>
              </div>
            ): !!error ?(<div>
            <h3>{error.message }</h3></div>): ''}
       </div>)
    }
}
