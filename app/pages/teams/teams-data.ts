export type TeamData = Array<{ header: string; values: string[] }>;

export const woodElfData: TeamData = [
  {
    header: "POS",
    values: [
      "Elfo Silvano Línea",
      "Elfo Silvano Thrower",
      "Elfo Silvano Catcher",
      "Wardancer",
      "Loren Forest Treeman",
      "ReRolls",
    ],
  },
  {
    header: "Min-Max",
    values: ["0-12", "0-2", "0-4", "0-2", "0-1", "0-8"],
  },

  {
    header: "Coste",
    values: ["70K", "95K", "90K", "125K", "120K", "50K"],
  },
  {
    header: "Movimiento",
    values: ["7", "7", "8", "8", "2"],
  },
  {
    header: "Fuerza",
    values: ["3", "3", "2", "3", "6"],
  },
  {
    header: "Agilidad",
    values: ["2+", "2+", "2+", "2+", "5+"],
  },
  {
    header: "Pase",
    values: ["4+", "2+", "4+", "4+", "5+"],
  },
  {
    header: "Armadura",
    values: ["8+", "8+", "8+", "8+", "11+"],
  },
  {
    header: "Habilidades",
    values: [
      "-",
      "Pasar",
      "Atrapar,Esquivar",
      "Placar,Esquivar,Saltar",
      "Solitario(4+),Golpe Mortifero (+1),Mantenerse Firme,Brazo Fuerte,Echar Raíces,Cabeza Dura,Lanzar Compañero",
    ],
  },
  {
    header: "Primaria",
    values: ["AG", "AGP", "AG", "AG", "F"],
  },
  {
    header: "Secundaria",
    values: ["F", "F", "PF", "PF", "AG"],
  },
];

export const ChaosDwarfData: TeamData = [
  {
    header: "POS",
    values: [
      "Hobgoblin",
      "Sneaky Stabba",
      "Enano del Caos",
      "FlameSmith",
      "Bull Centaur",
      "Minotaur",
      "ReRolls",
    ],
  },
  {
    header: "m-M",
    values: ["0-16", "0-2", "0-4", "0-2", "0-2", "0-1", "0-8"],
  },

  {
    header: "COS",
    values: ["40k", "70k", "70k", "80k", "130k", "150k", "70k"],
  },
  {
    header: "MV",
    values: ["6", "6", "4", "5", "6", "5", ""],
  },
  {
    header: "FU",
    values: ["3", "3", "3", "3", "4", "5", ""],
  },
  {
    header: "AG",
    values: ["3+", "3+", "4+", "4+", "4+", "4+", ""],
  },
  {
    header: "PS",
    values: ["4+", "5+", "6+", "6+", "6+", "-", ""],
  },
  {
    header: "AR",
    values: ["8+", "8+", "10+", "10+", "10+", "9+", ""],
  },
  {
    header: "HABS",
    values: [
      "-",
      "Perseguir,Apuñalar",
      "Placar,Cabeza Dura,Piel Férrea",
      "Aliento de Fuego,Cabeza Dura,Luchador,Presencia Perturbadora",
      "Esprintar,Pies Firmes,Cabeza Dura",
      "Furia,Cuernos,Ira Descontrolada,Solitario (4+),Golpe Mortífero (+1),Cabeza Dura",
      "",
    ],
  },
  {
    header: "PRI",
    values: ["G", "G", "GF", "GF", "GF", "F", ""],
  },
  {
    header: "SEC",
    values: ["AF", "AF", "AM", "AM", "AM", "AGM", ""],
  },
];

export const SkavenData: TeamData = [
  {
    header: "POS",
    values: [
      "Linerat",
      "Thrower",
      "Gutter Runner",
      "Blitzer",
      "Rat Ogre",
      "ReRolls",
    ],
  },
  {
    header: "m-M",
    values: ["0-16", "0-2", "0-4", "0-2", "0-1", "0-8"],
  },

  {
    header: "COS",
    values: ["50k", "85k", "85k", "90k", "150k", "50k"],
  },
  {
    header: "MV",
    values: ["7", "7", "9", "7", "6", ""],
  },
  {
    header: "FU",
    values: ["3", "3", "2", "3", "5", ""],
  },
  {
    header: "AG",
    values: ["3+", "3+", "2+", "3+", "4+", ""],
  },
  {
    header: "PS",
    values: ["4+", "2+", "4+", "5+", "-", ""],
  },
  {
    header: "AR",
    values: ["8+", "8+", "8+", "9+", "9+", ""],
  },
  {
    header: "HABS",
    values: [
      "-",
      "Manos Seguras,Pasar",
      "Esquivar",
      "Placar",
      "Animal Feroz,Cola Prensil,Furia,Golpe Mortifero(+1),Solitario (4+)",
      "",
    ],
  },
  {
    header: "PRI",
    values: ["G", "GP", "AG", "GS", "S"],
  },
  {
    header: "SEC",
    values: ["AMS", "AMS", "MPS", "AMP", "AGM"],
  },
];

