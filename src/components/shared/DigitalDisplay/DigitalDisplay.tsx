import { Currency } from '../../../types/appTypes';
import styles from './DigitalDisplay.module.css';

type DigitalDisplayProps = {
  value: string;
  isBlank: boolean;
  from: Currency;
  to: Currency;
};

function DigitalDisplay({ value, isBlank, from, to }: DigitalDisplayProps) {
  const displayedValue = value.slice(0, value.lastIndexOf('.') + 3);

  return (
    <div className={styles['display-root']}>
      <span className={styles['rates-info']}>
        {from} → {to}
      </span>
      <div className={styles['digital-display']}>
        <div className={styles['back-leds']}>
          <span>88.88</span>
        </div>
        <span className={styles['value']}>{isBlank ? '' : displayedValue}</span>
      </div>
    </div>
  );
}

export default DigitalDisplay;
