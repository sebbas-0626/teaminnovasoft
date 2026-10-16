import { socialLinks } from "../../data/social";
import RefLink from "./RefLink";

export default function Social({ type }: { type: "social" | "publication" }) {
  const links = socialLinks.filter((item) => item.status === type);

  if (links.length === 0) return null;

  const className =
    "flex items-center border-b dark:border-zinc-800 border-zinc-200 group";

  return (
    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
      {links.map((value) =>
        value.url ? (
          <li key={value.id}>
            <RefLink href={value.url} className={className}>
              <value.icon
                className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                aria-hidden="true"
              />{" "}
              &nbsp;
              {value.name}
            </RefLink>
          </li>
        ) : (
          <li
            key={value.id}
            className={`${className} opacity-40 cursor-not-allowed select-none`}
            title={`Pendiente: agrega la URL de ${value.name} en app/data/social.ts`}
          >
            <value.icon
              className="flex-shrink-0 h-5 w-5 text-zinc-500"
              aria-hidden="true"
            />{" "}
            &nbsp;
            {value.name}
          </li>
        )
      )}
    </ul>
  );
}