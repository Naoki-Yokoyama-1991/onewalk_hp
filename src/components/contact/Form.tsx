/* eslint-disable @typescript-eslint/no-misused-promises */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { Input, Textarea, Checkbox } from './Input';
import Router from 'next/router';
console.log(process.env.SENDGRID_API_KEY as string);
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export interface Inputs {
  name: string;
  subject: string;
  organization: string;
  department: string;
  email: string;
  number: number;
  detail: string;
  terms: boolean;
}

const Form: FC = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string().max(30, '30文字以内で入力してください').required('名前は必須です'),
    subject: Yup.string().max(50, '50文字以内で入力してください').required('件名は必須です'),
    organization: Yup.string().max(50, '50文字以内で入力してください').required('組織名は必須です'),
    department: Yup.string().max(50, '50文字以内で入力してください').required('部署名は必須です'),
    email: Yup.string()
      .email('メールアドレスの形式が正しくありません')
      .required('メールアドレスは必須です'),
    number: Yup.string()
      .matches(phoneRegExp, '電話番号の形式が正しくありません')
      .required('お電話番号は必須です'),
    detail: Yup.string().required('お問い合わせ内容は必須です'),
    terms: Yup.boolean().oneOf([true], 'チェックを入れる必要があります'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm<Inputs>(formOptions);
  const { errors } = formState;

  const onSubmit: SubmitHandler<Inputs> = async (data): Promise<void> => {
    // display form data on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    try {
      await fetch('/api/send', {
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          organization: data.organization,
          department: data.department,
          number: data.number,
          detail: data.detail,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }).then((res) => {
        if (!res.ok) {
          throw Error(`${res.status} ${res.statusText}`);
        }
      });
      void Router.push('/contact/complete');
      reset();
    } catch (err) {
      void Router.push('/contact/error');
    }
  };

  const Class = ' mb-11  border-b-2 border-gray_pale pb-7 ';
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full' autoComplete='off'>
        <div className={Class}>
          <Input label='name' placeholder='お名前' register={register} />
          {errors.name && <p className='mt-4 text-red'>{errors.name.message}</p>}
        </div>
        <div className={Class}>
          <Input label='subject' placeholder='件名' register={register} />
          {errors.subject && <p className='mt-4 text-red'>{errors.subject.message}</p>}
        </div>
        <div className={Class}>
          <Input label='organization' placeholder='組織名' register={register} />
          {errors.organization && <p className='mt-4 text-red'>{errors.organization.message}</p>}
        </div>
        <div className={Class}>
          <Input label='department' placeholder='部署名' register={register} />
          {errors.department && <p className='mt-4 text-red'>{errors.department.message}</p>}
        </div>
        <div className={Class}>
          <Input label='email' placeholder='メールアドレス' register={register} />
          {errors.email && <p className='mt-4 text-red'>{errors.email.message}</p>}
        </div>
        <div className={Class}>
          <Input label='number' placeholder='お電話番号' register={register} />
          {errors.number && <p className='mt-4 text-red'>{errors.number.message}</p>}
        </div>
        <div className={Class}>
          <Textarea label='detail' placeholder='お問い合わせ内容' register={register} />
          {errors.detail && <p className='mt-4 text-red'>{errors.detail.message}</p>}
        </div>

        <Checkbox label='terms' register={register} />
        {errors.terms && <p className='mt-4 text-red'>{errors.terms.message}</p>}
        <button
          type='submit'
          className='group relative mt-20 flex h-14 w-52 items-center justify-between overflow-hidden rounded-full border-2 border-solid border-red    px-6 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:origin-top-left before:scale-y-100 before:scale-x-0 before:bg-red before:duration-500  before:content-[""] hover:before:scale-x-100'
        >
          <p className='relative z-10 font-medium text-red duration-500 group-hover:text-white'>
            送信する
          </p>
          <span className='block h-2.5 w-2.5 rotate-45 rounded-sm border-t-3 border-r-3 border-solid border-red duration-500 group-hover:border-white'></span>
        </button>
      </form>
    </>
  );
};

export default Form;
