import { Currency } from '../../../types/appTypes';
import styles from './DigitalDisplay.module.css';

type DigitalDisplayProps = {
  value: number;
  isBlank: boolean;
  from: Currency;
  to: Currency;
};

function DigitalDisplay({ value, isBlank, from, to }: DigitalDisplayProps) {
  return (
    <div className={styles['display-root']}>
      <span className={styles['rates-info']}>
        {from} → {to}
      </span>
      <div className={styles['digital-display']}>
        <div className={styles['back-leds']}>
          <span>88.88</span>
        </div>
        <span className={styles['value']}>
          {isBlank ? '' : value.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default DigitalDisplay;
