export default function Footer() {
  return (
    <footer className="flex justify-between w-[972px] items-center text-[11px] opacity-30 mt-[12px]">
      <small className="text-[11px]">
        &copy; {new Date().toString().slice(11, 15)}. Copyright by Emmanuel
        Happiness
      </small>
      <p>
        Version <b>1.5</b>
      </p>
    </footer>
  );
}
