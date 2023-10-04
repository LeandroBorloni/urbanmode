"use client"

import { useRouter } from "next/navigation"
import { serverLogout } from "@/actions/user"

export default function NavBar() {
    const { push } = useRouter()

    function handleLogout() {
        serverLogout()
        push("/login")
    }

    return (
        <nav className="flex p-4 bg-yellow-500">
            <ul className="flex gap-20">
                <li>
                    <a href="#">
                        <h1><strong>UrbanMode</strong></h1>
                    </a>
                </li>
                <li>
                    <a href="#">
                        Camisetas
                    </a>
                </li>
                <li>
                    <a href="#">
                        Calças
                    </a>
                </li>
                <li>
                    <a href="#">
                        Jaquetas
                    </a>
                </li>
            </ul>
        </nav>
    )
}