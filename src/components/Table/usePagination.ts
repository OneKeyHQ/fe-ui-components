import { useMemo, useState } from "react";

export function usePagination<T>(data: T[], pageSize = 3) {
  const [from, setFrom] = useState(0);

  const total = useMemo(() => data.length, [data]);
  const to = useMemo(() => Math.min(total, from + pageSize), [
    total,
    from,
    pageSize,
  ]);

  const paginatedData = useMemo(() => {
    return data.slice(from, from + pageSize);
  }, [from, data, pageSize]);

  const onPrevClick = () => setFrom((val) => Math.max(0, val - pageSize));
  const onNextClick = () => setFrom((val) => Math.min(total, val + pageSize));

  return { to, from, total, paginatedData, onPrevClick, onNextClick };
}
