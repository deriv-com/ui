import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Table } from '..';

describe('Table component', () => {

    type TRowData= {
        id: string;
        col1: string;
        col2: string;
    }
    const columns = [
        { id: '1', header: 'Header 1' },
        { id: '2', header: 'Header 2' },
    ];

    const data = [
        { id: '1', col1: 'Data 1', col2: 'Data A' },
        { id: '2', col1: 'Data 2', col2: 'Data B' },
    ];

    const emptyDataMessage = 'No data available';
    const isFetching = false;
    const loadMoreFunction = jest.fn();
    const rowRender = (rowData: TRowData) => (
        <div>
            <span>{rowData.col1}</span>
            <span>{rowData.col2}</span>
        </div>
    );

    it('renders table with data and headers', () => {
        render(
            <Table
                columns={columns}
                data={data}
                emptyDataMessage={emptyDataMessage}
                isFetching={isFetching}
                loadMoreFunction={loadMoreFunction}
                rowRender={rowRender}
            />
        );

        expect(screen.getByText('Data 1')).toBeInTheDocument();
        expect(screen.getByText('Data A')).toBeInTheDocument();
        expect(screen.getByText('Data 2')).toBeInTheDocument();
        expect(screen.getByText('Data B')).toBeInTheDocument();
    });

    it('renders empty data message when data is empty', () => {
        render(
            <Table
                columns={columns}
                data={[]}
                emptyDataMessage={emptyDataMessage}
                isFetching={isFetching}
                loadMoreFunction={loadMoreFunction}
                rowRender={rowRender}
            />
        );

        // Check if empty data message is rendered
        expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    it('calls loadMoreFunction when scrolling to bottom', () => {
       const {container} = render(
            <Table
                columns={columns}
                data={data}
                emptyDataMessage={emptyDataMessage}
                isFetching={isFetching}
                loadMoreFunction={loadMoreFunction}
                rowRender={rowRender}
            />
        );

        // Simulate scrolling to bottom
        const tableContent = container.getElementsByClassName('deriv-table__content')[0];
        tableContent.scrollTop = 500; // Adjust scroll position
        fireEvent.scroll(tableContent);

        // Check if loadMoreFunction is called
        expect(loadMoreFunction).toHaveBeenCalledTimes(4);
    });


});
