"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
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

export default function Login() {
    const { login } = useAuthStore();
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            setError("Please fill out all fields");
            return;
        }

        setIsLoading(true);
        setError("");

        const loginResponse = await login(email.toString(), password.toString());
        if (loginResponse.error) {
            setError(loginResponse.error.message);
        }

        setIsLoading(false);
    };

    return (
        <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Login to Fix-Overflow
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Welcome back! Please enter your details below.
                <br /> Don&apos;t have an account?{" "}
                <Link href="/register" className="text-blue-500 hover:underline">
                    Register
                </Link>
            </p>

            {error && (
                <p className="mt-4 text-center text-sm text-red-500 dark:text-red-400">{error}</p>
            )}
            <form className="mt-6" onSubmit={handleSubmit}>
                <LabelInputContainer>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        className="text-gray-900 dark:text-gray-100 dark:bg-gray-800"
                        id="email"
                        name="email"
                        placeholder="example@domain.com"
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
                    {isLoading ? "Logging in..." : "Log in"}
                </button>
            </form>
        </div>
    );
}
