import React, { useState, useEffect } from 'react';
import '../../styles/HistoryPage.scss';
import Table from '../general/Table';
import { apiQueriesKey } from '../../utils/constants';
import ClearHistoryBtn from '../historyPage/ClearHistoryBtn';
import { getLocalStorageItem } from '../../utils';

function HistoryPage() {
  const [refresh, setRefreshPage] = useState(0);
  const [data, setData] = useState([]);

  const header = [
    { name: 'Source Address', key: 'source' },
    { name: 'Destination Address', key: 'destination' },
    { name: 'Distance in Miles', key: 'distanceMi' },
    { name: 'Distance in Kilometers', key: 'distanceKm' },
  ];

  useEffect(() => {
    setData(getLocalStorageItem(apiQueriesKey));
  }, [refresh]);

  return (
    <>
      <h3 className='title'>Historical Queries</h3>
      <h4 className='subtitle'>History of the user&apos;s queries.</h4>

      {data?.length > 0
        ? (
          <>
            <div className='history-section-div'>
              <Table header={header} data={data} />
            </div>
            <div className='history-section-div'>
              <ClearHistoryBtn updatePage={setRefreshPage} />
            </div>

          </>
        )
        : (
          <h4 className='centered-message'>
            No historical queries saved. Try using the calculator first
          </h4>
        )}
    </>
  );
}

export default HistoryPage;
