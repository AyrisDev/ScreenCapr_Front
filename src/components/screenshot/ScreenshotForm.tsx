"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Camera, Download, Loader2, Link, AlertCircle, CheckCircle2 } from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { useScreenshot } from "@/hooks/useScreenshot"
import { DEFAULT_SCREENSHOT_OPTIONS } from "@/lib/constants"
import { screenshotFormSchema, type ScreenshotFormData } from "@/lib/validations"
import { OptionsPanel } from "./OptionsPanel"

export function ScreenshotForm() {
  const [isOptionsExpanded, setIsOptionsExpanded] = React.useState(false)
  const [successMessage, setSuccessMessage] = React.useState<string | null>(null)

  const form = useForm<ScreenshotFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(screenshotFormSchema) as any,
    defaultValues: {
      url: "",
      width: DEFAULT_SCREENSHOT_OPTIONS.width,
      height: DEFAULT_SCREENSHOT_OPTIONS.height,
      fullPage: DEFAULT_SCREENSHOT_OPTIONS.fullPage,
      format: DEFAULT_SCREENSHOT_OPTIONS.format,
      quality: DEFAULT_SCREENSHOT_OPTIONS.quality,
      timeout: DEFAULT_SCREENSHOT_OPTIONS.timeout,
    },
  })

  const screenshot = useScreenshot({
    onSuccess: (blob, variables) => {
      setSuccessMessage(`Screenshot of ${variables.url} downloaded successfully!`)
      form.reset({ ...form.getValues(), url: "" })
      setTimeout(() => setSuccessMessage(null), 5000)
    },
    onError: (error) => {
      console.error('Screenshot error:', error?.message || error || 'Unknown error')
    },
  })

  const onSubmit = (data: ScreenshotFormData) => {
    setSuccessMessage(null)
    const { url, width, height, ...restOptions } = data

    // Create options with viewport object for proper device emulation
    const options = {
      ...restOptions,
      width,
      height,
      viewport: {
        width,
        height,
      },
    }

    console.log('📸 Screenshot Request:', { url, options })
    screenshot.mutate({ url, options })
  }

  const urlValue = form.watch("url")
  const isValidUrl = urlValue && !form.formState.errors.url

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="bg-surface-dark/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
        <div className="flex flex-col gap-2 mb-8 items-center text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <Camera className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Capture Screenshot</h3>
          <p className="text-slate-400">Enter a URL to capture a high-quality screenshot instantly.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-xl blur opacity-10 group-focus-within:opacity-30 transition duration-500"></div>
                      <div className="relative flex h-16 bg-surface-dark border border-white/10 rounded-xl overflow-hidden focus-within:border-primary/50 transition-colors">
                        <div className="flex items-center pl-5 text-slate-500">
                          <Link className="h-5 w-5" />
                        </div>
                        <Input
                          placeholder="https://example.com"
                          className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white placeholder:text-slate-600 px-4 text-base h-full"
                          {...field}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400 mt-2" />
                </FormItem>
              )}
            />

            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={screenshot.isPending || !isValidUrl}
                  className="bg-primary text-background-dark font-black px-8 h-12 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
                >
                  {screenshot.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-5 w-5" />
                      Take Screenshot
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
                  className="h-12 px-6 rounded-xl border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                >
                  {isOptionsExpanded ? "Hide Settings" : "Configure Settings"}
                </Button>
              </div>
            </div>

            {screenshot.isPending && (
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Capturing screenshot...</span>
                  <span className="animate-pulse">Connecting to browser fleet</span>
                </div>
                <Progress value={undefined} className="h-1.5 bg-white/5 [&>div]:bg-primary" />
              </div>
            )}

            {successMessage && (
              <Alert className="bg-green-500/10 border-green-500/20 text-green-400 rounded-xl">
                <CheckCircle2 className="h-5 w-5" />
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}

            {screenshot.error && (
              <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 text-red-400 rounded-xl">
                <AlertCircle className="h-5 w-5" />
                <AlertDescription>
                  {screenshot.error.message || "Failed to take screenshot. Please try again."}
                </AlertDescription>
              </Alert>
            )}

            <div className={`mt-8 ${isOptionsExpanded ? "block" : "hidden"}`}>
              <OptionsPanel
                form={form}
                isExpanded={true}
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}