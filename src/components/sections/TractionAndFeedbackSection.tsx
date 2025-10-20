import { useEffect, useState } from 'react';
import TractionAndFeedbackSectionBig from './TractionAndFeedbackSectionBig';
import TractionAndFeedbackSectionSmall from './TractionAndFeedbackSectionSmall';

const TractionAndFeedbackSection = () => {
  const [isXlScreen, setIsXlScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXlScreen(window.innerWidth >= 1280);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isXlScreen ? <TractionAndFeedbackSectionBig /> : <TractionAndFeedbackSectionSmall />;
};

export default TractionAndFeedbackSection;
