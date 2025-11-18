"use client";

import { useQuery } from "convex/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { Id } from "../../../convex/_generated/dataModel";
import { api } from "../../../convex/_generated/api";
import { CircleQuestionMark, Hash, LayoutTemplate, User } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAppSelector } from "@/redux/store";
import CreateProject from "../buttons/project";

type TabProps = {
	label: string;
	href: string;
	icon?: React.ReactNode;
};

const Navbar = () => {
	const params = useSearchParams();
	const projectId = params.get("project");
	const pathname = usePathname();

	/*
		// make an api call to get user through -> ReactContext API or Redux or Redux Toolkit for Global State Management
		using RTK -> Redux Toolkit
		1. Write fetch() code
		2. Handle loading state (show spinner)
		3. Handle errors (show error message)
		4. Handle caching (don't fetch same data twice)
		5. Handle updating the UI when data changes
	*/
	const me = useAppSelector((state) => state.profile);

	const tabs: TabProps[] = [
		{
			label: "Canvas",
			href: `/dashboard/${me.name}/canvas?project=${projectId}`, // add in href later after dashboard -> ${me.name}/
			icon: <Hash className="h-4 w-4" />,
		},
		{
			label: "Style Guide",
			href: `/dashboard/${me.name}/style-guide?project=${projectId}`, // add in href later after dashboard -> ${me.name}/
			icon: <LayoutTemplate className="h-4 w-4" />,
		},
	];

	const shouldFetch = !!projectId && projectId !== "null";

	// Always call useQuery, use "skip" to prevent API call
	const project = useQuery(
		api.projects.getProject,
		shouldFetch ? { projectId: projectId as Id<"projects"> } : "skip"
	);

	const hasCanvas = pathname.includes("canvas");
	const hasStyleGuide = pathname.includes("style-guide");

	return (
		<div className="grid grid-cols-2 lg:grid-cols-3 p-6 fixed top-0 left-0 right-0 z-50">
			<div className="flex items-center gap-4">
				<Link
					href={me ? `/dashboard/${me.name}` : "/dashboard"} // later add this back to url -> ${me.name}
					className="w-8 h-8 rounded-full border-3 border-white bg-black flex items-center justify-center"
				>
					<div className="w-4 h-4 rounded-full bg-white"></div>
				</Link>

				{!hasCanvas ||
					(!hasStyleGuide && (
						<div className="lg:inline-block hidden rounded-full text-primary/60 border border-white/12 backdrop-blur-xl bg-white/8 px-4 py-2 text-sm saturate-150">
							Project / {project?.name}
						</div>
					))}
			</div>

			<div className="lg:flex hidden items-center justify-center gap-2">
				<div className="flex items-center gap-2 backdrop-blur-xl bg-white/8 border border-white/12 rounded-full p-2 saturate-150">
					{tabs.map((t) => (
						<Link
							key={t.href}
							href={t.href}
							className={[
								"group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition",
								`${pathname}?project=${projectId}` === t.href
									? "bg-white/12 text-white border border-white/16 backdrop-blur-sm"
									: "text-zinc-400 hover:text-zinc-200 hover:bg-white/6 border border-transparent",
							].join(" ")}
						>
							<span
								className={
									`${pathname}?project=${projectId}` ===
									t.href
										? "opacity-100"
										: "opacity-70 group-hover:opacity-90"
								}
							>
								{t.icon}
							</span>
							<span>{t.label}</span>
						</Link>
					))}
				</div>
			</div>

			<div className="flex items-center gap-4 justify-end">
				<span className="text-sm text-white/50">TODO: credits</span>

				<Button
					variant="secondary"
					className="rounded-full h-12 w-12 flex items-center justify-center backdrop-blur-xl bg-white/8 border border-white/12 saturate-150 hover:bg-white/12"
				>
					<CircleQuestionMark className="size-5 text-white" />
				</Button>

				<Avatar className="size-12 ml-2">
					{/* add image src later -> src={image}  */}
					<AvatarImage src={me?.image || ""} />
					<AvatarFallback>
						<User className="size-5 text-black" />
					</AvatarFallback>
				</Avatar>

				{/* {hasCanvas && <Autosave />} */}
				{!hasCanvas && !hasStyleGuide && <CreateProject />}
			</div>
		</div>
	);
};

export default Navbar;
