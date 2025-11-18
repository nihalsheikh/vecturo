"use client";

import { ReactNode, useMemo } from "react"; // add this when removing old comment -> useRef
import { makeStore, RootState } from "./store";
import { Provider } from "react-redux";

const ReduxProvider = ({
	children,
	preloadedState,
}: {
	children: ReactNode;
	preloadedState: Partial<RootState>;
}) => {
	// const storeRef = useRef(makeStore(preloadedState)); // old code
	const store = useMemo(() => makeStore(preloadedState), [preloadedState]); // Coderabbit suggestion implementing here

	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
