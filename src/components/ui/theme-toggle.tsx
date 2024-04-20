"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = React.useState("system");

  const handleThemeChange = (theme: React.SetStateAction<string>) => {
    setSelectedTheme(theme);
    setTheme(theme);
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Theme
      </p>
      <p className="text-[0.8rem] text-muted-foreground">
        Select the theme for the dashboard.
      </p>
      <div
        role="radiogroup"
        aria-required="false"
        dir="ltr"
        className="grid max-w-md grid-cols-2 gap-8 pt-2"
        style={{ outline: "none" }}
      >
        <div className="space-y-2">
          <label
            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:cursor-pointer`}
            htmlFor="light-form-item"
          >
            <button
              type="button"
              role="radio"
              aria-checked={selectedTheme === "light"}
              data-state={selectedTheme === "light" ? "checked" : "unchecked"}
              value="light"
              className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sr-only`}
              id="light-form-item"
              aria-describedby="light-form-item-description"
              tabIndex={selectedTheme === "light" ? 0 : -1}
              onClick={() => handleThemeChange("light")}
            >
              <span
                data-state={selectedTheme === "light" ? "checked" : "unchecked"}
                className="flex items-center justify-center"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 fill-primary"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
            <input
              aria-hidden="true"
              tabIndex={-1}
              type="radio"
              value="light"
              style={{
                transform: "translateX(-100%)",
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: "0px",
                width: "16px",
                height: "16px",
              }}
              defaultChecked={selectedTheme === "light" ? true : false}
            />
            <div className="items-center rounded-md border-2 border-muted bg-popover border-black p-1 hover:bg-accent hover:text-accent-foreground">
              <div className="space-y-2 rounded-sm bg-[#c0c4cb] p-2">
                <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-[#c0c4cb]"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-[#c0c4cb]"></div>
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-[#c0c4cb]"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-[#c0c4cb]"></div>
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-[#c0c4cb]"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-[#c0c4cb]"></div>
                </div>
              </div>
            </div>
            <span className="block w-full p-2 text-center font-normal">
              Light
            </span>
          </label>
        </div>
        <div className="space-y-2">
          <label
            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:cursor-pointer`}
            htmlFor="dark-form-item"
          >
            <button
              type="button"
              role="radio"
              aria-checked={selectedTheme === "dark"}
              data-state={selectedTheme === "dark" ? "checked" : "unchecked"}
              value="dark"
              className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sr-only`}
              id="dark-form-item"
              aria-describedby="dark-form-item-description"
              tabIndex={selectedTheme === "dark" ? 0 : -1}
              onClick={() => handleThemeChange("dark")}
            ></button>
            <input
              aria-hidden="true"
              tabIndex={-1}
              type="radio"
              value="dark"
              style={{
                transform: "translateX(-100%)",
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: "0px",
                width: "16px",
                height: "16px",
              }}
              defaultChecked={selectedTheme === "dark" ? true : false}
            />
            <div className="items-center rounded-md border-2 border-muted bg-popover border-white p-1 hover:bg-accent hover:text-accent-foreground">
              <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-slate-400"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                  <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                </div>
              </div>
            </div>
            <span className="block w-full p-2 text-center font-normal">
              Dark
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
