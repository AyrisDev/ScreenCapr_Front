import { useMutation } from '@tanstack/react-query';
import { downloadScreenshot, downloadBatchScreenshots, downloadFile, generateFilename, generateBatchFilename } from '@/lib/api';
import type { ScreenshotOptions, ApiError } from '@/types/api';

interface UseScreenshotOptions {
  onSuccess?: (data: Blob, variables: { url: string; options?: ScreenshotOptions }) => void;
  onError?: (error: ApiError) => void;
}

export const useScreenshot = (options?: UseScreenshotOptions) => {
  return useMutation({
    mutationFn: async ({ url, options: screenshotOptions }: { url: string; options?: ScreenshotOptions }) => {
      const blob = await downloadScreenshot(url, screenshotOptions);
      return { blob, url, options: screenshotOptions };
    },
    onSuccess: (data: { blob: Blob; url: string; options?: ScreenshotOptions }, variables) => {
      const filename = generateFilename(
        data.url,
        data.options?.format || 'png'
      );
      downloadFile(data.blob, filename);
      options?.onSuccess?.(data.blob, variables);
    },
    onError: (error: ApiError) => options?.onError?.(error),
  });
};

export const useBatchScreenshot = (options?: { onSuccess?: () => void; onError?: (error: ApiError) => void }) => {
  return useMutation({
    mutationFn: async ({ urls, options: screenshotOptions }: { urls: string[]; options?: ScreenshotOptions }) => {
      const blob = await downloadBatchScreenshots(urls, screenshotOptions);
      return { blob, urls, options: screenshotOptions };
    },
    onSuccess: (data: { blob: Blob; urls: string[]; options?: ScreenshotOptions }) => {
      const filename = generateBatchFilename();
      downloadFile(data.blob, filename);
      options?.onSuccess?.();
    },
    onError: (error: ApiError) => options?.onError?.(error),
  });
};