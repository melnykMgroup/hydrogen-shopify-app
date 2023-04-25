import {GrandhildLink} from './GrandhildLink';

export function ChildLink({data}: any) {
  return (
    <ul className="visually-hidden group-hover/nav-link-item:visible p-[20px] cursor-auto flex">
      {data.map((item: any) => {
        return (
          <li key={item.id} className="min-w-[200px] font-bold">
            <a href={item.url}>{item.title}</a>
            {item.items.length && <GrandhildLink data={item.items} />}
          </li>
        );
      })}
    </ul>
  );
}
