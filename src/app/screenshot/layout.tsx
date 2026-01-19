import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Capture Workspace | Website Screenshot Tool",
    description: "Advanced workspace for taking single and batch screenshots of any website with custom resolution and full-page support.",
    keywords: ["online screenshot tool", "website capture workspace", "batch screenshot", "retina screenshot capture"],
}

export default function ScreenshotLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
