import React, { useEffect, useState } from 'react';

// props
// - recordsPerPage
// - recordCount
// - startIndex
// - onChange
const maxRecords = process.env.REACT_APP_MAX_RECORDS

export default function Pagination(props) {

    const [recordCount, setRecordCount] = useState(props.recordCount)

    // o numero de paginas que têm que ser feitas
    const [pageCount, setPageCount] = useState(Math.ceil((recordCount ?? 0) / maxRecords))
    const [pageSelected, setPageSelected] = useState(Math.ceil((props.startIndex ?? 1) / maxRecords))

    useEffect(() => {
        setPageCount(Math.ceil((recordCount ?? 0) / maxRecords))
    }, [recordCount])

    useEffect(() => {
        setRecordCount(props.recordCount)
    }, [props.recordCount])

    useEffect(() => {
        props.onChange(pageSelected)
    }, [pageSelected])

    return (
        <div className='btn-group bg-white' role='group' aria-label='Pagination'>
            {/* backwards */}
            <button type='button' className='btn btn-outline-dark border text-muted' onClick={e => { setPageSelected(1) }}>
                <i className='bi bi-chevron-double-left'></i>
            </button>
            <button type='button' className='btn btn-outline-dark border text-muted' onClick={e => { setPageSelected(pageSelected - 1) }}>
                <i className='bi bi-chevron-left'></i>
            </button>

            {Array.from(Array(pageCount), (item, index) => index + 1).map(i => {
                return (
                    <button
                        type='button'
                        className={'btn border ' + ((pageSelected === i) ? 'btn-primary' : 'btn-outline-dark')}
                        key={'pagination-' + i}
                        onClick={e => { setPageSelected(i) }}
                    >
                        {i}
                    </button>
                )
            })}

            {/* forwards */}

            <button type='button' className='btn btn-outline-dark border text-muted' onClick={e => { setPageSelected(pageSelected + 1) }}>
                <i className='bi bi-chevron-right'></i>
            </button>
            <button type='button' className='btn btn-outline-dark border text-muted' onClick={e => { setPageSelected(pageCount) }}>
                <i className='bi bi-chevron-double-right'></i>
            </button>

        </div>
    );
}