import { projectsData } from "@/data/projects"
import ProjectPageClient from "./ProjectPageClient"

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const project = projectsData[slug]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Proyecto no encontrado</h1>
          <p className="text-gray-600">El proyecto que buscas no existe.</p>
        </div>
      </div>
    )
  }

  return <ProjectPageClient slug={slug} project={project} />
}
