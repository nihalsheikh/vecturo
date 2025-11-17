import Navbar from "@/components/navbar";
import { SubscriptionEntitlementQuery } from "@/convex/query.config";
import { combinedSlug } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
	const { profileName, entitlement } = await SubscriptionEntitlementQuery();

	// if (!entitlement._valueJSON) {
	// 	// TODO: Remove billing hardcoded path
	// 	// redirect(`/billing/${combinedSlug(profileName!)}`);
	// 	redirect(`/dashboard/${combinedSlug(profileName!)}`);
	// }

	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
