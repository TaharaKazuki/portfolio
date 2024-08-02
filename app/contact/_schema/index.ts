import * as z from 'zod';

const phoneRegex =
  /^(\+?\d{1,4})?[-.\s]?(\d{2,4})[-.\s]?(\d{3,4})[-.\s]?(\d{4})$/;

export const formSchema = z.object({
  firstname: z.string().min(1, { message: '1文字以上の入力が必要です' }),
  lastname: z.string().min(1, { message: '1文字以上の入力が必要です' }),
  email: z
    .string()
    .email({ message: '正しいEmailの形式での入力をお願いします。' }),
  phone: z
    .string()
    .regex(phoneRegex, { message: '正しい形式での電話番号入力をしてください' })
    .optional(),
  inquiry: z.enum(['web', 'mobile', 'logo', 'other'], {
    message: '項目を選択してください',
  }),
  details: z.string().min(1, { message: '1文字以上の入力が必要です' }),
});

export type FormSchema = z.infer<typeof formSchema>;
