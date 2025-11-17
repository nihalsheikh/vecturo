// Making DAL: Data Access Layer in here
// redirect user based on subscription

import { SubscriptionEntitlementQuery } from "@/convex/query.config";
import { combinedSlug } from "@/lib/utils";
import { redirect } from "next/navigation";

// TODO: Remove billing hardcoded path later
const Page = async () => {
	const { entitlement, profileName } = await SubscriptionEntitlementQuery();

	// if user subscription has expired or no subscription -> send to billing page
	if (!entitlement._valueJSON) {
		// redirect(`/billing/${combinedSlug(profileName!)}`);
		redirect(`/dashboard/${combinedSlug(profileName!)}`);
	}

	// if user subscription is active -> send to dashboard
	redirect(`/dashboard/${combinedSlug(profileName!)}`);
};

export default Page;
