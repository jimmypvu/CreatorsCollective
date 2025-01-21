import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')
  const instagram = formData.get('instagram')
  const onlyfans = formData.get('onlyfans')
  const otherSocial = formData.get('other_social')

  // Here you would typically send this data to your email service or database
  // For now, we'll just log it and return a success response
  console.log('Form submission:', { name, email, message, instagram, onlyfans, otherSocial })

  // TODO: Add your email service integration here

  return NextResponse.json({ message: 'Form submitted successfully' })
}

