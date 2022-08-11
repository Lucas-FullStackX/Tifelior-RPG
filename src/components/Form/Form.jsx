import Button from '../Buttons/Button';
import * as styles from './Form.module.css';
function Form() {
  return (
    <div className={styles.container}>
      <Button type="primary">Text</Button>
      <Button type="primary">Text</Button>
      <Button type="primary">Text</Button>
      <Button type="primary">Text</Button>
    </div>
  );
}

export default Form;
