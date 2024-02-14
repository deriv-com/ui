import React, { useRef } from 'react';
import clsx from 'clsx';
import { ColumnDef, getCoreRowModel, getGroupedRowModel, useReactTable } from '@tanstack/react-table';
import { Text } from '../Text';
import { useFetchMore } from '../../hooks/useFetchMore';
import './Table.scss';

type TProps<T> = {
    columns?: ColumnDef<T>[];
    data: T[];
    isFetching: boolean;
    loadMoreFunction: () => void;
    renderHeader?: (data: string) => JSX.Element;
    rowRender: (data: T) => JSX.Element;
    tableClassname?: string;
};

export const Table = <T,>({
    columns = [],
    data,
    isFetching,
    loadMoreFunction,
    renderHeader = () => <div />,
    rowRender,
    tableClassname = '',
}: TProps<T>) => {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel<T>(),
        getGroupedRowModel: getGroupedRowModel<T>(),
    });

    const tableContainerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const topPosition = headerRef.current?.getBoundingClientRect().bottom ?? 0;

    const { fetchMoreOnBottomReached } = useFetchMore({
        loadMore: loadMoreFunction,
        ref: tableContainerRef,
        isFetching,
    });

    return (
        <div className={clsx('w-full', tableClassname)}>
            {columns.length > 0 && (
                <div className='deriv-table__header' ref={headerRef}>
                    {table.getFlatHeaders().map(header => (
                        <Text className='deriv-table__header-items' key={header.id} size='sm' weight='bold'>
                            {renderHeader(header.column.columnDef.header as string)}
                        </Text>
                    ))}
                </div>
            )}
            <div
                className={clsx('deriv-table__content', tableClassname)}
                onScroll={e => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
                ref={tableContainerRef}
                 //calculate height of the table content including the footer size.
                 style={columns.length > 0 ? { height: `calc(100vh - ${topPosition}px - 3.6rem)` } : undefined}
            >
                {table.getRowModel().rows.map(row => (
                    <div className='deriv-table__content-row' key={row.id}>
                        {rowRender(row.original)}
                    </div>
                ))}
            </div>
        </div>
    );
};
