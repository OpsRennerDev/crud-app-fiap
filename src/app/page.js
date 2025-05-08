export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 text-center">
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold text-primary">Bem vindo!</h1>
        <p className="mt-4 text-lg text-base-content">
          Esta é uma aplicação <span className="font-semibold">NextJS</span> com <span className="text-secondary font-semibold">DaisyUI</span>
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/login" className="btn btn-primary">Login</a>
          <a href="/register" className="btn btn-secondary">Cadastro</a>
        </div>
      </div>
    </main>
  );
}
