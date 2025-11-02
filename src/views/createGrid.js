import { createModal } from "../components/createModal.js";
import { genres } from "../data.js"; 

export const createGrid = () => {
  const container = document.getElementById("podcastGrid");

  return {
    render(podcastList) {
      container.innerHTML = "";

      podcastList.forEach((podcast) => {
        const preview = document.createElement("podcast-preview");

        //  Convert genre IDs to names
        const genreNames = podcast.genres
          .map((id) => genres.find((g) => g.id == id)?.title || "Unknown")
          .join(", ");

        // Set attributes for the custom component
        preview.setAttribute("cover", podcast.image);
        preview.setAttribute("title", podcast.title);
        preview.setAttribute("genres", genreNames);
        preview.setAttribute("seasons", podcast.seasons);
        preview.setAttribute("updated", podcast.updated);

        // Open modal when clicked
        preview.addEventListener("podcastSelected", () => {
          createModal.open(podcast);
        });

        container.appendChild(preview);
      });
    },
  };
};
