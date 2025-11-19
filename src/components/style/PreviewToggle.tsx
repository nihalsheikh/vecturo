"use client";

import { useState } from "react";
import { ThemeContent } from "@/components/style/theme";
import { mockStyleGuide } from "@/app/(protected)/dashboard/[session]/(workspace)/style-guide/mockData";

export default function PreviewToggle({
	fallbackColorGuide,
}: {
	fallbackColorGuide: any[];
}) {
	const [open, setOpen] = useState(false);

	const colorGuideToShow =
		fallbackColorGuide && fallbackColorGuide.length
			? fallbackColorGuide
			: mockStyleGuide.colorSection;

	return (
		<>
			<button
				type="button"
				className="px-4 py-2 rounded-md bg-[#7C3AED] text-white hover:opacity-95 transition"
				onClick={() => setOpen(true)}
			>
				Preview sample style guide
			</button>

			{open && (
				<div
					role="dialog"
					aria-modal="true"
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
				>
					{/* Backdrop */}
					<div
						className="absolute inset-0 bg-black/60"
						onClick={() => setOpen(false)}
						aria-hidden="true"
					/>

					{/* Modal */}
					<div className="relative z-10 max-w-3xl w-full bg-[#0b0f14] text-[#E6EEF6] rounded-lg shadow-xl overflow-auto max-h-[80vh]">
						<header className="flex items-center justify-between p-4 border-b border-[#1f2937]">
							<h3 className="text-lg font-semibold">
								Sample Style Guide Preview
							</h3>
							<button
								onClick={() => setOpen(false)}
								aria-label="Close preview"
								className="px-3 py-1 rounded-md bg-transparent border border-[#1f2937]"
							>
								Close
							</button>
						</header>

						<div className="p-6">
							{/* Render ThemeContent with the fallback color guide */}
							<ThemeContent colorGuide={colorGuideToShow} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
