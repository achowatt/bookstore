import { v4 as uuidv4 } from "uuid";

const data = () => {
  return [
    {
      id: uuidv4(),
      name: "The Rose Code",
      price: 15,
      category: "Fiction",
      description:
        "The Rose Code follows three young women who worked at England's Bletchley Park, a country estate converted to a code-breaking facility during World War II. Employees at Bletchley Park deciphered encrypted Nazi communications, providing vital information to the Allies.",
    },
    {
      id: uuidv4(),
      name: "The Lost Apothecary",
      price: 17.49,
      category: "Fiction",
      description:
        "The Lost Apothecary is a stunning debut novel that will capture your attention and your heart. It is a dual story line. Nella the apothecary tells her story in the 1790's as a woman betrayed she uses her art to help other women that have also been betrayed. The catch is she dispenses potions that are deadly.",
    },
    {
      id: uuidv4(),
      name: "The Final Revival of Opal & Nev",
      price: 15,
      category: "Fiction",
      description:
        "An electrifying novel about the meteoric rise of an iconic interracial rock duo in the 1970s, their sensational breakup, and the dark secrets unearthed when they try to reunite decades later for one last tour.",
    },
    {
      id: uuidv4(),
      name: "The Beauty of Living Twice",
      price: 25,
      category: "Non-Fiction",
      description:
        "In The Beauty of Living Twice, Stone chronicles her efforts to rebuild her life and writes about her slow road back to wholeness and health. The Beauty of Living Twice is a book for the wounded and a book for the survivors; it's a celebration of women's strength and resilience, a reckoning, and a call to activism.",
    },
    {
      id: uuidv4(),
      name: "Be A Work In Progress",
      price: 32,
      category: "Non-Fiction",
      description:
        "For years, John Cena has been using his popular Twitter feed to uplift his followers with his unique brand of positivity. Now, he collects his favorite words of wisdom on the benefits of being bold and open-minded, embracing discomfort, and making the most of every opportunity.",
    },
    {
      id: uuidv4(),
      name: "The Hill We Climb",
      price: 30,
      category: "Non-Fiction",
      description:
        "Amanda Gorman's poem THE HILL WE CLIMB reminds us of what we have been able to do and what is possible. Delivered in a way that is reflective as well as forward looking, we can see that together there are still great things to achieve---if we allow ourselves to do so.",
    },
    {
      id: uuidv4(),
      name: "5 Ingredients - Quick & Easy Food",
      price: 39.99,
      category: "Cookbooks",
      description:
        "It''s all about making the journey to good food very, very simple. Every recipe uses just five key ingredients, ensuring you can get a meal together fast, whether it's finished and on the table in a flash, or after minimal hands-on prep, you've let the oven do the hard work for you.",
    },
    {
      id: uuidv4(),
      name: "Momofuku: A Cookbook",
      price: 41.75,
      category: "Cookbooks",
      description:
        "Chef David Chang single-handedly revolutionized cooking in America and beyond with his use of bold Asian flavors and impeccable ingredients, his mastery of the humble ramen noodle, and his thorough devotion to pork. ",
    },
    {
      id: uuidv4(),
      name: "Think Big!",
      price: 7.99,
      category: "Kids Books",
      description:
        "Jamaal may be the oldest kid in his family, but he somehow got stuck with the smallest room. His parents agree that it isn't fair, but that is just how it is. But Jamaal isn't satisfied by the answer - if his parents aren't going to fix the house, he will use creativity and his own resourcefulness to engineer the perfect space!",
    },
    {
      id: uuidv4(),
      name: "Dinosaurs Before Dark Graphic Novel",
      price: 12,
      category: "Kids Books",
      description:
        "Before Jack and Annie can find out, the mysterious tree house whisks them to the prehistoric past. Now they have to figure out how to get home. Can they do it before dark...or will they become a dinosaur's dinner?",
    },
    {
      id: uuidv4(),
      name: "One Piece, VOL. 96",
      price: 12.99,
      category: "Other",
      description:
        "As a child, Monkey D. Luffy dreamed of becoming King of the Pirates. But his life changed when he accidentally gained the power to stretch like rubber...at the cost of never being able to swim again! Years, later, Luffy sets off in search of the One Piece, said to be the greatest treasure in the world...",
    },
  ];
};

export default data;
