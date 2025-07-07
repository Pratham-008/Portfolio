export default function ProjectTemp(prop) {
  const { title, techno, desc , gitlink,livelink } = prop;
  return (
    <div className="flex flex-col gap-3 hover:translate-x-1 transition-all duration-300 ease-out">
      <div className="flex justify-between items-center text-sm font-bold py-3">
        <span>{title}</span>
        <div className="flex gap-3 items-center">
          <span className="text-zinc-400 hover:text-black cursor-pointer dark:hover:text-white">
           <a href={gitlink} target="_blank"> Github <i className="fa fa-external-link" aria-hidden="true"></i></a>
          </span>
          {livelink && <span className="text-zinc-400 hover:text-black cursor-pointer dark:hover:text-white">
            <a href={livelink} target="_blank">View <i className="fa fa-external-link " aria-hidden="true"></i></a>
          </span>}
        </div>
      </div>
      <div className="text-xs flex flex-col gap-3">
        <p className="text-zinc-500 dark:text-zinc-400">{desc}</p>
        <div className="text-zinc-400 dark:text-zinc-500">{techno}</div>
      </div>
    </div>
  );
}