export const ImperialData: TeamData = [
  {
    header: "POS",
    values: [
      "Retainer Lineman",
      "Thrower",
      "Noble Blitzer",
      "Bodyguards",
      "Ogre",
      "ReRolls",
    ],
  },
  {
    header: "m-M",
    values: ["0-12", "0-2", "0-2", "0-4", "0-1", "0-8"],
  },

  {
    header: "COS",
    values: ["45k", "75k", "105k", "90k", "140k", "70k"],
  },
  {
    header: "MV",
    values: ["6", "6", "7", "6", "5", ""],
  },
  {
    header: "FU",
    values: ["3", "3", "3", "3", "5", ""],
  },
  {
    header: "AG",
    values: ["4+", "3+", "3+", "3+", "4+", ""],
  },
  {
    header: "PS",
    values: ["4+", "3+", "4+", "4+", "5+", ""],
  },
  {
    header: "AR",
    values: ["8+", "9+", "9+", "9+", "10+", ""],
  },
  {
    header: "HABS",
    values: [
      "Zafarse",
      "Pasar,Pase En Carrera",
      "Placar,Atrapar",
      "Mantenerse Firme,Forcejeo",
      "Estúpido,Solitario (4+),Golpe Mortífero(+1),Cabeza Dura,Lanzar Compañero",
    ],
  },
  {
    header: "PRI",
    values: ["G", "GP", "AG", "GS", "S"],
  },
  {
    header: "SEC",
    values: ["AS", "AS", "PS", "A", "AG"],
  },
];

export const BlackOrcsData: TeamData = [
  {
    header: "POS",
    values: ["Goblin Bruiser", "Black Orc", "Troll Adiestrado", "ReRolls"],
  },
  {
    header: "m-M",
    values: ["0-12", "0-6", "0-1", "0-8"],
  },

  {
    header: "COS",
    values: ["45k", "90k", "115k", "60k"],
  },
  {
    header: "MV",
    values: ["6", "4", "4", ""],
  },
  {
    header: "FU",
    values: ["2", "4", "5", ""],
  },
  {
    header: "AG",
    values: ["3+", "4+", "5+", ""],
  },
  {
    header: "PS",
    values: ["4+", "4+", "5+", ""],
  },
  {
    header: "AR",
    values: ["8+", "10+", "10+", ""],
  },
  {
    header: "HABS",
    values: [
      "Esquivar,Humanoide Bala,Escurridizo,Cabeza Dura",
      "Luchador,Apartar",
      "Siempre Hambriento,Solitario (3+),Golpe Mortífero(+1),Proyectil Vómito,Realmente Estúpido,Regeneración,Lanzar Compañero",
      "",
    ],
  },
  {
    header: "PRI",
    values: ["A", "GS", "S", ""],
  },
  {
    header: "SEC",
    values: ["GPS", "AP", "AGP", ""],
  },
];

export const NorseData: TeamData = [
  {
    header: "POS",
    values: [
      "Linemen",
      "Beer Boar",
      "Berserker",
      "Vailkyrie",
      "Ulfwerener",
      "Yhetee",
      "ReRolls",
    ],
  },
  {
    header: "m-M",
    values: ["0-16", "0-2", "0-2", "0-2", "0-2", "0-1", "0-8"],
  },

  {
    header: "COS",
    values: ["50k", "20k", "90k", "95k", "105k", "140k", "60k", ""],
  },
  {
    header: "MV",
    values: ["6", "5", "6", "7", "6", "5", ""],
  },
  {
    header: "FU",
    values: ["3", "1", "3", "3", "4", "5", ""],
  },
  {
    header: "AG",
    values: ["3+", "3+", "3+", "3+", "4+", "4+", ""],
  },
  {
    header: "PS",
    values: ["4+", "-", "5+", "3+", "-", "-", ""],
  },
  {
    header: "AR",
    values: ["8+", "6+", "8+", "8+", "9+", "9+", ""],
  },
  {
    header: "HABS",
    values: [
      "Borracho,Cabeza Dura,Placar",
      "Esquivar,Sin Manos,Bebida Reconstituyente,Escurridizo,Canijo",
      "Placar,Furia,En Pie de un Salto",
      "Atrapar,Agallas,Pasar,Robar Balón",
      "Furia",
      "Garras,Presencia Perturbadora,Furia,Solitario(4+),Ira Descontrolada",
      "",
    ],
  },
  {
    header: "PRI",
    values: ["G", "-", "GS", "AGP", "GS", "S", ""],
  },
  {
    header: "SEC",
    values: ["APS", "A", "AP", "S", "A", "AG", ""],
  },
];

