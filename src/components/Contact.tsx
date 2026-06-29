import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-[2rem] shadow-sm">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Book an Appointment</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input {...register("name")} placeholder="Your Name" className="w-full p-4 border border-gray-200 rounded-xl" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message as string}</p>}
          <input {...register("email")} placeholder="Your Email" className="w-full p-4 border border-gray-200 rounded-xl" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
          <textarea {...register("message")} placeholder="Your Message" className="w-full p-4 border border-gray-200 rounded-xl h-32" />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message as string}</p>}
          <button type="submit" className="w-full bg-primary text-white py-4 rounded-full font-semibold hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </section>
  );
};
