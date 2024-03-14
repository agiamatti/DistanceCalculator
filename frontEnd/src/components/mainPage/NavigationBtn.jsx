import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CiCalculator1 } from 'react-icons/ci';
import { GiBackwardTime } from 'react-icons/gi';
import { PAGES } from '../../utils/constants';

function NavigationBtn() {
  const navigate = useNavigate();
  const location = useLocation();

  const getBtnMode = () => {
    if (location.pathname.includes(PAGES.history.link)) {
      return 1;
    }
    return 0;
  };
  const [btnMode, setBtnMode] = useState(getBtnMode);

  const handleClick = () => {
    if (btnMode === 0) {
      navigate(PAGES.history.link);
      setBtnMode((oldMode) => (oldMode + 1) % 2);
    } else {
      navigate(PAGES.distance.link);
      setBtnMode((oldMode) => (oldMode + 1) % 2);
    }
  };
  return (
    <div
      className={`navigate-btn-${btnMode}`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      role='button'
      tabIndex={0}
      // aria-disabled={!active}
    >
      <div className='inner-btn'>
        <span className='button-text'>
          {btnMode === 0
            ? 'View Historical Queries'
            : 'Back to Calculator'}
        </span>
        <span className='button-icon'>
          {btnMode === 0
            ? <GiBackwardTime size={30} />
            : <CiCalculator1 size={30} />}
        </span>
      </div>
    </div>
  );
}

export default NavigationBtn;
