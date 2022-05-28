import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { Inputs } from '../../pages/contact';

type InputProps = {
  label: Path<Inputs>;
  register: UseFormRegister<Inputs>;
  placeholder: string;
};

interface CheckboxProps {
  register: UseFormRegister<Inputs>;
  label: Path<Inputs>;
}

// <input>要素を含んだ子コンポーネント
export const Input = ({ label, register, placeholder }: InputProps) => (
  <>
    <label htmlFor={label} className='flex items-center justify-between'>
      <input
        className='w-full bg-white outline-0 placeholder:text-neutral-400'
        placeholder={placeholder}
        {...register(label)}
      />
      <span className='inline-block h-0.6 w-0.6 rounded-full bg-red'></span>
    </label>
  </>
);

export const Textarea = ({ label, register, placeholder }: InputProps) => (
  <label htmlFor={label} className='flex justify-between'>
    <textarea
      className=' h-48 w-full resize-none  outline-0 placeholder:text-neutral-400'
      placeholder={placeholder}
      {...register(label)}
    />
    <span className='inline-block h-0.6 w-0.6 rounded-full bg-red'></span>
  </label>
);

export const Checkbox = ({ label, register }: CheckboxProps) => (
  <div>
    <label htmlFor={label} className='flex justify-between'>
      <div className='flex'>
        <input type='checkbox' {...register(label)} className=' h-5 w-5 ' />
        <span className='ml-3 text-sm'>ご提供いただく 個人情報の取り扱い方針に同意する</span>
      </div>
      <span className='relative -bottom-1.5 inline-block h-0.6 w-0.6 rounded-full bg-red'></span>
    </label>
  </div>
);
