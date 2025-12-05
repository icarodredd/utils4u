export default function Generator({ name }: { name: string }) {
  return (
    <main className="mt-4">
      <h2 className="scroll-m-20 pb-4 text-3xl font-extrabold tracking-tight first:mt-0 text-center">
        Gerador de {name}
      </h2>
    </main>
  );
}
