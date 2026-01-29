import Divider from "@/components/Divider";
import Home from "./sections/Home";
import Venue from "./sections/Venue";
import RegistryPage from "./sections/Registry";
import FaqPage from "./sections/Faq";

export default function Page() {
  return (
    <>
      <Home />
      <Divider />
      <Venue />
      <Divider />
      <RegistryPage />
      <Divider />
      <FaqPage />
    </>
  );
}
