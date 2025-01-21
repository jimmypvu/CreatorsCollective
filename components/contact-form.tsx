"use client"

import type * as React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://getform.io/f/axooqezb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log("Form submission response:", responseData)
        setSubmitStatus("success")
        form.reset()
      } else {
        const errorData = await response.text()
        console.error("Form submission failed:", response.status, errorData)
        setSubmitStatus("error")
        setErrorMessage(`Submission failed: ${response.status} ${response.statusText}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsSubmitting(false)
      // Reset submitStatus after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <Card className={cn("w-full bg-gray-900 text-white pt-6", className)}>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div id="contact" className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Lee Robinson"
                className="text-white bg-gray-800 border-gray-700"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="leerob@acme.com"
                className="text-white bg-gray-800 border-gray-700"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input
                id="phone"
                name="phone"
                type="phone"
                placeholder="optional"
                className="text-white bg-gray-800 border-gray-700"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="text-white bg-gray-800 border-gray-700 min-h-[100px]"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="optional">
              Social Media Links <span className="italic">(optional)</span>
            </Label>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="onlyfans">OnlyFans</Label>
              <Input
                id="onlyfans"
                name="onlyfans"
                placeholder="@your_onlyfan"
                className="text-white bg-gray-800 border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input
                id="instagram"
                name="instagram"
                placeholder="@your_ig"
                className="text-white bg-gray-800 border-gray-700"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tiktok">TikTok</Label>
            <Input
              id="tiktok"
              name="tiktok"
              placeholder="@your_tiktok"
              className="text-white bg-gray-800 border-gray-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="other">
              Other<div></div>
              <span className="italic">(Twitter, Fansly, Discord, PornHub, Portfolio, etc)</span>
            </Label>
            <Input
              id="other"
              name="other"
              placeholder="Twitter, Fansly, etc."
              className="text-white bg-gray-800 border-gray-700"
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              size="lg"
              className={`w-full sm:w-auto text-black hover:bg-gray-200 ${
                submitStatus === "success"
                  ? "bg-gradient-to-r from-teal-400 to-teal-500 text-white"
                  : submitStatus === "error"
                    ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white"
                    : "bg-white"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Sending..."
                : submitStatus === "success"
                  ? "Success!"
                  : submitStatus === "error"
                    ? "Error Sending Message, Retry?"
                    : "Send Message"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

