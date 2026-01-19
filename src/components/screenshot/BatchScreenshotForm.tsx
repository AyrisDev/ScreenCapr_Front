"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Layers, Download, Loader2, AlertCircle, CheckCircle2 } from "lucide-react"
import { z } from "zod"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage, FormDescription } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { useBatchScreenshot } from "@/hooks/useScreenshot"
import { DEFAULT_SCREENSHOT_OPTIONS } from "@/lib/constants"
import { screenshotOptionsSchema, urlSchema } from "@/lib/validations"
import { OptionsPanel } from "./OptionsPanel"

const batchFormSchema = z.object({
  urlList: z.string().min(1, "Please enter at least one URL"),
  ...screenshotOptionsSchema.shape
})

type BatchFormData = z.infer<typeof batchFormSchema>

export function BatchScreenshotForm() {
  const [isOptionsExpanded, setIsOptionsExpanded] = React.useState(false)
  const [successMessage, setSuccessMessage] = React.useState<string | null>(null)

  const form = useForm<BatchFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(batchFormSchema) as any,
    defaultValues: {
      urlList: "",
      width: DEFAULT_SCREENSHOT_OPTIONS.width,
      height: DEFAULT_SCREENSHOT_OPTIONS.height,
      fullPage: DEFAULT_SCREENSHOT_OPTIONS.fullPage,
      format: DEFAULT_SCREENSHOT_OPTIONS.format,
      quality: DEFAULT_SCREENSHOT_OPTIONS.quality,
      timeout: DEFAULT_SCREENSHOT_OPTIONS.timeout,
    },
  })

  const batchMutation = useBatchScreenshot({
    onSuccess: () => {
      setSuccessMessage(`Batch processing complete! Your ZIP file is downloading.`)
      form.reset({ ...form.getValues(), urlList: "" })
      setTimeout(() => setSuccessMessage(null), 5000)
    },
    onError: (error) => {
      console.error('Batch error:', error?.message || error || 'Unknown error')
    },
  })

  const onSubmit = (data: BatchFormData) => {
    setSuccessMessage(null)
    const { urlList, width, height, ...restOptions } = data

    // Parse URLs
    const urls = urlList
      .split('\n')
      .map(u => u.trim())
      .filter(u => u.length > 0)

    // Manual validation for the array since it's hard to do complex regex/transform in one block
    const validUrls: string[] = []
    const errors: string[] = []

    urls.forEach(u => {
      try {
        urlSchema.parse(u)
        validUrls.push(u)
      } catch {
        errors.push(u)
      }
    })

    if (errors.length > 0) {
      form.setError("urlList", { message: `Invalid URLs found: ${errors.slice(0, 2).join(", ")}${errors.length > 2 ? "..." : ""}` })
      return
    }

    if (validUrls.length > 10) {
      form.setError("urlList", { message: "Maximum 10 URLs allowed per batch." })
      return
    }

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

    batchMutation.mutate({ urls: validUrls, options })
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="bg-surface-dark/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
        <div className="flex flex-col gap-2 mb-8 items-center text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Batch Capture</h3>
          <p className="text-slate-400">Enter up to 10 URLs (one per line) to capture them all in a ZIP file.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="urlList"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-xl blur opacity-10 group-focus-within:opacity-30 transition duration-500"></div>
                      <Textarea
                        placeholder={"https://google.com\nhttps://github.com\nhttps://apple.com"}
                        className="relative min-h-[160px] bg-surface-dark border-white/10 rounded-xl focus:border-primary/50 text-white placeholder:text-slate-600 p-6 text-base resize-none font-mono leading-relaxed"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription className="text-xs text-slate-500 mt-2">
                    Separate URLs with a new line. Max 10.
                  </FormDescription>
                  <FormMessage className="text-red-400 mt-2" />
                </FormItem>
              )}
            />

            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={batchMutation.isPending}
                  className="bg-primary text-background-dark font-black px-8 h-12 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
                >
                  {batchMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing Batch...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-5 w-5" />
                      Capture All (ZIP)
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
                  className="h-12 px-6 rounded-xl border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                >
                  {isOptionsExpanded ? "Hide Settings" : "Configure Batch Settings"}
                </Button>
              </div>
            </div>

            {batchMutation.isPending && (
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Processing batch queue...</span>
                  <span className="animate-pulse">Rendering multiple instances</span>
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

            {batchMutation.error && (
              <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 text-red-400 rounded-xl">
                <AlertCircle className="h-5 w-5" />
                <AlertDescription>
                  {batchMutation.error.message || "Failed to process batch. Please try again."}
                </AlertDescription>
              </Alert>
            )}

            <div className={`mt-8 ${isOptionsExpanded ? "block" : "hidden"}`}>
              <OptionsPanel
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                form={form as any}
                isExpanded={true}
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}