import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";
import { date } from "astro:schema";

const personne = defineCollection({
  loader: glob({ base: "src/data/personne", pattern: "**/*.md" }),
  schema: z.object({
    nom: z.string(),
    lieuNaissance: z.string(),
    dateNaissance: z.date(),
    dateDeces: z.date().optional(),
    profession: z
      .array(z.enum(["acteur", "réalisateur", "scénariste", "compositeur"]))
      .optional(),
  }),
});

const film = defineCollection({
    loader: glob({ base: "src/data/film", pattern: "**/*.md" }),
    schema: z.object({
        titre: z.string(),
        dateSortie: z.date(),
        realisateur: reference("personne").optional(),
    }),
});

export const collections = { personne, film };
