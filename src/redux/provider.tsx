"use client";

import { ReactNode, useRef } from "react";
import { makeStore, RootState, AppStore } from "./store";
import { Provider } from "react-redux";

const ReduxProvider = ({
	children,
	preloadedState,
}: {
	children: ReactNode;
	preloadedState: Partial<RootState>;
}) => {
	const storeRef = useRef<AppStore | null>(null);
	if (!storeRef.current) {
		storeRef.current = makeStore(preloadedState);
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
