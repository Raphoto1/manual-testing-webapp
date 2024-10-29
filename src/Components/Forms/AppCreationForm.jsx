'use client'
import React from 'react'
import { Formik } from 'formik'

export default function AppCreationForm() {
  return (
    <div className='flex w-fit bg-slate-700 bg-opacity-30 justify-center p-1 flex-wrap rounded-sm'>
          <h3>App Creation</h3>
          <Formik
              initialValues={{ AppName: '', Version: '' }}
              validate={values => {
                  const errors = {};
                  if (!values.AppName) {
                      errors.AppName = 'required';
                  } return errors;
              }}
              
          >
              
          </Formik>
    </div>
  )
}
