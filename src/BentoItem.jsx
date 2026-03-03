const BentoItem = ({ title, children, className }) => (
  <div className={`p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all ${className}`}>
    {title && <h3 className="text-sm font-medium text-zinc-500 mb-2">{title}</h3>}
    {children}
  </div>
);

const BentoGrid = () => (
  <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
    {/* Perfil / Sobre mí (Ocupa 2x2) */}
    <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-end">
      <h1 className="text-4xl font-bold">Hola, soy [Tu Nombre]</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">Fullstack Developer especializado en ecosistemas React y Node.js.</p>
    </BentoItem>

    {/* Proyectos Destacados (Ocupa 2x1) */}
    <BentoItem title="Proyecto Principal" className="md:col-span-2">
      <div className="flex justify-between items-center h-full">
        <span className="text-xl font-semibold">E-commerce App</span>
        <div className="bg-blue-500 w-12 h-12 rounded-full" />
      </div>
    </BentoItem>

    {/* Skills (Ocupa 1x2) */}
    <BentoItem title="Tech Stack" className="md:row-span-2">
      <div className="flex flex-wrap gap-2 mt-4">
        {['React', 'Next.js', 'Node', 'PostgreSQL', 'AWS'].map(skill => (
          <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
            {skill}
          </span>
        ))}
      </div>
    </BentoItem>

    {/* Contacto/LinkedIn (Ocupa 1x1) */}
    <BentoItem className="flex items-center justify-center bg-blue-600 text-white border-none">
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>
    </BentoItem>

    {/* Email (Ocupa 1x1) */}
    <BentoItem className="flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer">
      <span>Email</span>
    </BentoItem>
  </div>
);