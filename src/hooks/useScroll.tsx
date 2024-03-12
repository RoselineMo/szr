import {useState, useEffect} from "react";
export function useScroll() {
  const [prev, setPrev] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const current = window.scrollY;

    if (current > prev) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrev(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }),
    [];

  return visible;
}
