// Generated by Melange

import * as Curry from "melange/lib/es6/curry.mjs";
import * as React from "react";
import * as Belt_Array from "melange/lib/es6/belt_Array.mjs";
import * as React$1 from "@headlessui/react";
import * as ThemeSwitchProvider from "../providers/ThemeSwitchProvider.js";

var themeList = [
  {
    category: "gray",
    themes: [
      {
        color: "#000000",
        name: "dark"
      },
      {
        color: "#94A3B8",
        name: "theme-slate"
      },
      {
        color: "#A3A3A3",
        name: "theme-neutral"
      },
      {
        color: "#cccccc",
        name: "theme-lightgray"
      }
    ]
  },
  {
    category: "rose",
    themes: [
      {
        color: "#FB7185",
        name: "theme-rose"
      },
      {
        color: "#F472B6",
        name: "theme-pink"
      },
      {
        color: "#ff9494",
        name: "theme-monalisa"
      },
      {
        color: "#cf9068",
        name: "theme-coffee"
      }
    ]
  },
  {
    category: "orange",
    themes: [
      {
        color: "#FB923C",
        name: "theme-orange"
      },
      {
        color: "#b2ad55",
        name: "theme-olive"
      },
      {
        color: "#FACC15",
        name: "theme-yellow"
      },
      {
        color: "#e8e121",
        name: "theme-sunflower"
      }
    ]
  },
  {
    category: "green",
    themes: [
      {
        color: "#4ADE80",
        name: "theme-green"
      },
      {
        color: "#34D399",
        name: "theme-emerald"
      },
      {
        color: "#2DD4BF",
        name: "theme-teal"
      },
      {
        color: "#A3E635",
        name: "theme-lime"
      }
    ]
  },
  {
    category: "blue",
    themes: [
      {
        color: "#60A5FA",
        name: "theme-blue"
      },
      {
        color: "#38BDF8",
        name: "theme-sky"
      },
      {
        color: "#22D3EE",
        name: "theme-cyan"
      },
      {
        color: "#a2b3d7",
        name: "theme-polo"
      }
    ]
  },
  {
    category: "indigo",
    themes: [
      {
        color: "#818CF8",
        name: "theme-indigo"
      },
      {
        color: "#A78BFA",
        name: "theme-violet"
      },
      {
        color: "#C084FC",
        name: "theme-purple"
      },
      {
        color: "#E879F9",
        name: "theme-fuchsia"
      }
    ]
  }
];

function ThemeMenu$ColorButton(Props) {
  var color = Props.color;
  var theme = Props.theme;
  var onClick = Props.onClick;
  return React.cloneElement(React.createElement("button", {
                  "aria-label": "color",
                  className: "flex h-8 w-8 items-center justify-center rounded-full p-1 shadow shadow-500 hover:ring-2 hover:ring-slate-300 focus:shadow-600 focus:outline-none dark:shadow-xl dark:shadow-gray-800 md:h-6 md:w-6",
                  style: {
                    backgroundColor: color
                  },
                  type: "button",
                  onClick: onClick
                }), {
              "data-theme": theme
            });
}

var ColorButton = {
  make: ThemeMenu$ColorButton
};

function ThemeMenu(Props) {
  var setTheme = React.useContext(ThemeSwitchProvider.themeSwitchContext);
  var clickHandler = React.useCallback((function (e) {
          Curry._1(setTheme, e.target.getAttribute("data-theme"));
        }), [setTheme]);
  return React.createElement(React$1.Menu, {
              children: (function (param) {
                  return React.createElement(React.Fragment, undefined, React.createElement(React$1.Menu.Button, {
                                  children: React.createElement("svg", {
                                        className: "self-center w-5 h-5 text-900 dark:text-white",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }, React.createElement("path", {
                                            d: "M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                          })),
                                  className: "flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-200 text-700 outline-none ring-0 saturate-150 hover:bg-400 hover:text-white dark:border-[1px] dark:border-slate-400 dark:bg-slate-400 dark:hover:bg-slate-700"
                                }), React.createElement(React$1.Menu.Items, {
                                  as_: "div",
                                  children: Belt_Array.map(themeList, (function (param) {
                                          return React.createElement("div", {
                                                      key: param.category,
                                                      className: "z-10 flex items-center justify-center bg-300/80 gap-[1rem]"
                                                    }, Belt_Array.map(param.themes, (function (param) {
                                                            var name = param.name;
                                                            var color = param.color;
                                                            return React.createElement(React$1.Menu.Item, {
                                                                        as_: "div",
                                                                        children: (function (param) {
                                                                            return React.createElement(ThemeMenu$ColorButton, {
                                                                                        color: color,
                                                                                        theme: name,
                                                                                        onClick: clickHandler
                                                                                      });
                                                                          }),
                                                                        className: "flex flex-row items-center justify-center gap-2 p-1",
                                                                        key: name
                                                                      });
                                                          })));
                                        })),
                                  className: "absolute right-1 top-6 mt-3 flex w-[12rem] origin-top-right flex-col rounded bg-300 shadow-md border-[1px] border-200 focus:outline-none dark:border-[1px] dark:border-slate-500 dark:bg-slate-600 md:w-40 gap-[1rem] p-2"
                                }));
                }),
              className: "relative z-50 flex items-center justify-center text-left"
            });
}

var make = ThemeMenu;

export {
  themeList ,
  ColorButton ,
  make ,
}
/* react Not a pure module */
