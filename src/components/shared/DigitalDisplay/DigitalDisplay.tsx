import styles from './DigitalDisplay.module.css';

type DigitalDisplayProps = {
  value: string;
  isBlank: boolean;
};

function DigitalDisplay({ value }: DigitalDisplayProps) {
  return (
    <div className={styles['digital-display']}>
      {value.slice(0, value.lastIndexOf('.') + 3)}
    </div>
  );
}

export default DigitalDisplay;
