import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description?: string;
  isEssential: boolean;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IGatherRequirementsForm>();

  const onSubmit = async (data: IGatherRequirementsForm) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/confirmation');
    } catch (error) {
      console.error('Error submitting requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Gather Requirements</h2>
      
      {Array.from({ length: 5 }, (_, i) => ({
        title: `Requirement ${i + 1}`,
        description: 'Provide a detailed description of the requirement.',
        isEssential: true,
      })).map((requirement, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700">
            {requirement.title}
          </label>
          <input
            type="text"
            id={`title-${index}`}
            {...register(`requirements[${index}].title`)}
            aria-label={requirement.title}
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p className="text-red-600 text-xs mt-1">{errors[`requirements[${index}].title`]?.message}</p>

          <label htmlFor={`description-${index}`} className="mt-2 block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements[${index}].description`)}
            aria-label={requirement.description}
            rows={3}
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p className="text-red-600 text-xs mt-1">{errors[`requirements[${index}].description`]?.message}</p>
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className={`mt-4 py-2 px-4 w-full rounded-md shadow-sm ${loading ? 'bg-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'} disabled:cursor-not-allowed`}
      >
        {loading ? 'Submitting...' : 'Submit Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description?: string;
  isEssential: boolean;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IGatherRequirementsForm>();

  const onSubmit = async (data: IGatherRequirementsForm) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/confirmation');
    } catch (error) {
      console.error('Error submitting requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Gather Requirements</h2>
      
      {Array.from({ length: 5 }, (_, i) => ({
        title: `Requirement ${i + 1}`,
        description: 'Provide a detailed description of the requirement.',
        isEssential: true,
      })).map((requirement, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700">
            {requirement.title}
          </label>
          <input
            type="text"
            id={`title-${index}`}
            {...register(`requirements[${index}].title`)}
            aria-label={requirement.title}
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p className="text-red-600 text-xs mt-1">{errors[`requirements[${index}].title`]?.message}</p>

          <label htmlFor={`description-${index}`} className="mt-2 block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements[${index}].description`)}
            aria-label={requirement.description}
            rows={3}
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p className="text-red-600 text-xs mt-1">{errors[`requirements[${index}].description`]?.message}</p>
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className={`mt-4 py-2 px-4 w-full rounded-md shadow-sm ${loading ? 'bg-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'} disabled:cursor-not-allowed`}
      >
        {loading ? 'Submitting...' : 'Submit Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;