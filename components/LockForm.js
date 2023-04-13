import styles from './LockForm.module.css'

export default function LockForm() {
  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="lockform"
      method="POST"
      action="/success"
    >
      <input type="hidden" name="form-name" value="lockform" />
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="password">Password</label>
      <input id="password" className={styles['form-field']} type="password" name="password" required />

      <label>Would you like to lock or unlock the lock?
        <select name="lockState[]" required>
          <option value="unlock">Unlock</option>
          <option value="lock">Lock</option>
        </select>
      </label>

      <button className={styles.button} type="submit">Submit</button>
    </form>
  )
}
