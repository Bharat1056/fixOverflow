"use client";
import React from "react";
import { useAuthStore } from "@/store/Auth";
import slugify from "@/utils/slugify";
import Link from "next/link";

export default function Header() {
    const { user } = useAuthStore();

    return (
        <header className="flex h-16 w-full items-center justify-between bg-gray-900 text-gray-100 px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <MountainIcon className="h-6 w-6 text-white" />
                <span className="text-lg font-bold">Overflow</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Link
                    href="/"
                    className="text-sm font-medium transition-colors hover:text-white"
                    prefetch={false}
                >
                    Home
                </Link>
                <Link
                    href="/questions"
                    className="text-sm font-medium transition-colors hover:text-white"
                    prefetch={false}
                >
                    Questions
                </Link>
                {user && (
                    <Link
                        href={`/users/${user.$id}/${slugify(user.name)}`}
                        className="text-sm font-medium transition-colors hover:text-white"
                        prefetch={false}
                    >
                        Profile
                    </Link>
                )}
                {!user && (
                    <>
                        <Link
                            href="/login"
                            className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                            prefetch={false}
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="border border-white px-4 py-2 rounded text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors"
                            prefetch={false}
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </nav>
            <button className="md:hidden text-white">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
            </button>
        </header>
    );
}

function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}
