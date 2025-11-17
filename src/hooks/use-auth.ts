import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const signInSchema = z.object({
	email: z.email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInData = z.infer<typeof signInSchema>;

const signUpSchema = z.object({
	firstName: z.string().min(2, "First name must be at least 2 characters"),
	lastName: z.string().min(2, "Last name must be at least 2 characters"),
	email: z.email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignUpData = z.infer<typeof signUpSchema>;

export const useAuth = () => {
	const { signIn, signOut } = useAuthActions();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	// validate form
	const signInForm = useForm<SignInData>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const signUpForm = useForm<SignUpData>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
	});

	// handlers for "sign-in", "sign-up" and "sign-out"
	const handleSignIn = async (data: SignInData) => {
		setIsLoading(true);

		try {
			await signIn("password", {
				email: data.email,
				password: data.password,
				flow: "signIn",
			});

			// redirect to "/dashboard" when successfull
			router.push("/dashboard");
		} catch (error) {
			console.error("Sign-in Error:", error);
			signInForm.setError("password", {
				message: "Invalid email or pasword",
			});
			toast.error("Invalid email or password"); // TODO: signIn Error Toast: remove if not working
		} finally {
			setIsLoading(false);
		}
	};

	const handleSignUp = async (data: SignUpData) => {
		setIsLoading(true);

		try {
			await signIn("password", {
				email: data.email,
				password: data.password,
				name: `${data.firstName} ${data.lastName}`,
				flow: "signUp",
			});

			// redirect to "/dassboard" after successfull signUp
			router.push("/dashboard");
		} catch (error) {
			console.error("Sign-up Error:", error);
			signUpForm.setError("root", {
				message: "Failed to create account. Email may already exist.",
			});
			toast.error("Failed to create account. Email already exist."); // TODO: signUp Error Toast: remoove if not working
		} finally {
			setIsLoading(false);
		}
	};

	const handleSignOut = async () => {
		try {
			await signOut();

			router.push("/");
		} catch (error) {
			console.error("Sign-out Error:", error);
		}
	};

	return {
		signInForm,
		signUpForm,
		handleSignIn,
		handleSignUp,
		handleSignOut,
		isLoading,
	};
};
