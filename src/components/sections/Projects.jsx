import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FilterPills from "@/components/ui/FilterPills";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  // FilterPills expects { id, label }
  const options = useMemo(
    () => projectCategories.map((c) => ({ id: c, label: c })),
    []
  );

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <Section id="projects">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader index="04" eyebrow="Selected work" title="Things I've shipped." lead="A few projects, each written up as a short case study." />
        <FilterPills
          options={options}
          value={filter}
          onChange={setFilter}
          layoutId="project-filter"
          ariaLabel="Filter projects by category"
        />
      </div>

      <motion.div layout className="mt-14 grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full rounded-xl2 border border-dashed border-line p-12 text-center"
            >
              <p className="text-lg text-primary">No projects found.</p>
              <p className="mt-2 text-secondary">
                Try selecting another category.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
