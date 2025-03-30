// src/constants/HeaderConstants.js
export const headerText = {
    logo: "Project X",
    searchPlaceholder: "Search...",
    loginText: "Login",
    navLinks: [
      { id: 1, text: "HOME", href: "/" },
      { id: 2, text: "AJIRA", href: "/ajira" },
      { id: 3, text: "ELIMU", href: "/elimu" },
      { 
        id: 4, 
        text: "BURUDANI", 
        href: "/burudani",
        dropdown: true,
        dropdownItems: [
          { text: "Sublink 1", href: "/burudani/sub1" },
          { text: "Sublink 2", href: "/burudani/sub2" },
          { text: "Sublink 3", href: "/burudani/sub3" }
        ]
      },
      { id: 5, text: "MATOEKO", href: "/matoeko" },
      { id: 6, text: "MZIKI", href: "/mziki" },
      { id: 7, text: "SOKA", href: "/soka" }
    ],
    pricingText: "PRICING",
    joinText: "JIUNGE",
    adSections: [
        {
          id: 1,
          position: "top",
          content: "Top Ad Placeholder",
        },
        {
          id: 2,
          position: "bottom",
          content: "Bottom Ad Placeholder",
        }
      ]
  };