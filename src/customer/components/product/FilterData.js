export const filters =[
    {
        id: "color",
        name: "Color",
        options: [
            {value: "white", label: "White"},
            {value: "beige", label: "Beige"},
            {value: "blue", label: "Blue"},
            {value: "brown", label: "Brown"},
            {value: "green", label: "Green"},
            {value: "purple", label: "Purple"},
            {value: "yellow", label: "Yellow"},
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            {value: "S", label: "S"},
            {value: "M", label: "M"},
            {value: "L", label: "L"},
        ],
    },
];

export const singleFilter=[
    {
        id: "price",
        name: "Price",
        options: [
            {value: "159-399", label: "Rs159-Rs399"},
            {value: "399-999", label: "Rs399-Rs999"},
            {value: "999-1999", label: "Rs999-Rs1999"},
            {value: "1999-2999", label: "Rs1999-Rs2999"},
            {value: "3999-4999", label: "Rs2999-Rs4999"},
        ],
    },
    {
        id: "discount",
        name: "Discount range",
        options: [
            {
                value: "10",
                label: "10% and above",
            },
            {value: "20", label: "20% and above"},
            {value: "30", label: "30% and above"},
            {value: "40", label: "40% and above"},
            {value: "50", label: "50% and above"},
            {value: "60", label: "60% and above"},
            {value: "70", label: "70% and above"},
            {value: "80", label: "80% and above"},
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out Of Stock"},
        ],
    },
]