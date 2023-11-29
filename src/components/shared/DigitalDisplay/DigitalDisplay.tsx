import styles from './DigitalDisplay.module.css';

type DigitalDisplayProps = {
  value: string;
};

function DigitalDisplay({ value }: DigitalDisplayProps) {
  return <div className={styles['digital-display']}>{value}</div>;
}

export default DigitalDisplay;