type Team = {
  name: string;
  image: any;
  data?: TeamData;
  hidden?: boolean;
};

const teams: Team[] = [
  {
    name: "Alianza del Viejo Mundo",
    hidden: true,
    image: require("../../../assets/images/teams/OldWorld-Alliance.webp"),
  },
  {
    name: "Altos Elfos",
    hidden: true,

    image: require("../../../assets/images/teams/High-Elf.webp"),
  },
  {
    name: "Amazonas",
    hidden: true,
    image: require("../../../assets/images/teams/Amazons.webp"),
  },
  {
    name: "Bretonia",
    hidden: true,
    image: require("../../../assets/images/teams/Bretonnie_Logo.webp"),
  },
  {
    name: "Demonios de Khorne",
    hidden: true,
    image: require("../../../assets/images/teams/daemons-of-khorne.webp"),
  },
  {
    name: "Elegidos del Caos",
    hidden: true,
    image: require("../../../assets/images/teams/Chaos.webp"),
  },
  {
    name: "Elfos Oscuros",
    hidden: true,
    image: require("../../../assets/images/teams/Dark-Elf.webp"),
  },
  {
    name: "Elfos Silvanos",
    image: require("../../../assets/images/teams/Wood-Elf.webp"),
    data: woodElfData,
  },
  {
    name: "Enanos",
    hidden: true,
    image: require("../../../assets/images/teams/Dwarf.webp"),
  },
  {
    name: "Enanos del Caos",
    image: require("../../../assets/images/teams/Chaos-Dwarf.webp"),
    data: ChaosDwarfData,
  },
  {
    name: "Gnomos",
    hidden: true,
    image: require("../../../assets/images/teams/Logo_Gnome.webp"),
  },
  {
    name: "Goblins",
    hidden: true,
    image: require("../../../assets/images/teams/Goblin.webp"),
  },
  {
    name: "Habitantes del Inframundo",
    hidden: true,
    image: require("../../../assets/images/teams/Underworld.webp"),
  },
  {
    name: "Halflings",
    hidden: true,
    image: require("../../../assets/images/teams/Halflings.webp"),
  },
  {
    name: "Hombres Lagarto",
    hidden: true,
    image: require("../../../assets/images/teams/Lizardmen.webp"),
  },
  {
    name: "Humanos",
    hidden: true,
    image: require("../../../assets/images/teams/Human.webp"),
  },
  {
    name: "Khemri",
    hidden: true,
    image: require("../../../assets/images/teams/Khemri.webp"),
  },
  {
    name: "Khorne",
    hidden: true,
    image: require("../../../assets/images/teams/Khorne_banner.png.webp"),
  },
  {
    name: "Nigromantes",
    hidden: true,
    image: require("../../../assets/images/teams/Necromantic.webp"),
  },
  {
    name: "Nobleza Imperial",
    image: require("../../../assets/images/teams/Imperial.webp"),
    data: ImperialData,
  },
  {
    name: "No-Muertos",
    hidden: true,
    image: require("../../../assets/images/teams/Undead.webp"),
  },
  {
    name: "Nórdicos",
    image: require("../../../assets/images/teams/Norse.webp"),
    data: NorseData,
  },
  {
    name: "Nurgle",
    hidden: true,
    image: require("../../../assets/images/teams/Nurgle.webp"),
  },
  {
    name: "Ogros",
    hidden: true,
    image: require("../../../assets/images/teams/Ogre.webp"),
  },
  {
    name: "Orcos",
    hidden: true,
    image: require("../../../assets/images/teams/Orc.webp"),
  },
  {
    name: "Orcos Negros",
    data: BlackOrcsData,
    image: require("../../../assets/images/teams/Black-Orc.webp"),
  },
  {
    name: "Renegados del Caos",
    hidden: true,
    image: require("../../../assets/images/teams/Chaos-Chosen.webp"),
  },
  {
    name: "Skavens",
    data: SkavenData,
    image: require("../../../assets/images/teams/Skaven.webp"),
  },
  {
    name: "Slaanesh",
    hidden: true,
    image: require("../../../assets/images/teams/slaanesh.webp"),
  },
  {
    name: "Slann",
    hidden: true,
    image: require("../../../assets/images/teams/Slann.webp"),
  },
  {
    name: "Snotlings",
    hidden: true,
    image: require("../../../assets/images/teams/Snotling.webp"),
  },
  {
    name: "Unión Élfica",
    hidden: true,
    image: require("../../../assets/images/teams/Elven-Union.webp"),
  },
  {
    name: "Vampiros",
    hidden: true,
    image: require("../../../assets/images/teams/Vampire.webp"),
  },
];

export default teams;
