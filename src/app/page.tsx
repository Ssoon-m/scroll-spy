import Image from "next/image";
import { Inter } from "next/font/google";
import BasicLayout from "@/components/layouts/BasicLayout";
import PageClient from "./PageClient";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BasicLayout>
      <PageClient />
    </BasicLayout>
  );
}
