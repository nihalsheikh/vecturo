export const mockStyleGuide = {
	theme: "dark",
	description:
		"A friendly SaaS dashboard theme with soft pastels, dark surfaces, and high-contrast text for readability.",

	colorSection: [
		{
			title: "Primary Colours",
			swatches: [
				{
					name: "Lavender Dream",
					hexColor: "#E8D5F2",
					description:
						"Soft purple for headers and primary UI surfaces.",
				},
				{
					name: "Cloud White",
					hexColor: "#FEFEFE",
					description:
						"Pure white background with subtle warmth for cards.",
				},
				{
					name: "Mint Cream",
					hexColor: "#F0FDF4",
					description:
						"Gentle mint for positive highlights and empty states.",
				},
			],
		},

		{
			title: "Secondary & Accent Colors",
			swatches: [
				{
					name: "Peach Blush",
					hexColor: "#FED7D7",
					description: "Warm peach for CTAs and highlights.",
				},
				{
					name: "Sky Blue",
					hexColor: "#DBEAFE",
					description:
						"Calming blue for secondary actions and links.",
				},
				{
					name: "Sunshine Yellow",
					hexColor: "#FEF3C7",
					description:
						"Cheerful yellow for attention-grabbing elements.",
				},
			],
		},

		{
			title: "UI Component Colors",
			swatches: [
				{
					name: "Rose Quartz",
					hexColor: "#FCE7F3",
					description:
						"Soft pink for dividers, tags, and subtle accents.",
				},
				{
					name: "Charcoal Soft",
					hexColor: "#1F2937",
					description:
						"Dark neutral for app shell, sidebar, and primary text.",
				},
				{
					name: "Graphite Border",
					hexColor: "#334155",
					description:
						"Muted border color for inputs, cards, and tables.",
				},
			],
		},

		{
			title: "Utility & Form Colors",
			swatches: [
				{
					name: "Input Surface",
					hexColor: "#020617",
					description:
						"Dark input background for high contrast on dark UI.",
				},
				{
					name: "Input Border",
					hexColor: "#1E293B",
					description:
						"Low-contrast default border for fields and controls.",
				},
				{
					name: "Focus Ring",
					hexColor: "#38BDF8",
					description:
						"Bright focus ring for accessible keyboard navigation.",
				},
			],
		},

		{
			title: "Status & Feedback Colors",
			swatches: [
				{
					name: "Success Mint",
					hexColor: "#4ADE80",
					description:
						"Success states, confirmations, and positive trends.",
				},
				{
					name: "Warning Amber",
					hexColor: "#FACC15",
					description: "Warnings, cautions, and soft alerts.",
				},
				{
					name: "Error Coral",
					hexColor: "#F97373",
					description:
						"Errors, destructive actions, and blocking messages.",
				},
				{
					name: "Info Indigo",
					hexColor: "#818CF8",
					description:
						"Informational banners and neutral notifications.",
				},
			],
		},
	],

	typographySections: [
		{
			title: "Display & Headings",
			styles: [
				{
					name: "Display / H1",
					fontFamily:
						"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
					fontSize: "32px",
					fontWeight: "700",
					lineHeight: "40px",
					letterSpacing: "-0.03em",
					description:
						"Top-level page titles and key dashboard headings.",
				},
				{
					name: "Heading / H2",
					fontFamily:
						"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
					fontSize: "24px",
					fontWeight: "600",
					lineHeight: "32px",
					letterSpacing: "-0.02em",
					description: "Section titles and card headers.",
				},
				{
					name: "Heading / H3",
					fontFamily:
						"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
					fontSize: "20px",
					fontWeight: "600",
					lineHeight: "28px",
					letterSpacing: "-0.01em",
					description: "Subsection headings and side-panel titles.",
				},
			],
		},

		{
			title: "Body & UI Text",
			styles: [
				{
					name: "Body / Default",
					fontFamily:
						"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
					fontSize: "16px",
					fontWeight: "400",
					lineHeight: "24px",
					description: "Primary body copy for readable content.",
				},
				{
					name: "Body / Small",
					fontFamily:
						"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
					fontSize: "14px",
					fontWeight: "400",
					lineHeight: "20px",
					description:
						"Secondary text, helper labels, and small notes.",
				},
				{
					name: "UI / Label",
					fontFamily:
						"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
					fontSize: "12px",
					fontWeight: "500",
					lineHeight: "16px",
					letterSpacing: "0.06em",
					description: "Button labels, overlines, and compact tags.",
				},
			],
		},

		{
			title: "Code & Meta",
			styles: [
				{
					name: "Code / Inline",
					fontFamily:
						"SFMono-Regular, Menlo, Monaco, 'Roboto Mono', ui-monospace, monospace",
					fontSize: "13px",
					fontWeight: "400",
					lineHeight: "20px",
					description:
						"Used for inline code, tokens, and short snippets.",
				},
				{
					name: "Code / Block",
					fontFamily:
						"SFMono-Regular, Menlo, Monaco, 'Roboto Mono', ui-monospace, monospace",
					fontSize: "14px",
					fontWeight: "400",
					lineHeight: "22px",
					description: "Used for block code samples and logs.",
				},
				{
					name: "Meta / Caption",
					fontFamily:
						"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
					fontSize: "12px",
					fontWeight: "400",
					lineHeight: "16px",
					description:
						"Metadata, timestamps, and secondary annotations.",
				},
			],
		},
	],
};
