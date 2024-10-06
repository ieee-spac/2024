'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Input } from '@/components/aceternity/input'
import { Textarea } from '@/components/aceternity/text-area'
import { Label as FormLabel } from '@/components/aceternity/label'
import { Button } from '@/components/shadcn/ui/button/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { CONTACT_FORM } from '@/content/constants'

const formSchema = z.object({
  fullName: z.string().trim().min(1, {
    message: `${CONTACT_FORM.FIELDS.NAME.errorMessage}`,
  }).max(255),
  email: z.string().trim().email({
    message: `${CONTACT_FORM.FIELDS.EMAIL.errorMessage}`,
  }).max(255),
  subject: z.string().trim().min(1, {
    message: `${CONTACT_FORM.FIELDS.SUBJECT.errorMessage}`,
  }).max(255),
  message: z.string().trim().min(1, {
    message: `${CONTACT_FORM.FIELDS.MESSAGE.errorMessage}`,
  }).max(255),
})

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    toast('✉️ Sending message...', {
      description: `Please be patient and don\'t refresh the page, otherwise your email will be lost to the void.🙏`,
    })
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const result = await response.json()
      if (result.error) {
        toast('Error sending message. Please try again.')
      }
      else {
        toast('🥳 Message sent successfully!', {
          description: `Confirmation email has been sent to ${values.email}. ✅`,
        })
        form.reset()
      }
    }
    catch (error) {
      console.error('Error:', error)
    }
    finally { setIsSubmitting(false) }
  }

  return (
    <div
      id="contact"
      className="overflow-none mx-auto my-20 max-w-3xl space-y-10 px-3 md:px-8 "
    >
      <h3 className="text-5xl font-bold text-primary sm:text-6xl">{CONTACT_FORM.TITLE}</h3>
      <Card className="transition-all duration-700 ease-in-out hover:drop-shadow-[0_0px_5px_rgba(0,202,255,1)]">
        <CardHeader>
          <CardTitle className="font-bold text-xl text-neutral-800 dark:text-neutral-200">{CONTACT_FORM.SUBTITLE}</CardTitle>
          <CardDescription
            className="text-neutral-600 text-sm mt-2 dark:text-neutral-300"
          >
            {CONTACT_FORM.DESCRIPTION}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="flex flex-col w-full space-y-2 xs:space-y-0 xs:space-x-6 xs:flex-row">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{CONTACT_FORM.FIELDS.NAME.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={CONTACT_FORM.FIELDS.NAME.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{CONTACT_FORM.FIELDS.EMAIL.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={CONTACT_FORM.FIELDS.EMAIL.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{CONTACT_FORM.FIELDS.SUBJECT.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={CONTACT_FORM.FIELDS.SUBJECT.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{CONTACT_FORM.FIELDS.MESSAGE.label}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={CONTACT_FORM.FIELDS.MESSAGE.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="place-content-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => form.handleSubmit(onSubmit)()}
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader2 className="animate-spin mr-2 size-4" /> : <EnvelopeOpenIcon className="mr-2 size-4" />}
            {isSubmitting ? 'Sending...' : `${CONTACT_FORM.SUBMIT_BUTTON_TEXT}`}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
