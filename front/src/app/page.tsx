import { Presentation } from "@/components/presentation";
import Role from "@/components/role";
import { roleArray } from "@/utils/arrays";
export default function Home() {
  const roles = roleArray
  return (
    <div>
      <Presentation/>
      <div className="sectionContainer flex flex-row justify-between pt-16">
        {roles.map((role) => (
          <Role key={role.index} title={role.title} description={role.description} />
        ))}
      </div>
    </div>
  );
}
