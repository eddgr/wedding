import Button from "@/components/Button";

export default function Rspv() {
  return (
    <div id="rsvp" className="text-center">
      <Button
        href="https://docs.google.com/forms/d/e/1FAIpQLSexi1ygLEJ436agoeJfkVus5KSLInBj0-vZuDaZ6LcX2TZQ2w/viewform?usp=header"
        className={"rsvp"}
      >
        RSVP
      </Button>
      <p className="rsvp-text mx-2">
        Please respond by <u>November 26, 2025</u>.
      </p>
    </div>
  );
}
