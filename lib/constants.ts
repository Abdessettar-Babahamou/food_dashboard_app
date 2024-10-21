import {
  BadgePercent,
  Bell,
  Bookmark,
  ChartPie,
  CircleDollarSign,
   Heart,
  Home,
  Info,
  Lock,
  Mail,
   Settings,
  StoreIcon,
   Users,
} from "lucide-react";

export const nav_Links = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Reports",
    url: "/",
    icon: BadgePercent,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ChartPie,
  },
  {
    title: "Rewards",
    url: "/",
    icon: Mail,
  },
  {
    title: "LeaderBoard",
    url: "/",
    icon: Bell,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export const foods = [
  {
    title: "Spicy seasoned seafood noodles",
    decription: "20 Bowls available",
    price: 20.2,
    imageçurl: "/Image_1.png",
  },
  {
    title: "Salted Pasta with mushroom sauce",
    decription: "20 Bowls available",
    price: 10.2,
    imageçurl: "/Image_2.png",
  },
  {
    title: "Beef dumpling in hot and sour soup",
    decription: "20 Bowls available",
    price: 15.2,
    imageçurl: "/Image_3.png",
  },
  {
    title: "Spicy seasoned seafood noodles",
    decription: "20 Bowls available",
    price: 30.2,
    imageçurl: "/Image_6.png",
  },
  {
    title: "Spicy instant noodle with special omelette",
    decription: "20 Bowls available",
    price: 15.2,
    imageçurl: "/Image_5.png",
  },
  {
    title: "Hot spicy fried rice with omelet",
    decription: "20 Bowls available",
    price: 20.2,
    imageçurl: "/Image_6.png",
  },
  {
    title: "Spicy seasoned seafood noodles",
    decription: "20 Bowls available",
    price: 30.2,
    imageçurl: "/Image_7.png",
  },
  {
    title: "Spicy instant noodle with special omelette",
    decription: "20 Bowls available",
    price: 15.2,
    imageçurl: "/Image_1.png",
  },
  {
    title: "Hot spicy fried rice with omelet",
    decription: "20 Bowls available",
    price: 20.2,
    imageçurl: "/Image_2.png",
  },
  {
    title: "Beef dumpling in hot and sour soup",
    decription: "20 Bowls available",
    price: 15.2,
    imageçurl: "/Image_3.png",
  },
  {
    title: "Spicy seasoned seafood noodles",
    decription: "20 Bowls available",
    price: 30.2,
    imageçurl: "/Image_6.png",
  },
  {
    title: "Spicy instant noodle with special omelette",
    decription: "20 Bowls available",
    price: 15.2,
    imageçurl: "/Image_5.png",
  },
];

export const cartItems = [
  {
    title: "Spicy seasoned seafood noodles",
    decription: "20 Bowls available",
    price: 20.2,
    imageçurl: "/Image_1.png",
    qty: 2,
  },
  {
    title: "Salted Pasta with mushroom sauce",
    decription: "20 Bowls available",
    price: 10.2,
    imageçurl: "/Image_2.png",
    qty: 4,
  },
  {
    title: "Beef dumpling in hot and sour soup",
    decription: "20 Bowls available",
    price: 15.2,
    imageçurl: "/Image_3.png",
    qty: 1,
  },
];

export enum CardType {
  RENVENUE,
  ORDERD,
  CUSTOMER,
}

export enum OrderStatus {
  Completed = "Completed",
  Preparing = "Preparing",
  Pending = "Pending",
}
export const orderStatus = [
  {
    precentage: "+40,40%",
    amount: "$10,243.00",
    description: "Total Revenue",
    icon: CircleDollarSign,
    type: CardType.RENVENUE,
  },

  {
    precentage: "-2,40%",
    amount: "23,456",
    description: "Total Dish Ordered",
    icon: Bookmark,
    type: CardType.ORDERD,
  },
  {
    precentage: "+40,40%",
    amount: "1,234",
    description: "Total Customer",
    icon: Users,
    type: CardType.CUSTOMER,
  },
  {
    precentage: "+40,40%",
    amount: "$10,243.00",
    description: "Total Revenue",
    icon: CircleDollarSign,
    type: CardType.RENVENUE,
  },
];

export const orderList = [
  {
    name: "Eren Jaegar",
    menu: "Spicy seasoned seafood noodles",
    totalAmount: 125,
    status: OrderStatus.Completed,
    avatar: "/Avatar 1.png",
  },
  {
    name: "Reiner Braunn",
    menu: "Salted Pasta with mushroom sauce",
    totalAmount: 145,
    status: OrderStatus.Preparing,
    avatar: "/Avatar2.png",
  },
  {
    name: "Levi Ackerman",
    menu: "Spicy seasoned seafood noodles",
    totalAmount: 105,
    status: OrderStatus.Pending,
    avatar: "/Avatar3.png",
  },
  {
    name: "Historia Reiss",
    menu: "Spicy seasoned seafood noodles",
    totalAmount: 45,
    status: OrderStatus.Completed,
    avatar: "/Avatar4.png",
  },
  {
    name: "Hanji Zoe",
    menu: "Spicy seasoned seafood noodles",
    totalAmount: 125,
    status: OrderStatus.Completed,
    avatar: "/Avatar5.png",
  },
];

export const settingsMenuItem = [
  {
    icon: Heart,
    title: "Appereance",
    description: "Dark and Light mode, Font size",
  },
  {
    icon: StoreIcon,
    title: "Your Restaurant",
    description: "Dark and Light mode, Font size",
  },
  {
    icon: StoreIcon,
    title: "Products Management",
    description: "Dark and Light mode, Font size",
  },
  {
    icon: Bell ,
    title: "Notifications",
    description: "Customize your notifications",
  },
  ,
  {
    icon: Lock ,
    title: "Security",
    description: "Configure Password, PIN, etc",
  },
  ,
  {
    icon: Info ,
    title: "About Us",
    description: "Find out more about Posly",
  },
  {
    icon: Info ,
    title: "About Us",
    description: "Find out more about Posly",
  }
  
];
