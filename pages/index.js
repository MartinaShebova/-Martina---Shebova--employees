import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import EmployeesWorkedTogetherWidget from "@/components/employeesWorkedTogetherWidget";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Employee Pair Project Duration Finder</title>
				<meta name="description" content="Employee Pair Project Duration Finder task for Sirma" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<h2 className={styles.heading}>Pair of employees who have worked together</h2>
				<EmployeesWorkedTogetherWidget />
			</main>
		</>
	);
}
