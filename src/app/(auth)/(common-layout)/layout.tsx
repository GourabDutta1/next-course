export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html>
        <body>
          <h1>Sign In/Register Here</h1>
          {children}
        </body>
      </html>
    )
  }