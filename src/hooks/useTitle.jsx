import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - MyBook`;
  }, [title]);
};

export default useTitle;
