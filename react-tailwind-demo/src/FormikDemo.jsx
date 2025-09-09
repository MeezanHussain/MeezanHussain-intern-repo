import React, { useState } from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
    .optional(),
  subscribe: Yup.boolean(),
  country: Yup.string().required('Please select a country'),
});

const FormikDemo = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [submitCount, setSubmitCount] = useState(0);

  // useFormik hook approach
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      subscribe: false,
      country: '',
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted with useFormik:', values);
        setSubmittedData({ method: 'useFormik', data: values });
        setSubmitCount(prev => prev + 1);
        setSubmitting(false);
        resetForm();
      }, 1000);
    },
  });

  // Formik component approach handler
  const handleFormikComponentSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log('Form submitted with Formik component:', values);
      setSubmittedData({ method: 'Formik Component', data: values });
      setSubmitCount(prev => prev + 1);
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Formik Form Handling Demo
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Efficient form management with validation using Formik & Yup
        </p>
        <p className="text-gray-500">
          Compare useFormik hook vs Formik component approaches
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="text-center">
          <span className="text-2xl font-bold text-blue-600">{submitCount}</span>
          <p className="text-blue-700">Forms Successfully Submitted</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* useFormik Hook Approach */}
        <div className="p-6 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            useFormik Hook Approach
          </h2>
          
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  formik.touched.name && formik.errors.name
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>

            {/* Country Field */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country *
              </label>
              <select
                id="country"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  formik.touched.country && formik.errors.country
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300'
                }`}
              >
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
              </select>
              {formik.touched.country && formik.errors.country && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.country}</div>
              )}
            </div>

            {/* Subscribe Checkbox */}
            <div className="flex items-center">
              <input
                id="subscribe"
                name="subscribe"
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.subscribe}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">
                Subscribe to newsletter
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {formik.isSubmitting ? 'Submitting...' : 'Submit with useFormik'}
            </button>
          </form>
        </div>

        {/* Formik Component Approach */}
        <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">
            Formik Component Approach
          </h2>
          
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
              subscribe: false,
              country: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleFormikComponentSubmit}
          >
            {({ isSubmitting, isValid }) => (
              <Form className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="formik-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <Field
                    id="formik-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="formik-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <Field
                    id="formik-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="formik-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <Field
                    as="textarea"
                    id="formik-message"
                    name="message"
                    rows={3}
                    placeholder="Enter your message..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Country Field */}
                <div>
                  <label htmlFor="formik-country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <Field
                    as="select"
                    id="formik-country"
                    name="country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                  </Field>
                  <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Subscribe Checkbox */}
                <div className="flex items-center">
                  <Field
                    id="formik-subscribe"
                    name="subscribe"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="formik-subscribe" className="ml-2 block text-sm text-gray-700">
                    Subscribe to newsletter
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit with Formik Component'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Submitted Data Display */}
      {submittedData && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Last Submission ({submittedData.method})
          </h3>
          <pre className="text-sm text-gray-700 overflow-x-auto bg-white p-4 rounded border">
            {JSON.stringify(submittedData.data, null, 2)}
          </pre>
        </div>
      )}

      {/* Features Overview */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Formik Features Demonstrated
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold text-gray-800">Form State Management</h4>
              <p className="text-gray-600 text-sm">Automatic handling of form values, errors, and touched states</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🔍</span>
            <div>
              <h4 className="font-semibold text-gray-800">Yup Validation</h4>
              <p className="text-gray-600 text-sm">Schema-based validation with custom error messages</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h4 className="font-semibold text-gray-800">Field-Level Validation</h4>
              <p className="text-gray-600 text-sm">Real-time validation on blur and change events</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🔄</span>
            <div>
              <h4 className="font-semibold text-gray-800">Submission Handling</h4>
              <p className="text-gray-600 text-sm">Loading states, form reset, and error handling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormikDemo;
