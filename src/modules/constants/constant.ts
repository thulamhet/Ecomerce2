import images from "../../constants/images";

const listTemp = [images.woman, images.woman2, images.street_style]

export const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Sport Dress',
        uri: listTemp,
        price: '10$',
        sale: '10%',
        isLike: false,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Evening Dress',
        uri: listTemp,
        price: '12$',
        sale: '10%'

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'T Dress',
        uri: listTemp,
        price: '1200$',
        sale: '10%',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'T Shirt',
        uri: listTemp,
        price: '1200$',
        sale: '10%',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d32',
        title: 'Silip Dress',
        uri: listTemp,
        price: '1200$',
        sale: '10%',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'Dau Dress',
        uri: listTemp,
        price: '1200$',
        sale: '10%',

    },
];


export const DATA2 = [
    {
        id: '1',
        category: 'Sale',
        data: DATA,
        title: 'Super summer sale'
    },
    {
        id: '2',
        category: 'New',
        data: DATA,
        title: `You've seen it before`

    },
    // {
    //     id: '3',
    //     category: 'Hehe1',
    //     data: DATA,
    //     title: 'Super winter sale'
    // },
    // {
    //     id: '4',
    //     category: 'Hehe2',
    //     data: DATA,
    //     title: 'Super spring sale'
    // },
    // {
    //     id: '5',
    //     category: 'Hehe3',
    //     data: DATA,
    //     title: 'Super autumn sale'
    // },
]