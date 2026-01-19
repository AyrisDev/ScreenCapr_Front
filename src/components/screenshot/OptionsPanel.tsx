"use client"

import * as React from "react"
import { Monitor, Smartphone, Tablet, Settings2, Maximize2, Image as ImageIcon, Clock } from "lucide-react"
import { UseFormReturn } from "react-hook-form"

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { VIEWPORT_PRESETS } from "@/lib/constants"
import type { ScreenshotFormData } from "@/lib/validations"

interface OptionsPanelProps {
  form: UseFormReturn<ScreenshotFormData>
  isExpanded?: boolean
}

export function OptionsPanel({ form, isExpanded = false }: OptionsPanelProps) {
  const formatValue = form.watch("format")
  const widthValue = form.watch("width")
  const heightValue = form.watch("height")

  const handlePresetSelect = (preset: typeof VIEWPORT_PRESETS[0]) => {
    form.setValue("width", preset.width)
    form.setValue("height", preset.height)
  }

  return (
    <div className={`space-y-10 animate-in fade-in slide-in-from-top-4 duration-500 ${!isExpanded ? "hidden" : "block"}`}>
      {/* Viewport Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <Monitor className="w-5 h-5 text-primary" />
          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Viewport & Resolution</h4>
        </div>

        {/* Presets Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {VIEWPORT_PRESETS.map((preset) => {
            const isActive = widthValue === preset.width && heightValue === preset.height
            const Icon = preset.name.includes("Mobile") ? Smartphone :
              preset.name.includes("Tablet") ? Tablet : Monitor

            return (
              <button
                key={preset.name}
                type="button"
                onClick={() => handlePresetSelect(preset)}
                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all ${isActive
                  ? "bg-primary/20 border-primary text-white shadow-lg shadow-primary/10"
                  : "bg-surface-dark border-white/5 text-slate-500 hover:border-white/20 hover:text-slate-300"
                  }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest">{preset.name}</span>
                  <span className="text-[10px] opacity-60 mt-0.5">{preset.width}×{preset.height}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Custom Dimensions */}
        <div className="grid grid-cols-2 gap-6 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-500">Width (PX)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="bg-background-dark border-white/10 text-white focus:border-primary/50 h-10 rounded-lg text-sm"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-500">Height (PX)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="bg-background-dark border-white/10 text-white focus:border-primary/50 h-10 rounded-lg text-sm"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Output Settings */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <ImageIcon className="w-5 h-5 text-primary" />
          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Output Settings</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="format"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-500">File Format</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-surface-dark border-white/10 text-white h-12 rounded-xl focus:ring-primary/20">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-surface-dark border-white/10 text-white">
                    <SelectItem value="png">Portable Network Graphics (PNG)</SelectItem>
                    <SelectItem value="jpeg">Joint Photographic Experts Group (JPEG)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          {formatValue === "jpeg" && (
            <FormField
              control={form.control}
              name="quality"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-500">Quality: {field.value}%</FormLabel>
                  </div>
                  <FormControl>
                    <Slider
                      min={1}
                      max={100}
                      step={1}
                      value={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                      className="[&>span]:bg-primary"
                    />
                  </FormControl>
                  <FormDescription className="text-[10px] text-slate-500">
                    Higher quality increases file size but improves clarity.
                  </FormDescription>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
          )}
        </div>
      </div>

      {/* Advanced Features */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <Settings2 className="w-5 h-5 text-primary" />
          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Advanced Options</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullPage"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-primary" />
                  <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-500">Capture Area</FormLabel>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => field.onChange(false)}
                    className={`flex items-center justify-center gap-2 h-11 rounded-xl border transition-all text-[11px] font-bold ${!field.value
                      ? "bg-primary/20 border-primary text-white shadow-lg shadow-primary/10"
                      : "bg-surface-dark border-white/5 text-slate-500 hover:border-white/20"
                      }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    Viewport
                  </button>
                  <button
                    type="button"
                    onClick={() => field.onChange(true)}
                    className={`flex items-center justify-center gap-2 h-11 rounded-xl border transition-all text-[11px] font-bold ${field.value
                      ? "bg-primary/20 border-primary text-white shadow-lg shadow-primary/10"
                      : "bg-surface-dark border-white/5 text-slate-500 hover:border-white/20"
                      }`}
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Full Page
                  </button>
                </div>
                <FormDescription className="text-[10px] text-slate-500 leading-tight">
                  {field.value ? "Captures the entire page content." : "Captures only the visible window."}
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="timeout"
            render={({ field }) => (
              <FormItem className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <FormLabel className="font-bold text-white text-sm">Timeout</FormLabel>
                  </div>
                  <span className="text-[10px] font-black text-primary">{field.value / 1000}s</span>
                </div>
                <FormControl>
                  <Slider
                    min={5000}
                    max={60000}
                    step={5000}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="[&>span]:bg-primary"
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  )
}