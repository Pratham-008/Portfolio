import "./globals.css";

export const metadata = {
  title: "Protfolio",
  description: "My awesome portfolio",
  icons: {
    icon: "/My-favicon.png", // updated path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        <link
          rel="stylesheet"
          href="/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.css"
        />
      </head>
      <body className="text-zinc-900 dark:text-zinc-100 gap-3 max-w-xl mx-auto px-4 py-4 min-h-svh flex flex-col">
        {children}
      </body>
    </html>
  );
}
