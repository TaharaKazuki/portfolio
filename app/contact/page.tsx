'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import { FormSchema, formSchema } from './_schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.info(data);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 3, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="mx-auto w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
            >
              <h3 className="text-3xl text-accent">Consultation</h3>
              <p className="text-sm text-white/60">
                ご質問・ご相談については以下フォームより承っております。
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="text"
                  placeholder="Firstname"
                  {...register('firstname')}
                />
                {errors.firstname && (
                  <span className="text-xs text-accent">
                    {errors.firstname.message}
                  </span>
                )}

                <Input
                  type="text"
                  placeholder="Lastname"
                  {...register('lastname')}
                />
                {errors.lastname && (
                  <span className="text-xs text-accent">
                    {errors.lastname.message}
                  </span>
                )}

                <Input
                  type="email"
                  placeholder="Email address"
                  {...register('email')}
                />
                {errors.email && (
                  <span className="text-xs text-accent">
                    {errors.email.message}
                  </span>
                )}

                <Input
                  type="tel"
                  placeholder="Phone number"
                  {...register('phone')}
                />
                {errors.phone && (
                  <span className="text-xs text-accent">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <Select {...register('inquiry')}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Inquiry item" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Inquiry item</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="内容の詳細をご記載ください"
                {...register('details')}
              />
              <div className="flex justify-center sm:justify-start">
                <Button
                  variant={'outline'}
                  className="w-40 items-center text-white xl:hover:bg-accent xl:hover:text-primary"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
