import Divider from "@/components/Divider";
import Home from "./sections/Home";
import Venue from "./sections/Venue";
import Accommodations from "./sections/Accommodations";
import FaqPage from "./sections/Faq";

export default function Page() {
  return (
    <>
      <Home />
      <Divider />
      <Venue />
      <Divider />
      <Accommodations />
      <Divider />
      <FaqPage />
    </>
  );
}
