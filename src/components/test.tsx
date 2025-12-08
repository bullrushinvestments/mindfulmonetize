import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Test {
  id: string;
  title: string;
  description: string;
}

interface WriteTestsProps {
  onCreateTest: (test: Test) => void;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().optional(),
});

const WriteTests: React.FC<WriteTestsProps> = ({ onCreateTest }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik<Test>({
    initialValues: { id: '', title: '', description: '' },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        onCreateTest(values);
        formik.resetForm();
      } catch (error) {
        console.error('Error creating test:', error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter test title"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            {...formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="mt-2 text-sm text-red-600" role="alert">
              {formik.errors.title}
            </div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="Enter test description (optional)"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            {...formik.getFieldProps('description')}
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Test {
  id: string;
  title: string;
  description: string;
}

interface WriteTestsProps {
  onCreateTest: (test: Test) => void;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().optional(),
});

const WriteTests: React.FC<WriteTestsProps> = ({ onCreateTest }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik<Test>({
    initialValues: { id: '', title: '', description: '' },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        onCreateTest(values);
        formik.resetForm();
      } catch (error) {
        console.error('Error creating test:', error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter test title"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            {...formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="mt-2 text-sm text-red-600" role="alert">
              {formik.errors.title}
            </div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="Enter test description (optional)"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            {...formik.getFieldProps('description')}
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;