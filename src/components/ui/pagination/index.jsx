import React from 'react'

const index = ({page=0, totalPage=0, limit=20, setLimit, setPage}) => {
  return (
    <ul className="flex items-center justify-end gap-2 py-5">
        <li title="Previous Page" className="rounded-lg" aria-disabled="true">
          <button className={`rounded-lg p-2.5 hover:bg-gray-200 ${page <= totalPage ? 'text-gray-400 cursor-not-allowed' : ''}`} type="button" onClick={() => setPage(page - 1)}>
            <span role="img" aria-label="left" className="">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
              </svg>
            </span>
          </button>
        </li>
        {Array.from({ length: totalPage }, (_, index) => {
          const pageNum = index + 1;
          const isActive = page === pageNum;
          return (<li key={pageNum} title={pageNum} className={`rounded-lg p-3 py-1 cursor-pointer ${isActive ? 'text-blue-500 border border-blue-500' : 'hover:bg-gray-300 text-black'}`}>
            <button onClick={() => setPage(pageNum)}>{pageNum}</button>
          </li>)
        })}
        <li title="Next Page">
          <button className={`rounded-lg p-2.5 hover:bg-gray-200 ${page >= totalPage ? 'text-gray-400 cursor-not-allowed' : ''}`} type="button" onClick={() => setPage(page + 1)}>
            <span role="img" aria-label="right" className="">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
              </svg>
            </span>
          </button>
        </li>
        <select
          name="limit"
          id="limit"
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1);
          }}
          className="rounded-lg p-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        >
          <option value="10">10/page</option>
          <option value="20">20/page</option>
          <option value="50">50/page</option>
          <option value="100">100/page</option>
        </select>
      </ul>
  )
}

export default index