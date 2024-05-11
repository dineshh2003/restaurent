type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options? : {title : string; additionalPrice: number } [];
}

type Products = Product[];

export const featuredProducts : Products = [
    {
        id: 1,
        title: "pizza ",
        desc: "Ignite your taste buds with a hehehehe",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            {
                title: "small",
                additionalPrice: 0,
            },
            {
                title: "medium",
                additionalPrice: 4,
            },
            {
                title : "large",
                additionalPrice: 7,
            },
        ]
    },
    {
        id: 2,
        title: "pizza ",
        desc: "Ignite your taste buds with a hehehehe",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            {
                title: "small",
                additionalPrice: 0,
            },
            {
                title: "medium",
                additionalPrice: 4,
            },
            {
                title : "large",
                additionalPrice: 7,
            },
        ]
    },
    {
        id: 3,
        title: "pizza ",
        desc: "Ignite your taste buds with a hehehehe",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            {
                title: "small",
                additionalPrice: 0,
            },
            {
                title: "medium",
                additionalPrice: 4,
            },
            {
                title : "large",
                additionalPrice: 7,
            },
        ]
    },
    {
        id: 4,
        title: "pizza ",
        desc: "Ignite your taste buds with a hehehehe",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            {
                title: "small",
                additionalPrice: 0,
            },
            {
                title: "medium",
                additionalPrice: 4,
            },
            {
                title : "large",
                additionalPrice: 7,
            },
        ]
    },
    {
        id: 5,
        title: "pizza ",
        desc: "Ignite your taste buds with a hehehehe",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            {
                title: "small",
                additionalPrice: 0,
            },
            {
                title: "medium",
                additionalPrice: 4,
            },
            {
                title : "large",
                additionalPrice: 7,
            },
        ]
    },
    {
        id: 6,
        title: "pizza ",
        desc: "Ignite your taste buds with a hehehehe",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            {
                title: "small",
                additionalPrice: 0,
            },
            {
                title: "medium",
                additionalPrice: 4,
            },
            {
                title : "large",
                additionalPrice: 7,
            },
        ]
    },
    {
        id: 7,
        title: "pizza ",
        desc: "Ignite your taste buds with a hehehehe",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            {
                title: "small",
                additionalPrice: 0,
            },
            {
                title: "medium",
                additionalPrice: 4,
            },
            {
                title : "large",
                additionalPrice: 7,
            },
        ]
    },
]