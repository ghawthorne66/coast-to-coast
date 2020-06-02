import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is Required'),
  companyname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Company Name is Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
  phone: Yup.string().required('Please Enter Your Phone Number'),
  message: Yup.string()
    .min(3, 'Too Short!')
    .required('Message is Required'),
})

const ContactForm = () => (
  <>
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
      }}
      validationSchema={ContactSchema}
    >
      {({ errors, touched }) => (
        <Form
          data-netlify="true"
          action="/thank-you"
          data-netlify-honeypot="bot-field"
          method="post"
          name="main-form"
          onSubmit={() => console.log('SUBMIT ON <FORM>')}
        >
          <input type="hidden" name="form-name" value="main-form" />
          <div className="form-group">
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={
                    errors.name && touched.name
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
            />
            {errors.name && touched.name ? (
              <div className="invalid-feedback">{errors.name}</div>
            ) : null}
          </div>

          <div className="form-group">
            <Field
              type="email"
              name="email"
              className={
                errors.email && touched.email
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              placeholder="Email"
            />
            {errors.email && touched.email ? (
              <div className="invalid-feedback">{errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <Field
              name="phone"
              type="phone"
              className={
                errors.phone && touched.phone
                  ? 'form-control is-invalid'
                  : 'form-control'
                }
              placeholder="Phone"
            />
            {errors.phone && touched.phone ? (
              <div className="invalid-feedback">{errors.phone}</div>
            ) : null}
          </div>

          <div className="form-group">
            <Field
              component="textarea"
              name="message"
              className={
                    errors.message && touched.message
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
              placeholder="Your message"
              rows="4"
            />
            {errors.message && touched.message ? (
              <div className="invalid-feedback">{errors.message}</div>
            ) : null}
          </div>

          {/* {this.state.errorMsg && (
            <div className="feedback-container text-danger">
              <p>Something went wrong please try again.</p>
            </div>
            )} */}

          {/* {this.state.feedback && (
            <div className="feedback-container text-danger">
              <h5>Thank you.!!!</h5>
              <p>
                Your messsage have been received. we will contact you
                shortly.
              </p>
            </div>
            )} */}

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
            >
              {/* {this.state.isSending && ( */}
              {/* // <i className="fa fa-refresh fa-spin" />
                // )}
                // {this.state.isSending && <span>Sending....</span>} */}
              Send Message
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </>
)

export default ContactForm
