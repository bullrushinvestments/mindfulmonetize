import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface BusinessSpec {
  businessName: string;
  description: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>();
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }
  }, [error, toast]);

  const onSubmit: SubmitHandler<BusinessSpec> = async data => {
    try {
      setLoading(true);
      setError(null);

      await axios.post('/api/business-spec', data);
      reset();
      toast({
        title: 'Success',
        description: 'Business specification created successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true
      });
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium leading-6 text-gray-900">
          Business Name
        </label>
        <input
          id="businessName"
          type="text"
          {...register('businessName', { required: 'Business name is required' })}
          className={clsx(
            'form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            errors.businessName && 'focus:ring-red-500'
          )}
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
          Description
        </label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className={clsx(
            'form-textarea block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            errors.description && 'focus:ring-red-500'
          )}
        />
      </div>
      <div>
        <label htmlFor="contactEmail" className="block text-sm font-medium leading-6 text-gray-900">
          Contact Email
        </label>
        <input
          id="contactEmail"
          type="email"
          {...register('contactEmail', { required: 'Contact email is required' })}
          className={clsx(
            'form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            errors.contactEmail && 'focus:ring-red-500'
          )}
        />
      </div>
      <button
        type="submit"
        className={clsx(
          'inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          loading && 'cursor-not-allowed opacity-50'
        )}
      >
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface BusinessSpec {
  businessName: string;
  description: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>();
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }
  }, [error, toast]);

  const onSubmit: SubmitHandler<BusinessSpec> = async data => {
    try {
      setLoading(true);
      setError(null);

      await axios.post('/api/business-spec', data);
      reset();
      toast({
        title: 'Success',
        description: 'Business specification created successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true
      });
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium leading-6 text-gray-900">
          Business Name
        </label>
        <input
          id="businessName"
          type="text"
          {...register('businessName', { required: 'Business name is required' })}
          className={clsx(
            'form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            errors.businessName && 'focus:ring-red-500'
          )}
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
          Description
        </label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className={clsx(
            'form-textarea block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            errors.description && 'focus:ring-red-500'
          )}
        />
      </div>
      <div>
        <label htmlFor="contactEmail" className="block text-sm font-medium leading-6 text-gray-900">
          Contact Email
        </label>
        <input
          id="contactEmail"
          type="email"
          {...register('contactEmail', { required: 'Contact email is required' })}
          className={clsx(
            'form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            errors.contactEmail && 'focus:ring-red-500'
          )}
        />
      </div>
      <button
        type="submit"
        className={clsx(
          'inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          loading && 'cursor-not-allowed opacity-50'
        )}
      >
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;