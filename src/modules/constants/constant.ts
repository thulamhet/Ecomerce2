import images from "../../constants/images";

const listTemp = [images.woman, images.woman2, images.street_style]

export interface product {
    id: string,
    title: string,
    uri: string,
    price: number,
    sale: string,
    isLike: boolean,
}

export const DATA: product[] = [
    {
        id: 'bd7acbea-c1b11-46c2-aed5-3ad53abb28ba',
        title: 'Sport Dress',
        uri: 'https://pa.namshicdn.com/product/A6/02849W/1-zoom-desktop.jpg',
        price: 10,
        sale: '13%',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a43f8-fbd91aa97f63',
        title: 'Evening Dress',
        uri: 'https://www.armani.com/variants/images/17411127376002522/F/w400.jpg',
        price: 12,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-b4d96-145571e29d72',
        title: 'T Dress',
        uri: 'https://assets.ajio.com/medias/sys_master/root/20210128/eiYh/6012d1c77cdb8c1f1431faf9/-473Wx593H-441112769-olive-MODEL.jpg',
        price: 32,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'T Shirt',
        uri: 'https://bizweb.dktcdn.net/100/294/644/products/new-york-yankees-mlblike-short-sleeve-t-shirt-31tssj931-50l-3.jpg?v=1590840514473',
        price: 32,
        sale: '20%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d32',
        title: 'Slip Dress',
        uri: 'https://images.ctfassets.net/afruo3gr1g6h/1neJD5dKkccCloIO55ux2Y/524ea178cbcdf072ae36e966425ac1a4/W-DRS-10-NAV_11951.jpg?w=1440&q=50',
        price: 55,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'Dau Dress',
        uri: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/443814/item/vngoods_72_443814.jpg?width=1008&impolicy=quality_75',
        price: 23,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29e92',
        title: 'Puffer Jacket',
        uri: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb4%2F71%2Fb471145fcb8178c871f034fdc4aa6f19c3520f5e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 76,
        sale: '15%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29a12',
        title: 'Elena Dress',
        uri: 'https://www.getdressedhire.com.au/wp-content/uploads/2019/10/http___static.theiconic.com_.au_p_eliya-the-label-2018-255369-1.jpg',
        price: 55,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29q52',
        title: 'Sport Jacket',
        uri: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/092/products/badge-of-sport-jacket-blue-gm0708-21-model.jpg',
        price: 49,
        sale: '15%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29l09',
        title: 'Hoddie',
        uri: 'https://imgcdn.thitruongsi.com/tts/fill/600/0/sm/0/plain/file://product/2020/10/26/4c33c6a0-1756-11eb-9b3b-f31fc8df7d49.jpg',
        price: 23,
        sale: '20%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29q01',
        title: 'Flare Dress',
        uri: 'https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPWOMEN-GATHERPRET1174419237F93E6/1625561044599_0..jpg',
        price: 45,
        sale: '10%',
        isLike: false,

    },
];

export const DATAg: product[] = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad253abb28ba',
        title: 'Sport Dress',
        uri: 'https://pa.namshicdn.com/product/A6/02849W/1-zoom-desktop.jpg',
        price: 10,
        sale: '13%',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-f2bd91aa97f63',
        title: 'Evening Dress',
        uri: 'https://www.armani.com/variants/images/17411127376002522/F/w400.jpg',
        price: 12,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-b4d96-145571e29d71',
        title: 'Dau Dress',
        uri: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/443814/item/vngoods_72_443814.jpg?width=1008&impolicy=quality_75',
        price: 23,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-4715f-bd96-145571e29l09',
        title: 'Hoddie',
        uri: 'https://imgcdn.thitruongsi.com/tts/fill/600/0/sm/0/plain/file://product/2020/10/26/4c33c6a0-1756-11eb-9b3b-f31fc8df7d49.jpg',
        price: 23,
        sale: '20%',
        isLike: false,


    },
    {
        id: '58694a0f-3d6a1-471f-bd96-145571e29d72',
        title: 'T Dress',
        uri: 'https://assets.ajio.com/medias/sys_master/root/20210128/eiYh/6012d1c77cdb8c1f1431faf9/-473Wx593H-441112769-olive-MODEL.jpg',
        price: 32,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f7-3da1-471f-bd96-145571e29d74',
        title: 'T Shirt',
        uri: 'https://bizweb.dktcdn.net/100/294/644/products/new-york-yankees-mlblike-short-sleeve-t-shirt-31tssj931-50l-3.jpg?v=1590840514473',
        price: 32,
        sale: '20%',
        isLike: false,


    },
    {
        id: '58694a08f-3da1-471f-bd96-145571e29q01',
        title: 'Flare Dress',
        uri: 'https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPWOMEN-GATHERPRET1174419237F93E6/1625561044599_0..jpg',
        price: 45,
        sale: '10%',
        isLike: false,

    },
    {
        id: '58694a0f8-3da1-471f-bd96-145571e29q52',
        title: 'Sport Jacket',
        uri: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/092/products/badge-of-sport-jacket-blue-gm0708-21-model.jpg',
        price: 49,
        sale: '15%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-8bd96-145571e29d32',
        title: 'Slip Dress',
        uri: 'https://images.ctfassets.net/afruo3gr1g6h/1neJD5dKkccCloIO55ux2Y/524ea178cbcdf072ae36e966425ac1a4/W-DRS-10-NAV_11951.jpg?w=1440&q=50',
        price: 55,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471rf-bd96-145571e29a12',
        title: 'Elena Dress',
        uri: 'https://www.getdressedhire.com.au/wp-content/uploads/2019/10/http___static.theiconic.com_.au_p_eliya-the-label-2018-255369-1.jpg',
        price: 55,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-b4d96-145571e29e92',
        title: 'Puffer Jacket',
        uri: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb4%2F71%2Fb471145fcb8178c871f034fdc4aa6f19c3520f5e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 76,
        sale: '15%',
        isLike: false,


    },
    
];

