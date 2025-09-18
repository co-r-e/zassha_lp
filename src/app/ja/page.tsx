import { LandingPage } from "../landing-page";
import { commonMetadata } from "@/lib/seo";

export const metadata = commonMetadata("ja");

export default function Page() {
  return <LandingPage locale="ja" />;
}
