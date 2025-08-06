/* レイアウトのcssなどをここの階層より以下に反映させたい場合、ここに書く */

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-100 min-h-screen">
      {children}
    </div>
  );
}