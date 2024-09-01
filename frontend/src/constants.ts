export const cityOpt = [
  { label: "Ankara", value: "Ankara" },
  { label: "Istanbul", value: "Istanbul" },
  { label: "Izmir", value: "Izmir" },
  { label: "Rize", value: "Rize" },
];

export const sortOpt = [
  {
    label: "Price: Ascending",
    value: "price-asc",
  },
  {
    label: "Price: Descending",
    value: "price-desc",
  },
  {
    label: "Rating: Ascending",
    value: "rating-asc",
  },
  {
    label: "Rating: Descending",
    value: "rating-desc",
  },
];

export const initial = {
  name: "",
  location: "",
  address: "",
  description: "",
  amenities: "",
  rating: "",
  price_per_night: "",
  availability: false,
};

export const inputs = [
  {
    label: "Title",
    name: "name",
    placeholder: "Enter a title...",
  },
  {
    label: "Location",
    name: "location",
    placeholder: "Enter the location...",
  },
  {
    label: "Address",
    name: "address",
    placeholder: "Enter the address...",
  },
  {
    label: "Description",
    name: "description",
    placeholder: "Enter a description...",
  },
  {
    label: "Amenities (Separate with ,)",
    name: "amenities",
    placeholder: "Enter the amenities...",
  },
  {
    label: "Rating",
    name: "rating",
    placeholder: "Enter the rating...",
    type: "number",
  },
  {
    label: "Price/per night",
    name: "price_per_night",
    placeholder: "Enter the price per night...",
    type: "number",
  },
  {
    label: "Availability",
    name: "availability",
    type: "checkbox",
    isChecked: false,
  },
];

export const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
};
