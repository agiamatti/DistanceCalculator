import { useEffect, useState } from 'react';
import AddressField from './AddressField';
import RadioButtonSelector from './RadioButtonSelector';
import DistanceBox from './DistanceBox';
import CalculateDistanceBtn from './CalculateDistanceBtn';
import { getDistance } from '../api/api';
import '../styles/CalculatorPage.css';

function CalculatorPage() {

  const distanceOptions = ['Miles', 'Kilometers', 'Both'];
  const [selectedOption, setSelectedOption] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    console.log(source);
    console.log(destination);

  }, [source, destination]);

  const calculateDistance = () => {
    const abortController = new AbortController();
    const { signal } = abortController;
    getDistance({ source, destination, signal })
      .then((res) => {
        setDistance(res);
      }).catch((e) => {
        if (e.name !== 'AbortError') {
          // eslint-disable-next-line no-console
          console.log(e);
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
          options={distanceOptions}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
        />
        <DistanceBox distance={distance} selectedOption={selectedOption} />
      </div>
      <CalculateDistanceBtn buttonClick={calculateDistance} />
    </>
  );
}

export default CalculatorPage;
