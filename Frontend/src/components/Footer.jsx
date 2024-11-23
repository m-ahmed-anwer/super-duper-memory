import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 text-center text-zinc-500 dark:text-zinc-400 py-8">
      <p className="text-sm">
        Crafted with care by{" "}
        <a
          href="https://ahmedanwer-dev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition-colors duration-200"
        >
          @ahmedanwer
        </a>
      </p>
      <p className="text-xs mt-2 text-zinc-400 dark:text-zinc-500">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
