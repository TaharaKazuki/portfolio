'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';

import { FormSchema, formSchema } from './_schema';
import { ErrorMessage } from '@/components/errorMessage';
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
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
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
                <div>
                  <Input
                    className="w-full text-sm"
                    type="text"
                    placeholder="Firstname"
                    {...register('firstname')}
                  />
                  <ErrorMessage message={errors.firstname?.message} />
                </div>
                <div>
                  <Input
                    className="w-full text-sm"
                    type="text"
                    placeholder="Lastname"
                    {...register('lastname')}
                  />
                  <ErrorMessage message={errors.lastname?.message} />
                </div>
                <div>
                  <Input
                    className="w-full"
                    type="email"
                    placeholder="Email address"
                    {...register('email')}
                  />
                  <ErrorMessage message={errors.email?.message} />
                </div>
                <div>
                  <Input
                    className="w-full"
                    type="tel"
                    placeholder="Phone number"
                    {...register('phone')}
                  />
                  <ErrorMessage message={errors.phone?.message} />
                </div>
              </div>
              <div>
                <Controller
                  name="inquiry"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Inquiry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select Inquiry Item</SelectLabel>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="mobile">
                            Mobile Development
                          </SelectItem>
                          <SelectItem value="logo">Logo Design</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                <ErrorMessage message={errors.inquiry?.message} />
              </div>
              <div>
                <Textarea
                  className="h-[200px]"
                  placeholder="内容の詳細をご記載ください"
                  {...register('details')}
                />
                <ErrorMessage message={errors.details?.message} />
              </div>
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
