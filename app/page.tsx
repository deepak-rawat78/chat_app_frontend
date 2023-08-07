import Link from "next/link";

export default function Home() {
	return (
		<section>
			<Link href="/login">
				<h3 className="text-3xl font-bold underline">Go to login</h3>
			</Link>
		</section>
	);
}
