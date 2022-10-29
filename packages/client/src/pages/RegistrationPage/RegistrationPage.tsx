import React from 'react'
import cn from 'classnames'
import { useFormik } from 'formik'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Form from '../../components/Form'
import styles from './RegistrationPage.module.scss'

import { regSchema } from '../../constants/Schemas'

const RegistrationPage: React.FC = (): JSX.Element => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: '',
        login: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: regSchema,
      onSubmit: values => {
        console.log('values', values)
      },
    })

  return (
    <div className={styles.form_root}>
      <h1 className={styles.form_logo_title}>
        Huggy Wuggy
        <br />& Kissy Missy
      </h1>
      <Form
        onSubmit={handleSubmit}
        actions={[
          <div key={0}>
            <div className={styles.form_button_box}>
              <Button className={styles.form_button} type="submit">
                <h1 className={styles.login_button_title}>Sign Up</h1>
              </Button>
            </div>

            <a href="signup" className={styles.form_sign_in_link}>
              Sign In
            </a>
          </div>,
        ]}>
        <div>
          <h4 className={styles.form_title}>Email</h4>
          <Input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(styles.form_input)}
            showError={!!errors.email && !!touched.email}
            error={errors.email}
          />

          <h4 className={styles.form_title}>Login</h4>
          <Input
            name="login"
            value={values.login}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(styles.form_input)}
            showError={!!errors.login && !!touched.login}
            error={errors.login}
          />

          <h4 className={styles.form_title}>Password</h4>
          <Input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(styles.form_input)}
            showError={!!errors.password && !!touched.password}
            error={errors.password}
          />

          <h4 className={styles.form_title}>Password</h4>
          <Input
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(styles.form_input, styles.form_input_mb0)}
            showError={!!errors.confirmPassword && !!touched.confirmPassword}
            error={errors.confirmPassword}
          />
        </div>
      </Form>
    </div>
  )
}

export default RegistrationPage
