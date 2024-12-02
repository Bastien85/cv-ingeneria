import { CgProfile } from "react-icons/cg";
import { FaPuzzlePiece, FaSuitcase } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

import { ItemType } from "../types/ItemType";

export const sidebarStructure: ItemType[] = [
    {
      icon: <CgProfile />,
      title: "Résumé de votre profile",
      content: "<h2><b>John Doe</b></h2>"
    },
    {
      title: "Liste des expériences professionnelles",
      icon: <FaSuitcase />,
      content: "<ul><li>Expérience n°1</li><li>Expérience n°2</li><li>Expérience n°3</li></ul>"
    },
    {
      title: "Détails sur votre parcours scolaire",
      icon: <MdSchool />,
      content: "<div>Ecole <b>Lorem Ipsum</b> - 2016/2021</div>"
    },
    {
      title: "Compétences techniques ou personnelles",
      icon: <FaPuzzlePiece />,
      content: "<div>Ingéniosité/Curiosité/<b>Créativité</b></div>"
    }
];