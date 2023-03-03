import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective,
  Selection, Inject, Toolbar, Edit, Sort, Filter,Page  } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p10 bg-white rounded-3xl">
      <Header category="Page" title="Customers"  />
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{ allowDeleting: true, allowEditing: true}}
      width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit,Sort,Toolbar, Filter, Selection]}/>
      </GridComponent>
    </div>
  )
}

export default Customers