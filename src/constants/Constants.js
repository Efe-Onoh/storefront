import { Dashboard } from "@mui/icons-material";
import { BannerImage, BeautyCare, Billing, Devices, HomeCare, Invoices, LatestOffers, Lifestyles, Management, MedicalEssential, MomBaby, Nutrition, PersonalCare, Symptoms, Tools, TopBrands, UsersRoles } from "../assets/svg/General/General";

export const isLargeScreens = "(max-width:1600px)";
export const isMediumScreens = "(max-width:1023px)";
export const isSmallScreens = "(max-width:768px)";
export const isExtraSmallScreens = "(max-width:540px)";

export const headerNav = [
  {
    icon:<LatestOffers/> ,
    label: "Latest Offers",
    dropdown: false
  },
  {
    icon:<Symptoms/> ,
    label: "Symptoms",
    dropdown: true
  },
  {
    icon:<MedicalEssential/> ,
    label: "Medical Essentials",
    dropdown: false
  },
  {
    icon:<Nutrition/> ,
    label: "Nutrition",
    dropdown: true
  },
  {
    icon:<PersonalCare/> ,
    label: "Personal Care",
    dropdown: true
  },
  {
    icon:<BeautyCare/> ,
    label: "Beauty Care",
    dropdown: true
  },
  {
    icon:<MomBaby/> ,
    label: "Mom & Baby",
    dropdown: true
  },
  {
    icon:<HomeCare/> ,
    label: "Home Care",
    dropdown: true
  },
  {
    icon:<Lifestyles/> ,
    label: "Lifestyles",
    dropdown: true
  },
  {
    icon:<TopBrands/> ,
    label: "Top Brands",
    dropdown: true
  },
  
]
export const sidebarMenu1 = [
    {
      icon: <Dashboard />,
      label: "Dashboard",
      path: "/dashboard",
      onClick: () => {
        // perform sideeffects
        console.log("Our agents icon clicked");
      },
    },
    {
      icon: <Invoices />,
      label: "Invoices",
      path: "/invoices",
      onClick: () => {
        console.log("our culture icon clicked");
      },
    },
  ];

  export const sidebarMenu2 = [
    {
      icon: <Management />,
      label: "Management",
      path: "/management",
      onClick: () => {
        // perform sideeffects
        console.log("Our agents icon clicked");
      },
      subMenu: [
        {
          icon:<>""</>,
          label: "Devices",
          path: "/devices",
          onClick: () => {
            console.log("our culture icon clicked");
          },
        },
        {
            icon: <>""</>,
            label: "Users & Roles",
            path: "/usersandroles",
            onClick: () => {
              console.log("our culture icon clicked");
            },
          },
      ]
    },
      {
        icon: <Billing />,
        label: "Billing",
        path: "/billing",
        onClick: () => {
          console.log("our culture icon clicked");
        },
      },
      {
        icon: <Tools />,
        label: "Tools",
        path: "/tools",
        onClick: () => {
          console.log("our culture icon clicked");
        },
      },
  ];

  export const headerDropdownItems = [
    {
      label: "English",
      onClick: () => {
        console.log("buy icon clicked");
      },
    },
    {
      label: "French",
      onClick: () => {
        console.log("rent icon clicked");
      },
    },
    {
      label: "Arabic",
      onClick: () => {
        console.log("Sell icon clicked");
      },}
  ];

  export const deviceTypes=[
    {
      label: "Apple iOS"
    },
    {
      label: "Android"
    }
  ]

  export const products = [
    {
      id:1,
      imgPath: "/images/product1.png",
      name: "MB Raw Whey Isolate",
      status: "Stock Available",
      price: "200",
      job: "Entrepreneur",
      rating: 5,
    },
    {
      id: 2,
      imgPath: "/images/product2.png",
      name: "MB Raw Whey Isolate",
      status: "Stock Available",
      price: "200",
      job: "Entrepreneur",
      rating: 5,
    },
    { 
      id: 3,
      imgPath: "/images/product3.png",
      name: "MB Raw Whey Isolate",
      status: "Stock Available",
      price: "200",
      job: "Entrepreneur",
      rating: 5,
    },
    {
      id: 4,
      imgPath: "/images/product1.png",
      name: "MB Raw Whey Isolate",
      status: "Stock Available",
      price: "200",
      job: "Entrepreneur",
      rating: 5,
    },
    {
      id: 5,
      imgPath: "/images/product2.png",
      name: "MB Raw Whey Isolate",
      status: "Stock Available",
      price: "200",
      job: "Entrepreneur",
      rating: 5,
    },
  ];

  export const blogs = [
    {
      id:1,
      imgPath: "/images/blog1.png",
      title: "Diabetic Care",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    {
      id: 2,
      imgPath: "/images/blog2.png",
      title: "Diabetic Care",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    { 
      id: 3,
      imgPath: "/images/blog3.png",
      title: "Diabetic Care",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    {
      id: 4,
      imgPath: "/images/blog1.png",
      title: "Diabetic Care",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    {
      id: 5,
      imgPath: "/images/blog2.png",
      title: "Diabetic Care",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
  ];