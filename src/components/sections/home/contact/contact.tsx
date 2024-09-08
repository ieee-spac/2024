// TODO: Remove these ESLint disables after Shadcn migration is complete
/* eslint-disable no-alert */
/* eslint-disable no-console */

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
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

const formSchema = z.object({
  fullName: z.string().trim().min(1, {
    message: 'To whom do we speak to? :/',
  }).max(255),
  email: z.string().trim().email({
    message: 'Without a valid email, how are we going to send you our newsletter full of cat memes? :/',
  }).max(255),
  subject: z.string().trim().min(1, {
    message: 'A subject helps us pretend we\'re organized. :/ ',
  }).max(255),
  message: z.string().trim().min(1, {
    message: 'A message without content is like a sandwich without filling. :/',
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

  const [isSubmitting, setIsSubmitting] = useState(false) // Add this state variable

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const result = await response.json()
      console.log(result)
      if (result.error) {
        alert('Error sending message. Please try again.')
      }
      else {
        alert('Message sent successfully!')
        form.reset()
      }
    }
    catch (error) {
      console.error('Error:', error)
      alert('Error sending message. Please try again.')
    }
    finally { setIsSubmitting(false) }
  }

  return (
    <div
      id="contact"
      className="overflow-none mx-auto my-20 max-w-3xl space-y-10 px-3 md:px-8"
    >
      <h3 className="text-5xl font-bold text-primary sm:text-6xl">Contact</h3>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Get in Touch</CardTitle>
          <CardDescription
            className="text-neutral-600 text-sm mt-2 dark:text-neutral-300"
          >
            Questions or feedback? Drop us a message, and we'll get back to you soon.
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
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Full Name*" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email*" {...field} />
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
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject*" {...field} />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your Message*" {...field} />
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
          >
            {isSubmitting ? <Loader2 className="animate-spin mr-2 size-4" /> : <EnvelopeOpenIcon className="mr-2 size-4" />}
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
