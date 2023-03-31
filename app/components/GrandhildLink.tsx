export function GrandhildLink({data}: any) {
  return (
    <ul className="mt-[10px]">
      {data.map((item: any) => {
        return (
          <li key={item.title} className="font-normal text-[12px]">
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}
