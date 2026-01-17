export const metadata = {
  title: 'EnviroVision Studio',
  description: 'Content management for EnviroVision',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
