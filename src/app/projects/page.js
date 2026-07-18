import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../_components/site-header";
import SiteShell from "../_components/site-shell";
import { cormorant } from "../_components/brand-fonts";
import { client } from "../../lib/sanity";

async function getAllProjects() {
  return client.fetch(
    `*[_type == "project"] | order(year desc) {
      _id, title, year, location, description,
      "images": images[] { "url": asset->url, caption }
    }`
  );
}

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-28">
        <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-12 sm:px-10">
          <div className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#004874]/60">Projects</p>
            <h1 className={`${cormorant.className} text-4xl font-semibold text-[#0D1B2A] sm:text-5xl`}>
              Our Projects
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[#4A6274]">
              A selection of installations and deployments we have supported across Thailand.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10">
          {projects.length === 0 ? (
            <div className="rounded-3xl border border-white/70 bg-white/80 p-12 text-center">
              <p className="text-[#4A6274]">No projects yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project._id}
                  className="group rounded-3xl border border-white/70 bg-white/80 overflow-hidden shadow-[0_12px_32px_rgba(0,72,116,0.09)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,72,116,0.15)] animate-fade-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {project.images && project.images[0] ? (
                    <div className="relative h-48 w-full overflow-hidden bg-[#004874]/5">
                      <Image
                        src={project.images[0].url}
                        alt={project.images[0].caption || project.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex h-48 w-full items-center justify-center bg-[#004874]/5">
                      <span className="text-[10px] uppercase tracking-widest text-[#004874]/30">No image</span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8A96E]">
                      {project.year && <span>{project.year}</span>}
                      {project.year && project.location && <span>·</span>}
                      {project.location && <span>{project.location}</span>}
                    </div>
                    <h3 className={`${cormorant.className} mt-2 text-xl font-semibold text-[#0D1B2A]`}>{project.title}</h3>
                    {project.description && (
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#4A6274]">{project.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </SiteShell>
  );
}
