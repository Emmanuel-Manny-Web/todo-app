type Props = {
  name: string;
  type?: string;
  onClick?: () => Promise<void>;
}; 

export default function Button({ onClick, name, type }: Props) {
  return (
    <button
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${type === 'secondary' ? "opacity-[85%]" : ""}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
