import React, { useEffect, useState } from 'react';
import AddressField from '../calculatorPage/AddressField';
import RadioButtonSelector from '../calculatorPage/RadioButtonSelector';
import DistanceBox from '../calculatorPage/DistanceBox';
import CalculateDistanceBtn from '../calculatorPage/CalculateDistanceBtn';
import getDistance from '../../api/api';
import '../../styles/CalculatorPage.scss';
import { kmToMiles, roundToTwoDecimals, storeResultsInLocalStorage } from '../../utils';
import { apiQueriesKey } from '../../utils/constants';
import Snackbar from '../general/Snackbar';

function CalculatorPage() {
  const distanceOptions = ['Miles', 'Kilometers', 'Both'];
  const [selectedOption, setSelectedOption] = useState(distanceOptions[0]);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState(null);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (source !== '' && destination !== '') {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [source, destination]);

  const calculateDistance = () => {
    setActiveBtn(false);

    const abortController = new AbortController();
    const { signal } = abortController;

    getDistance({ source, destination, signal })
      .then((res) => {
        setDistance(res.distance);
        setActiveBtn(true);
        storeResultsInLocalStorage({
          source,
          destination,
          distanceKm: roundToTwoDecimals(res.distance),
          distanceMi: roundToTwoDecimals(kmToMiles(res.distance)),
        }, apiQueriesKey);
        setError(null);
      }).catch((e) => {
        setDistance(null);
        if (e.name !== 'AbortError') {
          // eslint-disable-next-line no-console
          console.error(e.message);
          setError(e);
          setActiveBtn(true);
        }
      });

    return () => {
      abortController.abort();
    };
  };

  return (
    <>
      <div className='calculate-inputs'>
        <AddressField
          title='Source Address'
          onChange={setSource}
        />
        <AddressField
          title='Destination Address'
          onChange={setDestination}
        />
        <RadioButtonSelector
          label='Unit'
          options={distanceOptions}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
        />
        <DistanceBox distance={distance} selectedOption={selectedOption} />
      </div>
      <CalculateDistanceBtn
        buttonClick={calculateDistance}
        active={activeBtn}
      />
      {error
        ? (
          <Snackbar
            title='Calculation failed'
            error='Something went wrong and the calculation failed.'
            // error={error.message} // in case we want a more detailed snackbar message
          />
        ) : null}
    </>
  );
}

export default CalculatorPage;
