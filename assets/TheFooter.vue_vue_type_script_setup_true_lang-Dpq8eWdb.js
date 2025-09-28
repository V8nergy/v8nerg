import { d as s, c as o, o as n, e as t } from "./app-ryyJCggE.js";
const r = {
    class: "w-full",
    relative: "",
    "z-2": "",
    flex: "",
    "items-center": "",
    "justify-end": "",
    "justify-center": "",
    "text-xl": "",
    "space-y-10": "",
  },
  i = s({
    __name: "TheFooter",
    props: { main: { type: Boolean } },
    setup(a) {
      return (l, e) => (
        n(),
        o(
          "nav",
          r,
          e[0] ||
            (e[0] = [
              t(
                "div",
                {
                  class: "bottom-0",
                  absolute: "",
                  "left-0": "",
                  "w-full": "",
                  flex: "",
                  "items-center": "",
                  "justify-center": "",
                  "bg-white": "",
                  px7: "",
                  pb5: "",
                  pt7: "",
                  "dark:bg-cmblue": "",
                },
                [
                  t(
                    "div",
                    { "text-xs": "" },
                    " © Copyright 2024 CM Project Management – All Rights Reserved - "
                  ),
                ],
                -1
              ),
            ])
        )
      );
    },
  });
export { i as _ };
