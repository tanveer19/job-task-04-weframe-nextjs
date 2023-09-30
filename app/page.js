import Image from "next/image";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Sidebar></Sidebar>
    </div>
  );
}
