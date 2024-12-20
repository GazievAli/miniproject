import Link from "next/link";

export default function About () {
    return (
        <main>
            <h1 className="text-3xl">About Page</h1>
            <Link href={"./"}><p className="text-sm">Go to Main Page</p></Link>
        </main>
    )
}