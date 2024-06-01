import printOut from "@/functions/printOut";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  printOut(`Home Layout Begin`);
  printOut(`Home Layout End`);
  return children

}