export const DATAt: product[] = [
    {
        id: '58694a0f-3da1-471f-b2d96-145571e29e92',
        title: 'Puffer Jacket',
        uri: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb4%2F71%2Fb471145fcb8178c871f034fdc4aa6f19c3520f5e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 76,
        sale: '15%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd496-145571e29a12',
        title: 'Elena Dress',
        uri: 'https://www.getdressedhire.com.au/wp-content/uploads/2019/10/http___static.theiconic.com_.au_p_eliya-the-label-2018-255369-1.jpg',
        price: 55,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd965-145571e29d32',
        title: 'Slip Dress',
        uri: 'https://images.ctfassets.net/afruo3gr1g6h/1neJD5dKkccCloIO55ux2Y/524ea178cbcdf072ae36e966425ac1a4/W-DRS-10-NAV_11951.jpg?w=1440&q=50',
        price: 55,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd966-145571e29q52',
        title: 'Sport Jacket',
        uri: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/092/products/badge-of-sport-jacket-blue-gm0708-21-model.jpg',
        price: 49,
        sale: '15%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd916-145571e29q01',
        title: 'Flare Dress',
        uri: 'https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPWOMEN-GATHERPRET1174419237F93E6/1625561044599_0..jpg',
        price: 45,
        sale: '10%',
        isLike: false,

    },
    {
        id: '58694a0f-3da1-471f-bd926-145571e29d74',
        title: 'T Shirt',
        uri: 'https://bizweb.dktcdn.net/100/294/644/products/new-york-yankees-mlblike-short-sleeve-t-shirt-31tssj931-50l-3.jpg?v=1590840514473',
        price: 32,
        sale: '20%',
        isLike: false,


    },
    {
        id: '58694a0f-3da14-471f-bd96-145571e29d72',
        title: 'T Dress',
        uri: 'https://assets.ajio.com/medias/sys_master/root/20210128/eiYh/6012d1c77cdb8c1f1431faf9/-473Wx593H-441112769-olive-MODEL.jpg',
        price: 32,
        sale: '10%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f6-bd96-145571e29l09',
        title: 'Hoddie',
        uri: 'https://imgcdn.thitruongsi.com/tts/fill/600/0/sm/0/plain/file://product/2020/10/26/4c33c6a0-1756-11eb-9b3b-f31fc8df7d49.jpg',
        price: 23,
        sale: '20%',
        isLike: false,


    },
    {
        id: '58694a0f-3da1-471f-bd96-1455771e29d71',
        title: 'Dau Dress',
        uri: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/443814/item/vngoods_72_443814.jpg?width=1008&impolicy=quality_75',
        price: 23,
        sale: '10%',
        isLike: false,


    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd24391aa97f63',
        title: 'Evening Dress',
        uri: 'https://www.armani.com/variants/images/17411127376002522/F/w400.jpg',
        price: 12,
        sale: '10%',
        isLike: false,


    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3a12d53abb28ba',
        title: 'Sport Dress',
        uri: 'https://pa.namshicdn.com/product/A6/02849W/1-zoom-desktop.jpg',
        price: 10,
        sale: '13%',
        isLike: true,
    },
    
];

export const uri  = [
    'https://www.armani.com/variants/images/17411127376002522/F/w400.jpg',
    'https://www.armani.com/variants/images/17411127376002522/F/w400.jpg',
    'https://assets.ajio.com/medias/sys_master/root/20210128/eiYh/6012d1c77cd,b8c1f1431faf9/-473Wx593H-441112769-olive-MODEL.jpg'
]

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
        data: DATAt,
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