import Profile from "@/components/image";
import Role from "@/components/role";
import { roleArray } from "@/utils/arrays";
import Link from "next/link";
export default function Home() {
  const roles = roleArray
  return (
    <div>
      <div className="sectionContainer grid grid-cols-2">
        <div className="flex flex-col gap-6 items-start justify-center">
          <h1 className="h1 text-white" >Cesar E. Zeballos</h1>
          <h2 className="body text-white">Full Stack Developer | UX/UI Designer | Business Administrator</h2>
          <p className="body text-white">My focus is on understanding user needs and translating them into visually appealing and technically sound solutions.</p>
          <div className="flex flex-row gap-4">
            <Link href="/portfolio" className="buttonSecondary">Discover my work</Link>
            <Link href="/contact" className="buttonPrimary">Connect with me</Link>
          </div>
        </div>
        <Profile imagen="/profile.jpg"/>
      </div>
      <div className="sectionContainer flex flex-row justify-between pt-16">
        {roles.map((role) => (
          <Role key={role.index} title={role.title} description={role.description} />
        ))}
      </div>
    </div>
  );
}
