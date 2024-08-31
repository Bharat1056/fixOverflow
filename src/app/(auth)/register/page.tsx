"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useAuthStore } from "@/store/Auth";
import Link from "next/link";

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("flex flex-col space-y-2", className)}>{children}</div>;
};

export default function Register() {
    const { login, createAccount } = useAuthStore();
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const password = formData.get("password");

        if (!firstname || !lastname || !email || !password) {
            setError("Please fill out all fields");
            return;
        }

        setIsLoading(true);
        setError("");

        const response = await createAccount(
            `${firstname} ${lastname}`,
            email.toString(),
            password.toString()
        );

        if (response.error) {
            setError(response.error.message);
        } else {
            const loginResponse = await login(email.toString(), password.toString());
            if (loginResponse.error) {
                setError(loginResponse.error.message);
            }
        }

        setIsLoading(false);
    };

    return (
        <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Welcome to Riverflow
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Sign up with Riverflow if you don&apos;t have an account.
                <br /> Already have an account?{" "}
                <Link href="/login" className="text-blue-500 hover:underline">
                    Login
                </Link>
            </p>

            {error && (
                <p className="mt-4 text-center text-sm text-red-500 dark:text-red-400">{error}</p>
            )}

            <form className="mt-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input
                            className="text-gray-900 dark:text-gray-100 dark:bg-gray-800"
                            id="firstname"
                            name="firstname"
                            placeholder="Tyler"
                            type="text"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input
                            className="text-gray-900 dark:text-gray-100 dark:bg-gray-800"
                            id="lastname"
                            name="lastname"
                            placeholder="Durden"
                            type="text"
                        />
                    </LabelInputContainer>
                </div>

                <LabelInputContainer className="mt-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        className="text-gray-900 dark:text-gray-100 dark:bg-gray-800"
                        id="email"
                        name="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mt-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        className="text-gray-900 dark:text-gray-100 dark:bg-gray-800"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        type="password"
                    />
                </LabelInputContainer>

                <button
                    className={cn(
                        "mt-6 w-full rounded-lg bg-gray-800 text-white py-2 font-medium transition-colors",
                        isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
                    )}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Signing up..." : "Sign up"}
                </button>

            </form>
        </div>
    );
}
