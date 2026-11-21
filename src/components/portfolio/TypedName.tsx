import { useEffect, useState } from "react";

/** Types the name letter by letter on load, starting from the first letter. */
export function TypedName({ first, last }: { first: string; last: string }) {
  const total = first.length + last.length;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(total);
      return;
    }
    let n = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      n += 1;
      setCount(n);
      if (n < total) timer = setTimeout(tick, n === first.length ? 260 : 95);
    };
    timer = setTimeout(tick, 250);
    return () => clearTimeout(timer);
  }, [first.length, total]);

  const typedFirst = first.slice(0, count);
  const typedLast = last.slice(0, Math.max(0, count - first.length));
  const onFirstLine = count < first.length;
  const caret = (
    <span
      aria-hidden="true"
      className="caret-blink ml-1 inline-block h-[0.85em] w-[0.08em] translate-y-[0.08em] rounded-full bg-primary align-baseline"
    />
  );

  return (
    <span className="relative block">
      <span className="sr-only">
        {first} {last}
      </span>
      {/* Invisible full name reserves the space so the layout never jumps while typing. */}
      <span aria-hidden="true" className="invisible block">
        {first}
        <br />
        {last}
      </span>
      <span aria-hidden="true" className="absolute inset-0 block">
        <span className="block">
          {typedFirst}
          {onFirstLine && caret}
        </span>
        <span className="block text-muted-foreground">
          {typedLast}
          {!onFirstLine && caret}
        </span>
      </span>
    </span>
  );
}
